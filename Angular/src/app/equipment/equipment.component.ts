import { Component, OnInit } from '@angular/core';

import { Settings } from '../app.settings.model';
import { AppSettings } from '../app.settings';
import { MatTableDataSource } from '@angular/material/table';
import {  ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Vehicles } from '../Models/Vehicles'
import { Equipment, PostEquipment } from '../Models/equipment';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogOverviewExampleDialog } from '../pages/ui/dialog/dialog.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { types } from '../Models/eqType';
import { EquipmentService } from './equipmentservice';
import { isSuccess } from 'angular-in-memory-web-api';
import { error } from 'protractor';
import { analytics } from 'firebase';
import { ConfirmDialogService } from '../shared/Dialogs/ConfirmDialog/confirm-dialog.service';
import { SuccessDialogService } from '../shared/Dialogs/SuccessDialog/success-dialog.service';


declare var jsPDF: any;  //<<<<<<<<<<<<<< new jspdf import


export interface Element{
  Value:string;
  Text: string;
}


@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss']
})



export class EquipmentComponent implements OnInit {

public displayedColumns = ['Equipment_ID', 'Equipment_type_Description', 'Equipment_Description', 'Infrastructure_Name','Section_Name','Equipment_Condition','Equipment_Cost','Is_Active','Actions'];
  public dataSource: any; //<<<<<< Data source for table
  public settings: Settings;
  show: boolean = false;   // <<< edit form show
  showAdd: boolean = false; // <<< Add form show
  showtable: boolean = true; // <<< show table
  form: FormGroup;
  @ViewChild(MatPaginator) paginator: MatPaginator;

currentEdit: number;
ops:any; // <<<< Header for AUTH
sections: string[] = [ // << Dropdown data
]
types: types[] = [];   // <<<< dropdown data for equipment types
condition: string[] = ["Good","Fair","Poor"]; // <<<< dropdown data
infrastructures: Element[] = []; // <<<< dropdown data to be populated at ngONinit!!!!!!!!!!!!!!!!!!!!!!!!!!!
active: Element[] = [{Value: "True", Text: "True"},{Value: "False", Text: "False"}]; // <<<< dropdown data
data : Equipment[] = []; // <<< Table data goes here
equipmentEdit: PostEquipment = new PostEquipment; // <<<< equipment instance for PUT
equipmentAdd: PostEquipment = new PostEquipment; // <<<< equipment instance for POST
AdminPriv: string; // <<<< Check user ROLE

  constructor(public appSettings:AppSettings,public router: Router, private formbuilder: FormBuilder, public dialog: MatDialog, private http : HttpClient,private eqService: EquipmentService, private dialogService: ConfirmDialogService, private DialogService: SuccessDialogService) {
    this.settings = this.appSettings.settings; 
   

    this.form = this.formbuilder.group({  // <<<< Form validation
      'Description':['', Validators.compose([Validators.required,Validators.maxLength(50)])],
      'Cost':['', Validators.compose([Validators.required,Validators.maxLength(10)])],
   

      Type : new FormControl,
      Condition : new FormControl,
      Infras : new FormControl,
      Section : new FormControl,



    })
  }
  ngOnInit(): void {
     
     if(localStorage.getItem("jwtToken") == null){ 
        this.router.navigateByUrl("login");
     }else{
      this.AdminPriv = localStorage.getItem("PrivelageLevel");
      
      this.getData();
      
   
     }


  }

//====================================Get data==============================
  data1:any;
  tableData: Equipment[]  = [];
  getData(){
    
    this.eqService.getEquipment().subscribe( //<<<<<<Get All Equipment
      (response) =>{
        this.data1 = response;
        this.tableData = this.data1;
        console.log(this.data1);
        this.dataSource = new MatTableDataSource<Equipment>(this.data1);  //<<<<populate datasource
        this.dataSource.paginator = this.paginator; // <<<<<<< Paginator setup
        
      },
      error=>{  //========If JWT is not accepted do this
         // alert("An error has occured, please re login");
         // this.router.navigateByUrl("logout");
         console.log(error);
          
      }
    );

    this.eqService.getSections().subscribe(
      success=>{
        this.data1 = success;
        this.sections = this.data1;
      },
      error =>{
        alert("No sections found!")
        this.router.navigateByUrl("/section")
        
      }
    );

    this.eqService.getEquipmentTypes().subscribe(  //<<<<<<Get equipment types
      (response) => {
            this.data1 = response;
            console.log(this.data1);
            this.types = this.data1;
    },
    error=>{
      
    }
    );

    this.eqService.getInfras().subscribe(
      success=>{
        this.data1 = success;
        this.infrastructures = this.data1;
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
  getEquipmentDetail(Id: number){
    this.getSection();
    localStorage.setItem("CurrentEquipment", Id.toString())
    this.ops = {     // <<<<<< Initialize header with token
      headers: new HttpHeaders({
        
        'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
      })
    };
    this.eqService.getEquipmentDetails(Id).subscribe( // <<<< get specific equipment
      success => {
        this.data1 = success;
        this.equipmentEdit = this.data1;
        this.currentEdit = Id;
        console.log(this.data1);
        if(this.equipmentEdit.Infrastructure_ID!=null){
          this.selectionMade=true;
          this.getInfrastructure(this.equipmentEdit.Section_ID);
        }
      }
    );
    this.changeform();
  }


  //===========================Change forms to add equipment============
  AddEquipment(){
    if(this.show == true){
         this.show = false;
    }
    this.equipmentAdd = new PostEquipment;
    this.showAdd = true;
    this.showtable = false;
    this.getSection();
    if(this.types.length < 1){
      alert("Please add types")
      this.router.navigateByUrl("eqTypes");
    }

  }


  //=============================PUT equipment==========================
  PutEquipment(){
    this.eqService.putEquipment(this.equipmentEdit, this.currentEdit).subscribe(
    success=>{
      console.log(success);
    },

    error=>{
      console.log(error)
    }
    );
  }

  ConfirmEditEquipment() {
    const options = {
      title: 'Finshed Editing?',
      message: 'By confirming, your information will be changed.',
      cancelText: 'CANCEL',
      confirmText: 'YES, CONFIRM CHANGES'
    };
    
    this.dialogService.open(options);
        
    this.dialogService.confirmed().subscribe(confirmed => {
       if (confirmed) {
            this.PutEquipment(); // for the edit 
            window.location.reload();
          }
        });
  }

  //this function is to cancel the edit 
  CancelEditEquipment() {
    const options = {
      title: 'Cancel Edit?',
      message: 'By confirming your information will be lost.',
      cancelText: 'CANCEL',
      confirmText: 'YES, DISCARD CHANGES'
    };
    
    this.dialogService.open(options);
        
    this.dialogService.confirmed().subscribe(confirmed => {
       if (confirmed) {
            this.showTable(); //to show the table
          }
        });
  }

  //===========================POST equipment==========================
  addNewEquipment(){
    this.equipmentAdd.Farm_ID = Number(localStorage.getItem("currentFarm"));
    this.equipmentAdd.Is_Active = "1";
    
    this.ops = {     // <<<<<< Initialize header with token
      headers: new HttpHeaders({
        
        'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
      })
    };
    this.eqService.postEquipment(this.equipmentAdd).subscribe( //<<<<<<<< Add equipment
      (response) =>  {
          console.log(response);
          
      }
    );
  }

  ConfirmAddEquipment() {
    const options = {
      title: 'Finshed Adding?',
      message: 'By confirming, your information will be saved.',
      cancelText: 'CANCEL',
      confirmText: 'YES, CONFIRM CHANGES'
    };
    
    this.dialogService.open(options);
        
    this.dialogService.confirmed().subscribe(confirmed => {
       if (confirmed) {
            this.addNewEquipment(); // for the edit 
            window.location.reload();
          }
        });
  }

  CancelAddEquipment() {
    const options = {
      title: 'Cancel Add?',
      message: 'By confirming your information will be lost.',
      cancelText: 'CANCEL',
      confirmText: 'YES, DISCARD CHANGES'
    };
    
    this.dialogService.open(options);
        
    this.dialogService.confirmed().subscribe(confirmed => {
       if (confirmed) {
            this.showTable(); //to show the table
          }
        });
  }

  //===========================Remove Equipment=======================
  deleteEquipment(Id: number){
    const options = {
      title: 'Deleting Farm?',
      message: 'By confirming your information will be deleted.',
      cancelText: 'CANCEL',
      confirmText: 'YES, DELETE'
    };
    this.dialogService.open(options);
    this.dialogService.confirmed().subscribe(confirmed => {
      if (confirmed) {
        this.eqService.deleteEquipment(Id).subscribe();
         }
       });  
  }


  //=========================Un Hide table===========================
  showTable(){
    this.showtable = true;
    this.showAdd = false;
    this.show = false;
  }
  //========================================Download PDF=============
  rows = []; //<<< For JSON parsing
  temp: Equipment; //<< To add to list
  //=======================Download Equipment report================
  Download(){
    const doc = new jsPDF('portrait','px','a4'); //<<<<<Declare pdf
    
    

    for(let i = 0;  i< this.tableData.length; i++){   //<<< get all rows in JSOn and convert to object list
        this.temp =  this.tableData[i];
        
        this.rows.push([this.temp.Equipment_Type_Description,this.temp.Equipment_Description,this.temp.Infrastructure_Name,this.temp.Section_Name, this.temp.Equipment_Condition,this.temp.Equipment_Cost, this.temp.Is_Active ]);
        
    }

    
    doc.autoTable({ //<<<<< Add list to table, order is important here
      head: [['Equipment Type', 'Description', 'Infrastructure','Section','Condition','Cost','Is Active']],
      body: this.rows
    }); 
    doc.save("EquipmentList"); //<<<< save doc


  }

  //=======================Navigate to equipment types==============
  LoadTypes(){
    this.router.navigateByUrl("eqTypes");
  }

  
  random(){

  }
sectionsList:any;
getSection(){
  this.eqService.getSection().subscribe( 
    (response)=>{
      this.sectionsList=response;
      console.log(this.sectionsList);
    }
  )
}

infraList:any;
getInfrastructure(selectedSectionID:number): Promise<any> {
  var promise = new Promise<any>((res, rej) => {
    this.eqService.getInfrastructure(selectedSectionID).subscribe( 
      (response)=>{
        this.infraList=response;
        res(response);
      }
    )
  })
  return promise;
}
sectionID:number
selectionMade:boolean=false;
sectionSelected(){
  this.selectionMade=true;
  this.getInfrastructure(this.sectionID);

  if(this.equipmentEdit!=null){
    this.equipmentEdit.Infrastructure_ID=null;
  }
  else{
    this.equipmentAdd.Infrastructure_ID==null;
  }

}
}





