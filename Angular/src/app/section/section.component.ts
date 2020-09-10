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
import { Sections, PostSection } from '../Models/Section';
import { SectionTypes } from '../Models/SectionType';
import { SectionService } from './section-service.service';
import { isSuccess } from 'angular-in-memory-web-api';
import { error } from 'protractor';
import { ConfirmDialogService } from '../shared/Dialogs/ConfirmDialog/confirm-dialog.service';
import { SuccessDialogService } from '../shared/Dialogs/SuccessDialog/success-dialog.service';

export interface Element {
  Value: number;
  Text: string;
  }

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  public displayedColumns = ['Section_Name','Section_Type_Description', 'Section_Location','Section_Size','Actions'];
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
types: SectionTypes[] = [];
active: Element[] = [{Value: 1, Text: "True"},{Value: 0, Text: "False"}]; // <<<< dropdown data
SectionEdit: PostSection = new PostSection;
SectionAdd: PostSection = new PostSection;
data : Sections[] = [];
AdminPriv: string;


  constructor(public appSettings:AppSettings,public router: Router, private formbuilder: FormBuilder, public dialog: MatDialog, private http : HttpClient,private SecService: SectionService, private dialogService: ConfirmDialogService, private DialogService: SuccessDialogService) {
    this.settings = this.appSettings.settings; 
    console.log("lol");
    this.form = this.formbuilder.group({
      'Name': ['',Validators.compose([Validators.required, Validators.maxLength(20)])],
      'Size': ['',Validators.compose([Validators.required, Validators.maxLength(10)])],
      'SType': ['',Validators.compose([Validators.required])],
      'Location': ['',Validators.compose([Validators.required,Validators.maxLength(150)])],

      SecType : new FormControl,
      Type : new FormControl,

      

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
  dataSection:any;
  getData(){
    console.log(localStorage.getItem("hasFarm"));
    if(localStorage.getItem("hasFarm") != "yes"){
      alert("No farm exists yet, please add a farm first");
      this.router.navigateByUrl("farm");
    }


    this.SecService.getSections().subscribe( //<<<<<<Get All Sections
      (response) =>{
        this.dataSection = response;
        console.log(this.dataSection);
        this.dataSource = new MatTableDataSource<Sections>(this.dataSection);  //<<<<populate datasource
        this.dataSource.paginator = this.paginator; // <<<<<<< Paginator setup
        localStorage.setItem("hasSection","yes");
      },
      error=>{  //========If JWT is not accepted do this
        console.log(error);
         // alert("An error has occured, please re login");
         // this.router.navigateByUrl("logout");
          
      }
    );

    this.SecService.getSectionTypes().subscribe(  //<<<<<<Get Section types
      success => {
            this.dataSection = success;
            console.log(this.dataSection);
            this.types = this.dataSection;
    },
    error=>{
      alert("Please add a section type first");
      this.router.navigateByUrl("/sec-type");
    }
    );


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
getSectionDetail(Id: number){
  localStorage.setItem("CurrentSection", Id.toString())
  this.ops = {     // <<<<<< Initialize header with token
    headers: new HttpHeaders({
      
      'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
    })
  };
  this.SecService.getSectionDetails(Id).subscribe( // <<<< get specific equipment
    success => {
      this.dataSection = success;
      this.SectionEdit = this.dataSection;
      this.currentEdit = Id;
    }
  );
  this.changeform();
}

  //===========================Change forms to add Section============
  AddSection(){
    if(this.show == true){
         this.show = false;
    }
    this.SectionAdd = new PostSection;
    this.showAdd = true;
    this.showTable = false;
  }


  //=============================PUT Section==========================
  PutSection(){
    this.SecService.putSection(this.SectionEdit, this.currentEdit).subscribe(
    success=>{
      console.log(success);
      window.location.reload();
    },

    error=>{
      console.log(error)
    }
    );
  }

  ConfirmSectionEdit(){
    const options = {
      title: 'Finshed Editing?',
      message: 'By confirming, your information will be changed.',
      cancelText: 'CANCEL',
      confirmText: 'YES, CONFIRM CHANGES'
    };
    
    this.dialogService.open(options);
        
    this.dialogService.confirmed().subscribe(confirmed => {
       if (confirmed) {
            this.PutSection(); // for the edit 
            this.ShowTable();
          }
        });
  }

  CancelSectionEdit(){
    const options = {
      title: 'Cancel Edit?',
      message: 'By confirming your information will be lost.',
      cancelText: 'CANCEL',
      confirmText: 'YES, DISCARD CHANGES'
    };
    
    this.dialogService.open(options);
        
    this.dialogService.confirmed().subscribe(confirmed => {
       if (confirmed) {
            this.ShowTable(); //to show the table
          }
        });
  }

  ConfirmAddSection(){
    const options = {
      title: 'Finished Adding Section?',
      message: 'By leaving the page your information will be saved.',
      cancelText: 'CANCEL',
      confirmText: 'YES'
    };
    
    this.dialogService.open(options);
        
    this.dialogService.confirmed().subscribe(confirmed => {
       if (confirmed) {
            this.addNewSection(); // your post/add function 
            this.ShowTable(); 
          }
        });
  }

  CancelAddSection(){
    const options = {
      title: 'Cancel Add?',
      message: 'By confirming your information will be lost.',
      cancelText: 'CANCEL',
      confirmText: 'YES, DISCARD CHANGES'
    };
    
    this.dialogService.open(options);
        
    this.dialogService.confirmed().subscribe(confirmed => {
       if (confirmed) {
            this.ShowTable(); //to go back to the table 
          }
        });
  }

//===========================POST Section==========================
addNewSection(){
  //this.SectionAdd.Farm_ID = "currentFarm";//Remove!!!!!!!
  this.SectionAdd.Is_Active = "1";
  
  this.ops = {     // <<<<<< Initialize header with token
    headers: new HttpHeaders({
      
      'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
    })
  };
  this.SecService.postSection(this.SectionAdd).subscribe( //<<<<<<<< Add Section
    (response) =>  {
        console.log(response);
        window.location.reload();
    }
  );
}

//===========================Remove Section=======================
deleteSection(Id: number){
  const options = {
    title: 'Deleting Farm?',
    message: 'By confirming your information will be deleted.',
    cancelText: 'CANCEL',
    confirmText: 'YES, DELETE'
  }
    this.dialogService.open(options);
    this.dialogService.confirmed().subscribe(confirmed => {
      if (confirmed) {
        this.SecService.deleteSection(Id).subscribe();
        window.location.reload();
         }
       });
}

//=========================Un Hide table===========================
ShowTable(){
  this.showTable = true;
  this.showAdd = false;
  this.show = false;
}

  SectionTypes(){
    
  }

}
