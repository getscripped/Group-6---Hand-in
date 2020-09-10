import { Component, OnInit } from '@angular/core';

import { Settings } from '../app.settings.model';
import { AppSettings } from '../app.settings';
import { MatTableDataSource } from '@angular/material/table';
import {  ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Vehicles } from '../Models/Vehicles'
import { PostScheduledTasks, ScheduledTask } from '../Models/ScheduledTasks';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl, NgModel } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogOverviewExampleDialog } from '../pages/ui/dialog/dialog.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ScheduledtasksService } from './scheduledtasks.service';
import { isSuccess } from 'angular-in-memory-web-api';
import { Task } from '../Models/Task';
import { Staff } from '../Models/Staff';
import { Status } from '../Models/Status';
import { Days } from '../Models/Day_Of_Week';
import { faIR } from 'date-fns/locale';
import { Sections } from '../Models/Section';
import { Section } from 'jspdf-autotable';
import { Equipment } from '../Models/equipment';
import { Infrastructure } from '../Models/Infrastructures';
import { ConfirmDialogService } from '../shared/Dialogs/ConfirmDialog/confirm-dialog.service';
declare var jsPDF: any;  //<<<<<<<<<<<<<< new jspdf import


export interface Element{
  Value:number;
  Text: string;
}

@Component({
  selector: 'app-scheduledtasks',
  templateUrl: './scheduledtasks.component.html',
  styleUrls: ['./scheduledtasks.component.scss']
})

export class ScheduledtasksComponent implements OnInit {

  public displayedColumns = ['Schedule_ID', 'Day_Description', 'Task_Description','Staff_Name', 'Schedule_Start_Date', 'Schedule_End_Date', 'Status_Description','Actions'];
  public dataSource: any; //<<<<<< Data source for table
  public settings: Settings;
  show: boolean = false;   // <<< edit form show
  showAdd: boolean = false; // <<< Add form show
  showtable: boolean = true; // <<< show table
  form: FormGroup;
  StartSelected: boolean = true;
EndSelected: boolean = true;
DaySelected: boolean = true;
disableTask: boolean = false;
disableStaff: boolean = false;
recurring: boolean = true;
DateDifference: number;

  @ViewChild(MatPaginator) paginator: MatPaginator;

currentEdit: number;
//currentSection: Sections = new Sections;
ops:any; // <<<< Header for AUTH
tasks: Task[] = [];   // <<<< dropdown data for tasks
staff: Staff[] = [];   // <<<< dropdown data for staff
statusses: Status[] = [];
days: Days[] = [];
sections: Sections[] = [];
equipments: Equipment[] = [];
infrastructures: Infrastructure[] = [];
data : ScheduledTask[] = []; // <<< Table data goes here
ScheduledTaskEdit: PostScheduledTasks = new PostScheduledTasks; // <<<< equipment instance for PUT
ScheduledTaskAdd: PostScheduledTasks = new PostScheduledTasks; // <<<< equipment instance for POST
AdminPriv: string; // <<<< Check user ROLE
Task_ID: number;
Infrastructure_ID: number;
Equipment_ID: number;
currentSection: string;
currentInfrastructure: string;
currentEquipment: string;
day_Description: string;
today3: any;
today: Date;

//once: boolean = false;

  constructor(public appSettings:AppSettings,public router: Router, private formbuilder: FormBuilder, public dialog: MatDialog, private http : HttpClient, private dialogService: ConfirmDialogService, private schService: ScheduledtasksService) {
    this.settings = this.appSettings.settings; 
   

    this.form = this.formbuilder.group({  // <<<< Form validation
      'end_Date':['', Validators.compose([Validators.required])],
      'start_Date':['', Validators.compose([Validators.required])],

      task_Description : new FormControl,
      staff_Name : new FormControl,
      day_Description : new FormControl,
      status_Description : new FormControl,

    })
  }
  ngOnInit(): void {
     
        if(localStorage.getItem("jwtToken") === null){
           this.router.navigateByUrl("login");
        }else{
      this.AdminPriv = localStorage.getItem("PrivelageLevel");

      this.today = new Date();
      var today2 = this.today.toString().substr(0,3);
      this.today3 = today2.slice(0, 3);
      console.log(this.today3);
      //localStorage.setItem("selectedTask", "2");
      this.getData();
      
   
      }


  }

//====================================Get data==============================
  data1:any;
  tableData: ScheduledTask[]  = [];
  getData(){
    
    this.schService.getScheduledTasks().subscribe( //<<<<<<Get All Equipment
      (response) =>{
        this.data1 = response;
        this.tableData = this.data1;
        //console.log(this.data1);
        this.dataSource = new MatTableDataSource<ScheduledTask>(this.data1);  //<<<<populate datasource
        this.dataSource.paginator = this.paginator; // <<<<<<< Paginator setup
      }
    );

    this.schService.getDay().subscribe(
      (response) => {
        this.data1 = response;
        //console.log(this.data1);
        this.days = this.data1;
});

this.schService.getStf().subscribe(
  (response) => {
    this.data1 = response;
    //console.log(this.data1);
    this.staff = this.data1;
});

    this.schService.getTsk().subscribe(
      (response) => {
        this.data1 = response;
        //console.log(this.data1);
        this.tasks = this.data1;
});

    this.schService.getStat().subscribe(
      (response) => {
        this.data1 = response;
        //console.log(this.data1);
        this.statusses = this.data1;
});

  }

  
//====================================Table Filter==========================
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  //==============================Paginator initializer======================
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  //===========================Change between add and edit forms===========
  changeform(){
    if(this.show == false){
      this.show =true;
      this.showAdd = false;
      this.showtable = false;
    }
  }


  //========================Get Values for selected equipment to edit=====
  getScheduledTaskDetail(Id: number){
    //localStorage.setItem("CurrentScheduledTask", Id.toString())
    this.ops = {     // <<<<<< Initialize header with token
      headers: new HttpHeaders({
        
        'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
      })
    };
    this.schService.getScheduledTaskDetails(Id).subscribe( // <<<< get specific equipment
      success => {
        this.data1 = success;
        this.ScheduledTaskEdit = this.data1;
        this.currentEdit = Id;
      }
    );
    this.changeform();
  }


  //===========================Change forms to add equipment============
  AddScheduledTask(){
    if(this.show == true){
         this.show = false;
    }
    this.ScheduledTaskAdd = new PostScheduledTasks;
    this.showAdd = true;
    this.showtable = false;


  }

  PutScheduledTask(){
    if(this.recurring == true){
      if(this.ScheduledTaskEdit.Schedule_Start_Date > this.ScheduledTaskEdit.Schedule_End_Date){

        alert("Please check that the start date provided preceds the end date provided!");
  
      }else {
        this.schService.putScheduledTask(this.ScheduledTaskEdit, this.currentEdit).subscribe(
          success=>{
            console.log(success);
          },
      
          error=>{
            console.log(error)
          }
          );}
      //this.StartString = this.DateDifference.toString();
    }else{
      this.schService.putScheduledTask(this.ScheduledTaskEdit, this.currentEdit).subscribe(
      success=>{
        console.log(success);
      },
  
      error=>{
        console.log(error)
      }
      );
    }
  }


  ConfirmEditST() { 
    const options = {
      title: 'Finished Editing Scheduled Task?',
      message: 'By leaving the page your information will be changed.',
      cancelText: 'CANCEL',
      confirmText: 'YES, CONFIRM CHANGES'
    };
    
    this.dialogService.open(options);
        
    this.dialogService.confirmed().subscribe(confirmed => {
       if (confirmed) {
            this.PutScheduledTask(); // your post/add function 
            window.location.reload();
          }
        });
  }

  CancelEditST() { 
    const options = {
      title: 'Leaving Page?',
      message: 'By leaving the page your information will be lost.',
      cancelText: 'CANCEL',
      confirmText: 'YES, DISCARD CHANGES'
    };
    
    this.dialogService.open(options);
        
    this.dialogService.confirmed().subscribe(confirmed => {
       if (confirmed) {
            this.showTable(); // your post/add function 
          }
        });
  }

  //===========================POST equipment==========================
  addNewScheduledTask(){
    //this.ScheduledTaskAdd.Farm_ID = 1;
    this.ScheduledTaskAdd.Status_ID = 2;
    
    this.ops = {     // <<<<<< Initialize header with token
      headers: new HttpHeaders({
        
        'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
      })
    };
    this.EndSelected = false;
    if( this.recurring == true ){
      this.DateDifference = Math.floor((Date.UTC(this.ScheduledTaskAdd.Schedule_End_Date.getFullYear(), this.ScheduledTaskAdd.Schedule_End_Date.getMonth(), this.ScheduledTaskAdd.Schedule_End_Date.getDate()) - Date.UTC(this.ScheduledTaskAdd.Schedule_Start_Date.getFullYear(), this.ScheduledTaskAdd.Schedule_Start_Date.getMonth(), this.ScheduledTaskAdd.Schedule_Start_Date.getDate()) ) /(1000 * 60 * 60 * 24));
      if(this.ScheduledTaskAdd.Schedule_Start_Date > this.ScheduledTaskAdd.Schedule_End_Date){

        alert("Please check that the start date provided precedes the end date provided!");
  
      }else if(this.DateDifference > 365){
  
        alert("The time period may not exceed 1 year, please review your selection!")
  
      }else {      
        this.schService.postScheduledTask(this.ScheduledTaskAdd).subscribe( //<<<<<<<< Add equipment
        (response) =>  {
            console.log(response);
        }
      );
    }
      //this.StartString = this.DateDifference.toString();
    }else{  
      
        this.schService.postScheduledTask(this.ScheduledTaskAdd).subscribe( //<<<<<<<< Add equipment
          (response) =>  {
            console.log(response);
        }
        );
     }
}
    

  

  ConfirmAddST() { 
    const options = {
      title: 'Finished Adding Scheduled Task?',
      message: 'By leaving the page your information will be saved.',
      cancelText: 'CANCEL',
      confirmText: 'YES, ADD'
    };
    
    this.dialogService.open(options);
        
    this.dialogService.confirmed().subscribe(confirmed => {
       if (confirmed) {
            this.addNewScheduledTask(); // your post/add function 
            window.location.reload();
          }
        });
  }

  CancelAddST() { 
    const options = { //the information you want the dialog to display 
      title: 'Leaving Page?',
      message: 'By leaving the page your information will be lost.',
      cancelText: 'CANCEL',
      confirmText: 'YES, DISCARD CHANGES'
    };
    
    this.dialogService.open(options);
        
    this.dialogService.confirmed().subscribe(confirmed => {
       if (confirmed) {
            this.showTable(); // your post/add function 
          }
        });
  }
  //===========================Remove Equipment=======================
  deleteScheduledTask(Id: number){
    const options = {
      title: 'Deleting Task from Schedule?',
      message: 'By confirming your information will be deleted.',
      cancelText: 'CANCEL',
      confirmText: 'YES, DELETE'
    };
    this.dialogService.open(options);
    this.dialogService.confirmed().subscribe(confirmed => {
      if (confirmed) {
        this.schService.deleteScheduledTask(Id).subscribe()
         }
       });
  }


  //=========================Un Hide table===========================
  showTable(){
    this.showtable = true;
    this.showAdd = false;
    this.show = false;
  }

  rows = []; //<<< For JSON parsing
  temp: ScheduledTask; //<< To add to list
  //=======================Download Equipment report================
  Download(){
    console.log(this.tableData);
    const doc = new jsPDF('landscape','px','a4'); //<<<<<Declare pdf
    
    for(let i = 0;  i< this.tableData.length; i++){   //<<< get all rows in JSOn and convert to object list
      this.temp =  this.tableData[i];
      if(this.temp.Day_Description.substr(0,3) == this.today3 ){ // would like to add a date check but struggling

        this.rows.push([this.temp.Day_Description, this.temp.Task_Description, this.temp.Staff_Name, this.temp.Schedule_Start_Date, this.temp.Schedule_End_Date, this.temp.Status_Description ]);
      }  
    }

    doc.autoTable({ //<<<<< Add list to table, order is important here
      head: [['Day', 'Task', 'Staff Name','Start Date','End Date','Status']],
      body: this.rows
    }); 
    doc.save("Scheduled Tasks List"); //<<<< save doc


  }

  onChangeRecurring(){
    //this.once = !this.once;
    this.recurring != this.recurring;
  }

  onChangeStartDate(event){
    this.StartSelected = true;
    console.log(this.StartSelected);

    if(this.StartSelected == true && this.EndSelected == true && this.DaySelected == true || this.recurring == false && this.StartSelected == true){
      this.form.controls["task_Description"].enable();
    } 
  }

  onChangeEndDate(event){
    this.EndSelected = !this.EndSelected;
    console.log(this.EndSelected);
    if(this.StartSelected == true && this.EndSelected == true && this.DaySelected == true){
      this.form.controls["task_Description"].enable();
    } 
  }

   onChangeDay(event){
    this.DaySelected = true;
    console.log(this.DaySelected);
    if(this.StartSelected == true && this.EndSelected == true && this.DaySelected == true){
      this.form.controls["task_Description"].enable();
    } 
  }
//taskIDSelection:number;
  onChangeTask(event){

    this.form.controls["staff_Name"].enable();

    if(this.showAdd == true){
      localStorage.setItem("selectedTask", this.ScheduledTaskAdd.Task_ID.toString());
    }

    if(this.show == true){
      localStorage.setItem("selectedTask", this.ScheduledTaskEdit.Task_ID.toString());
    }
    //console.log(this.Task_ID);

    this.schService.getStf().subscribe(
      (response) => {
        this.data1 = response;
        //console.log(this.data1);
        this.staff = this.data1;
});
  }


sendSchedules(){
  this.schService.sendSchedules().subscribe(
    success=>{
      console.log(success);
    },

    error=>{
      console.log(error)
    }
    );
  }
}
