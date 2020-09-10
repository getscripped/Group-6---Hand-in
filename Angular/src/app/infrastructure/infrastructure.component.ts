import { Component, OnInit } from '@angular/core';

import { Settings } from '../app.settings.model';
import { AppSettings } from '../app.settings';
import { MatTableDataSource } from '@angular/material/table';
import {  ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Vehicles } from '../Models/Vehicles'
import { Infrastructure, PostInfrastructure } from '../Models/Infrastructures';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogOverviewExampleDialog } from '../pages/ui/dialog/dialog.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { types } from '../Models/infType';
import { InfrastructureService } from './infrastructure.service';
import { isSuccess } from 'angular-in-memory-web-api';
import { Sections } from '../Models/Section';
import { error } from 'protractor';
import { analytics } from 'firebase';
import { ConfirmDialogService } from '../shared/Dialogs/ConfirmDialog/confirm-dialog.service';
declare var jsPDF: any;  //<<<<<<<<<<<<<< new jspdf import



export interface Element{
  Value:number;
  Text: string;
}


@Component({
  selector: 'app-infrastructure',
  templateUrl: './infrastructure.component.html',
  styleUrls: ['./infrastructure.component.scss']
})

export class InfrastructureComponent implements OnInit {
  public displayedColumns = ['Infrastructure_ID', 'Infrastructure_Name', 'Infrastructure_Location','Infrastructure_Size', 'Section_Name', 'Infrastructure_Type_Description', 'Is_Active','Actions'];
  public dataSource: any;
  public settings: Settings;
  show: boolean = false;   // <<< edit form show
  showAdd: boolean = false; // <<< Add form show
  showtable: boolean = true; // <<< show table
  form: FormGroup;
  @ViewChild(MatPaginator) paginator: MatPaginator;

currentEdit: number;
ops:any; // <<<< Header for AUTH
types: types[] = [];   // <<<< dropdown data for equipment types
sections: Sections[] = []; // <<<< dropdown data to be populated at ngONinit!!!!!!!!!!!!!!!!!!!!!!!!!!!
active: Element[] = [{Value: 1, Text: "Yes"},{Value: 0, Text: "No"}]; // <<<< dropdown data
data : Infrastructure[] = []; // <<< Table data goes here
InfrastructureEdit: PostInfrastructure = new PostInfrastructure; // <<<< equipment instance for PUT
InfrastructureAdd: PostInfrastructure = new PostInfrastructure; // <<<< equipment instance for POST
AdminPriv: string; // <<<< Check user ROLE

  constructor(public appSettings:AppSettings,public router: Router, private dialogService: ConfirmDialogService, private formbuilder: FormBuilder, public dialog: MatDialog, private http : HttpClient,private infService: InfrastructureService) {
    this.settings = this.appSettings.settings; 

    this.form = this.formbuilder.group({  // <<<< Form validation
      'Name':['', Validators.compose([Validators.required,Validators.maxLength(50)])],
      'Location':['', Validators.compose([Validators.required,Validators.maxLength(50)])],
      'Size':['', Validators.compose([Validators.required,Validators.maxLength(10)])],

      Type : new FormControl,
      Section : new FormControl,

    })
  }
  ngOnInit(): void {
     
    //  if(localStorage.getItem("jwtToken") === null){
    //     this.router.navigateByUrl("login");
    //  }else{
      this.AdminPriv = localStorage.getItem("PrivelageLevel");

      this.getData();

   
     //}


  }

//====================================Get data==============================
  data1:any;
  data2: any;
  tableData: Infrastructure[]  = [];
  getData(){
    
    this.infService.getInfrastructure().subscribe( //<<<<<<Get All Equipment
      (response) =>{
        this.data1 = response;
        this.tableData = this.data1;
        console.log(this.data1);
        this.dataSource = new MatTableDataSource<Infrastructure>(this.data1);  //<<<<populate datasource
        this.dataSource.paginator = this.paginator; // <<<<<<< Paginator setup
      }
    );

     this.infService.getInfrastructureTypes().subscribe(  //<<<<<<Get equipment types
       (response) => {
             this.data1 = response;
             console.log(this.data1);
             this.types = this.data1;
     });

     this.infService.getSec().subscribe(
      (response) => {
        this.data1 = response;
        console.log(this.data1);
        this.sections = this.data1;
      }
    );

    
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
  getInfrastructureDetail(Id: number){
    //localStorage.setItem("CurrentInfrastructure", Id.toString())
    this.ops = {     // <<<<<< Initialize header with token
      headers: new HttpHeaders({
        
        'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
      })
    };
    this.infService.getInfrastructureDetails(Id).subscribe( // <<<< get specific equipment
      success => {
        this.data1 = success;
        this.InfrastructureEdit = this.data1;
        this.currentEdit = Id;
        console.log(this.data1);
      }
    );
    this.changeform();
  }


  //===========================Change forms to add equipment============
  AddInfrastructure(){
    if(this.show == true){
         this.show = false;
    }
    this.InfrastructureAdd = new PostInfrastructure;
    this.showAdd = true;
    this.showtable = false;
  }


  //=============================PUT equipment==========================
  PutInfrastructure(){
    console.log(this.InfrastructureEdit);
    this.infService.putInfrastructure(this.InfrastructureEdit, this.currentEdit).subscribe(
      success=>{
        console.log(success);

      },
  
      error=>{
        console.log(error)
      }
      );
    }

    ConfirmEditINF() { 
      const options = {
        title: 'Finished Editing Infrastructure?',
        message: 'By leaving the page your information will be changed.',
        cancelText: 'CANCEL',
        confirmText: 'YES, CONFIRM CHANGES'
      };
      
      this.dialogService.open(options);
          
      this.dialogService.confirmed().subscribe(confirmed => {
         if (confirmed) {
              this.PutInfrastructure(); // your post/add function 
              this.showTable();
            }
          });
    }
  
    CancelEditINF() { 
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
  addNewInfrastructure(){
    //this.InfrastructureAdd.Farm_ID = 1;
    this.InfrastructureAdd.Is_Active = 1;
    
    this.ops = {     // <<<<<< Initialize header with token
      headers: new HttpHeaders({
        
        'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
      })
    };
    this.infService.postInfrastructure(this.InfrastructureAdd).subscribe( //<<<<<<<< Add equipment
      (response) =>  {
          console.log(response);
      }
    );
  }

  ConfirmAddINF() { 
    const options = {
      title: 'Finished Adding Infrastructure?',
      message: 'By leaving the page your information will be saved.',
      cancelText: 'CANCEL',
      confirmText: 'YES, ADD'
    };
    
    this.dialogService.open(options);
        
    this.dialogService.confirmed().subscribe(confirmed => {
       if (confirmed) {
            this.addNewInfrastructure(); // your post/add function 
            window.location.reload();
          }
        });
  }

  CancelAddINF() { 
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
  deleteInfrastructure(Id: number){
    const options = {
      title: 'Deleting Infrastructure?',
      message: 'By confirming your information will be deleted.',
      cancelText: 'CANCEL',
      confirmText: 'YES, DELETE'
    };
    this.dialogService.open(options);
    this.dialogService.confirmed().subscribe(confirmed => {
      if (confirmed) {
        this.infService.deleteinfrastructure(Id).subscribe()
         }
       });
  }


  //=========================Un Hide table===========================
  showTable(){
    this.showtable = true;
    this.showAdd = false;
    this.show = false;
  }

  //===================================================================
  rows = []; //<<< For JSON parsing
  temp: Infrastructure; //<< To add to list
  //=======================Download Equipment report================
  Download(){
    console.log(this.tableData);
    const doc = new jsPDF('portrait','px','a4'); //<<<<<Declare pdf
    
    for(let i = 0;  i< this.tableData.length; i++){   //<<< get all rows in JSOn and convert to object list
        this.temp =  this.tableData[i];
        this.rows.push([this.temp.Infrastructure_Name, this.temp.Infrastructure_Location, this.temp.Infrastructure_Size, this.temp.Section_Name, this.temp.Infrastructure_Type_Description, this.temp.Is_Active ]);
        
    }

    
    doc.autoTable({ //<<<<< Add list to table, order is important here
      head: [['Name', 'Location', 'Size','Section','Infrastructure Type','Is Active']],
      body: this.rows
    }); 
    doc.save("Infrastructure List"); //<<<< save doc


  }
  

}











