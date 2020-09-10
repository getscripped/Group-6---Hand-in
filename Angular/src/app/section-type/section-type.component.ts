import { Component, OnInit } from '@angular/core';

import { Settings } from '../app.settings.model';
import { AppSettings } from '../app.settings';
import { MatTableDataSource } from '@angular/material/table';
import {  ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogOverviewExampleDialog } from '../pages/ui/dialog/dialog.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SectionTypes, PostSectionType } from '../Models/SectionType';
import { SectionTypeService } from './sectiontype-service.service';
import { isSuccess } from 'angular-in-memory-web-api';
import { error } from 'protractor';
import { AddsectionDialogComponent } from './addsection-dialog/addsection-dialog.component';
import { EditsectionDialogComponent } from './editsection-dialog/editsection-dialog.component';

export interface Element {
  Value: number;
  Text: string;
  }

@Component({
  selector: 'app-section-type',
  templateUrl: './section-type.component.html',
  styleUrls: ['./section-type.component.scss']
})
export class SectionTypeComponent implements OnInit {

  public displayedColumns = ['Section_Type_Description','Actions'];
  public dataSource: any;
  public settings: Settings;
  show: boolean = false;
  showAdd: boolean = false;
  showTable: boolean = true;
  form: FormGroup;
  @ViewChild(MatPaginator) paginator: MatPaginator;
//test
currentEdit: number;
ops: any;
//types: SectionTypes[] = [];
active: Element[] = [{Value: 1, Text: "True"},{Value: 0, Text: "False"}]; // <<<< dropdown data
SectionTypeEdit: PostSectionType = new PostSectionType;
SectionTypeAdd: PostSectionType = new PostSectionType;
data : SectionTypes[] = [];
AdminPriv: string;


  constructor(public appSettings:AppSettings,public router: Router, private formbuilder: FormBuilder, public dialog: MatDialog, private http : HttpClient,private SecTypeService: SectionTypeService) {
    this.settings = this.appSettings.settings; 
    console.log("lol");
    this.form = this.formbuilder.group({
      'Description': ['',Validators.compose([Validators.required, Validators.maxLength(20)])],
      /*'Size': ['',Validators.compose([Validators.required, Validators.maxLength(10)])],
      'SType': ['',Validators.compose([Validators.required])],
      'Location': ['',Validators.compose([Validators.required,Validators.maxLength(150)])],

      SecType : new FormControl,
      Type : new FormControl,*/

      

  })
  }
  ngOnInit(): void {
     
    if(localStorage.getItem("jwtToken") == null){ 
       this.router.navigateByUrl("login");
    }else{
     this.AdminPriv = localStorage.getItem("PrivelageLevel");
     //localStorage.setItem("currentFarm","5"); //<<<<<< Remove when done!!!!!!!!!!!!!!!!!!!!
     this.getData();
     
  
    }


 }

  //====================================Get data==============================
  dataSectionType:any;
  getData(){
    
    this.SecTypeService.getSectionTypes().subscribe( //<<<<<<Get All Sections
      (response) =>{
        this.dataSectionType = response;
        console.log(this.dataSectionType);
        this.dataSource = new MatTableDataSource<SectionTypes>(this.dataSectionType);  //<<<<populate datasource
        this.dataSource.paginator = this.paginator; // <<<<<<< Paginator setup
        localStorage.setItem("hasSection","yes")
      },
      error=>{  //========If JWT is not accepted do this
        console.log(error);

         // alert("An error has occured, please re login");
         // this.router.navigateByUrl("logout");

          
      }
    );

    this.SecTypeService.getSectionTypes().subscribe(  //<<<<<<Get Section types
      (response) => {
            this.dataSectionType = response;
            console.log(this.dataSectionType);
            //this.types = this.dataSection;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  changeform(){
    if(this.show == false){
      this.show =true;
      this.showAdd = false;
      this.showTable = false;
    }
  }

//========================Get Values for selected Section to edit=====
getSectionTypeDetail(Id: number){
  localStorage.setItem("CurrentSectionType", Id.toString())
  this.ops = {     // <<<<<< Initialize header with token
    headers: new HttpHeaders({
      
      'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
    })
  };
  this.SecTypeService.getSectionTypeDetails(Id).subscribe( // <<<< get specific equipment
    success => {
      this.dataSectionType = success;
      this.SectionTypeEdit = this.dataSectionType;
      this.currentEdit = Id;
      const dialogRef = this.dialog.open(EditsectionDialogComponent,{
        data:this.dataSectionType
      });
    }
  );
  
}

  //===========================Change forms to add Section type============
  AddSectionType(){
    // if(this.show == true){
    //      this.show = false;
    // }
    // this.SectionTypeAdd = new PostSectionType;
    // this.showAdd = true;
    // this.showTable = false;
    const dialogRef = this.dialog.open(AddsectionDialogComponent
      
      );
      //this.showAdd=true;
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
  }


  //=============================PUT Section type==========================
  PutSectionType(){
    this.SecTypeService.putSectionType(this.SectionTypeEdit, this.currentEdit).subscribe(
    success=>{
      console.log(success);
    },

    error=>{
      console.log(error)
    }
    );
  }

//===========================POST Section==========================
addNewSectionType(){

  this.SectionTypeAdd.Farm_ID = Number(localStorage.getItem("currentFarm"));//Remove!!!!!!!

  
  
  this.ops = {     // <<<<<< Initialize header with token
    headers: new HttpHeaders({
      
      'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
    })
  };
  this.SecTypeService.postSectionType(this.SectionTypeAdd).subscribe( //<<<<<<<< Add Section type
    (response) =>  {
        console.log(response);
    }
  );
}

//===========================Remove Section=======================
deleteSectionType(Id: number){
  if(confirm("Are you sure to delete this Section Type?")) {
    this.SecTypeService.deleteSectionType(Id).subscribe(
      success=>{
        alert("Section Type removed successfully!");
      },
      error=>{
        alert(error);
      }
    );
  }
}

//=========================Un Hide table===========================
ShowTable(){
  this.showTable = true;
  this.showAdd = false;
  this.show = false;
}


}
