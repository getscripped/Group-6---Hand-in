import {  OnInit, ElementRef } from '@angular/core';
import { Settings } from '../app.settings.model';
import { AppSettings } from '../app.settings';
import { MatTableDataSource } from '@angular/material/table';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Vehicles, postVehicle } from '../Models/Vehicles'
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { VehicleService } from './vehicleservice';
import { isSuccess } from 'angular-in-memory-web-api';
import { ConfirmDialogService } from '../shared/Dialogs/ConfirmDialog/confirm-dialog.service';
import { SuccessDialogService } from '../shared/Dialogs/SuccessDialog/success-dialog.service';
import { HttpHeaders } from '@angular/common/http';
declare var jsPDF: any;  //<<<<<<<<<<<<<< new jspdf import

export interface Element {
Vehicle_ID: string;
Vehicle_Type_Description: string;
Make_Description: string;
Model_Description: string;
Section_Name: string;
Vehicle_Mileage_Current: string;
Vehicle_Registration_Number: string;
is_Active: string;
}



@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent implements OnInit {
  @ViewChild('table') htmlData:ElementRef;
  public displayedColumns = [ 'Vehicle_Type_Description', 'Model_Description', 'Section_Name','Infrastructure_Name','Vehicle_Mileage_Current','Vehicle_Registration_Number','is_Active','Mileage','Actions'];
  public dataSource: any;
  selectID: number;
  public settings: Settings;
  show: boolean = false;
  showAdd: boolean = false;
  @ViewChild(MatPaginator) paginator: MatPaginator;

 data: Element[] = [    // << dummy data
    
  ];
  
 types: string[] = [  // << Dropdown data
   
 ]

 infrastructures: string[] = [ // << Dropdown data
   
 ]

 makes: string[] = [ // << Dropdown data
   
 ]

 sections: string[] = [ // << Dropdown data
    ]

 models: string[] =[ // << Dropdown data
  
 ]

VehicleEdit: postVehicle = new postVehicle; // <<< Object to edit vehicle
VehicleAdd: postVehicle = new postVehicle; // <<< Object to Add vehicle
AdminPriv: string; // <<< Store Role here
selectedValue: string; // <<< dropdown selected value
ModelSelect: string; // <<< dropdown selected value
MakeSelect: String; // <<< dropdown selected value
SectionSelect: string; // <<< dropdown selected value
InfrastructureSelect: string; // <<< dropdown selected value
showtable: boolean = true; // <<< show table variable
form: FormGroup;  // <<< Formgroup
  ops: { headers: HttpHeaders; };

  constructor(public appSettings:AppSettings, public router: Router, private formbuilder: FormBuilder, private veService: VehicleService, private dialogService: ConfirmDialogService, private DialogService: SuccessDialogService) {
    this.settings = this.appSettings.settings; 
    this.dataSource = new MatTableDataSource<Element>(this.data);
    console.log("testing");
    this.form = this.formbuilder.group({   //<<< Validation
      'Price':['', Validators.compose([Validators.required,Validators.maxLength(6)])],
      'PurchaseDate':['', Validators.compose([Validators.required,Validators.maxLength(10)])],
      'Registration':['', Validators.compose([Validators.required,Validators.maxLength(15)])],
      'LastService':['', Validators.compose([Validators.required,Validators.maxLength(8)])],
      'Interval':['', Validators.compose([Validators.required,Validators.maxLength(30)])],
      'CurrMileage':['', Validators.compose([Validators.required,Validators.maxLength(8)])],
      'PurchMileage':['', Validators.compose([Validators.required,Validators.maxLength(8)])],
      'Color':['', Validators.compose([Validators.required,Validators.maxLength(30)])],
      'Year':['', Validators.compose([Validators.required,Validators.maxLength(4)])],

      Type : new FormControl,
      Section : new FormControl,
      Infras : new FormControl,
      Make : new FormControl,
      Model : new FormControl,


    })
  }
  ngOnInit(): void {
     this.AdminPriv = localStorage.getItem("PrivelageLevel");
     if(localStorage.getItem("jwtToken") === null){
      this.router.navigateByUrl("login");
     }

     this.getData();
  }

//================================Get table data=======================
data1: any;
tableData: Vehicles[]  = [];
  getData(){
    this.veService.getVehicle().subscribe(
      (response) =>{
        this.data1 = response;
        this.tableData = this.data1;
        console.log(this.data1);
        this.dataSource = new MatTableDataSource<Vehicles>(this.data1);  //<<<<populate datasource
      },
      error=>{  //========If JWT is not accepted do this
        //  alert("An error has occured, please re login");
        //  this.router.navigateByUrl("logout");
        console.log(error);
      }

      
    );

    this.veService.getBrands().subscribe(
      success => {
        this.data1 = success;
        this.makes = this.data1["Makes"];
        this.models = this.data1["Models"];

        console.log(this.makes);
        console.log(this.models);
      },
      error=>{
        console.log(error);
      }
    );

    this.veService.getSections().subscribe(
      success=>{
        this.data1 = success;
        this.sections = this.data1;
      },
      error =>{
        console.log(error);
      }
    );

    this.veService.getInfras().subscribe(
      success=>{
        this.data1=success;
        console.log(this.data1);
        this.infrastructures=this.data1;
      },
      error=>{
        console.log(error);
      }
  
    );

    this.veService.getTypes().subscribe(
      success=>{
        this.data1 = success;
        this.types = this.data1;
      },
      error=>{
        console.log(error);
        alert("no types found, please add a type first");
        this.router.navigateByUrl("/veTypes");
      }
    );
  }
//================================Table filter=========================
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //==============================Paginator setup======================
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
 
  //=============================Show edit form=======================
  changeform(){
    if(this.show == false){
      this.show =true;
      this.showAdd = false;
      this.showtable = false;
    }
  }

  //===========================Populate edit vehicle object==========
  getVehicleDetail(Id: number){
    //Implement function to pupulate edit field and populate vehicle edit\
    
    this.selectID = Id;
    this.veService.getVehicleDetails(Id).subscribe(
      success=>{
        this.data1 = success;
        this.VehicleEdit = this.data1;
        console.log(this.data1);
      },
      error=>{
        alert("An error has occurred");
      }
    );


    this.changeform();
  }


  //====================================Show add vehicle form=============
  AddVehicle(){
    if(this.show == true){
         this.show = false;
    }
    
    this.showAdd = true;
    this.showtable = false;
    if(localStorage.getItem("hasSection") != "yes"){
      alert("No section has been fund");
      this.router.navigateByUrl("/section");
    }
  }


  //===============================Vehicle PUT function=================
  PutVehicle(){
    this.veService.putVehicle(this.VehicleEdit,this.selectID).subscribe(
      success=>{
        console.log("Done");
      },
      error=>{
        alert("Error");
      }
      
    );
  }

  ConfirmEditVehicle() {
    const options = {
      title: 'Finshed Editing?',
      message: 'By confirming, your information will be saved.',
      cancelText: 'CANCEL',
      confirmText: 'YES, CONFIRM CHANGES'
    };
    
    this.dialogService.open(options);
        
    this.dialogService.confirmed().subscribe(confirmed => {
       if (confirmed) {
            this.PutVehicle(); // for the edit 
            this.showTable();
          }
        });
  }

  CancelEditVehicle() {
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


  //==============================Vehicle POST function=================
  addNewVehicle(){
    this.ops = {   
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
      })
    };
    this.veService.postVehicle(this.VehicleAdd).subscribe( 
      (response) =>  {
          console.log(response);
      }
    );
  }

  ConfirmAddVehicle() { 
    const options = {
      title: 'Finished Adding Farm?',
      message: 'By leaving the page your information will be saved.',
      cancelText: 'CANCEL',
      confirmText: 'YES'
    };
    
    this.dialogService.open(options);
        
    this.dialogService.confirmed().subscribe(confirmed => {
       if (confirmed) {
            this.addNewVehicle(); // your post/add function 
            this.showTable(); 
          }
        });
  }

  CancelAddVehicle() {
    const options = {
      title: 'Cancel Add?',
      message: 'By confirming your information will be lost.',
      cancelText: 'CANCEL',
      confirmText: 'YES, DISCARD CHANGES'
    };
    
    this.dialogService.open(options);
        
    this.dialogService.confirmed().subscribe(confirmed => {
       if (confirmed) {
            this.showTable(); //to go back to the table 
          }
        });
  }

  //=============================Vehicle Delete function===============
  deleteVehicle(id:number){
    const options = {
      title: 'Deleting Farm?',
      message: 'By confirming your information will be deleted.',
      cancelText: 'CANCEL',
      confirmText: 'YES, DELETE'
    };
    this.dialogService.open(options);
    this.dialogService.confirmed().subscribe(confirmed => {
      if (confirmed) {
        this.veService.deleteVehicle(id).subscribe()
         }
       });
  }

  //============================Show table============================
  showTable(){
    this.showtable = true;
    this.showAdd = false;
    this.show = false;
  }
  rows = []; //<<< For JSON parsing
  temp: Vehicles; //<< To add to list
  //=============================Download vehicle list================
  Download(){
    const doc = new jsPDF('portrait','px','a4'); //<<<<<Declare pdf
        
        
    
        for(let i = 0;  i< this.tableData.length; i++){   //<<< get all rows in JSOn and convert to object list
            this.temp =  this.tableData[i];
            
            this.rows.push([this.temp.Vehicle_ID,this.temp.Vehicle_Type_Description,this.temp.Model_Description,this.temp.Section_Name,this.temp.Vehicle_Mileage_Current,this.temp.Vehicle_Registration_Number,this.temp.Is_Active]);
            
        }
    
        
        doc.autoTable({ //<<<<< Add list to table, order is important here
          head: [['Vehicle_ID', 'Vehicle_Type_Description', 'Model_Description', 'Section_Name','Vehicle_Mileage_Current','Vehicle_Registration_Number','is_Active','Actions']],
          body: this.rows
        }); 
        doc.save("EquipmentList"); //<<<< save doc
  }

  //==============================Navigate to vehicle types===========
  LoadTypes(){
    this.router.navigateByUrl("veTypes");
  }

  //===============================New mileage prompt=================
  Prompt(Vehicle_ID: string){
    var result = prompt("Please add new mileage");

    this.veService.updateKM(Vehicle_ID, result).subscribe(
      success=>{
        console.log(success);
      },
      error=>{
        console.log(error);
        
      }
    );
    
  }

      //=======================Download Equipment report================
      

      infraList:any;
getInfrastructure(selectedSectionID:number): Promise<any> {
  var promise = new Promise<any>((res, rej) => {
    this.veService.getInfrastructure(selectedSectionID).subscribe( 
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

  if(this.VehicleEdit!=null){
    this.VehicleEdit.Infrastructure_ID=null;
  }
  else{
    this.VehicleAdd.Infrastructure_ID==null;
  }

}
}
