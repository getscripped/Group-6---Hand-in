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
import { SRProviders, PostSRProvider } from '../Models/SRProvider';
import { SRProviderService } from './srprovider-service.service';
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
  templateUrl: './sr-provider.component.html',
  styleUrls: ['./sr-provider.component.scss']
})
export class SrProviderComponent implements OnInit {

  public displayedColumns = ['Provider_ID', 'Provider_Name','Provider_Contact_Number','Provider_Email','Provider_Address', 'Is_Active','Actions'];
  public dataSource: any;
  public settings: Settings;
  show: boolean = false;
  showAdd: boolean = false;
  showTable: boolean = true;
  form: FormGroup;
  @ViewChild(MatPaginator) paginator: MatPaginator;

currentEdit: number;
ops: any;
active: Element[] = [{Value: 1, Text: "True"},{Value: 0, Text: "False"}]; // <<<< dropdown data
ProviderEdit: PostSRProvider = new PostSRProvider;
ProviderAdd: PostSRProvider = new PostSRProvider;
data : SRProviders[] = [];
AdminPriv: string;


  constructor(public appSettings:AppSettings,public router: Router, private formbuilder: FormBuilder, public dialog: MatDialog, private http : HttpClient,private ProviderService: SRProviderService,private dialogService: ConfirmDialogService, private DialogService: SuccessDialogService) {
    this.settings = this.appSettings.settings; 
    
    this.form = this.formbuilder.group({
      'Name': ['',Validators.compose([Validators.required, Validators.maxLength(50)])],
      'Contact': ['',Validators.compose([Validators.required, Validators.maxLength(10)])],
      'Email': ['',Validators.compose([Validators.required])],
      'Address': ['',Validators.compose([Validators.required,Validators.maxLength(150)])],

      //Type : new FormControl,
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
  dataProvider:any;
  getData(){
    
    this.ProviderService.getProviders().subscribe( //<<<<<<Get All Sections
      (response) =>{
        this.dataProvider = response;
        console.log(this.dataProvider);
        this.dataSource = new MatTableDataSource<SRProviders>(this.dataProvider);  //<<<<populate datasource
        this.dataSource.paginator = this.paginator; // <<<<<<< Paginator setup
      },
      error=>{  //========If JWT is not accepted do this
        //  alert("An error has occured, please re login");
        //  this.router.navigateByUrl("logout");
          
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
getProviderDetail(Id: number){
  localStorage.setItem("CurrentProvider", Id.toString())
  this.ops = {     // <<<<<< Initialize header with token
    headers: new HttpHeaders({
      
      'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
    })
  };
  this.ProviderService.getProviderDetails(Id).subscribe( // <<<< get specific equipment
    success => {
      this.dataProvider = success;
      this.ProviderEdit = this.dataProvider;
      this.currentEdit = Id;
    }
  );
  this.changeform();
}

  //===========================Change forms to add Section============
  AddProvider(){
    if(this.show == true){
         this.show = false;
    }
    this.ProviderAdd = new PostSRProvider;
    this.showAdd = true;
    this.showTable = false;
  }


  //=============================PUT Section==========================
  PutProvider(){
    this.ProviderService.putProvider(this.ProviderEdit, this.currentEdit).subscribe(
    success=>{
      console.log(success);
    },

    error=>{
      console.log(error)
    }
    );
  }

//===========================POST Section==========================
addNewProvider(){
  //this.ProviderAdd.Farm_ID = 5;
  this.ProviderAdd.Is_Active = "1";
  
  this.ops = {     // <<<<<< Initialize header with token
    headers: new HttpHeaders({
      
      'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
    })
  };
  this.ProviderService.postProvider(this.ProviderAdd).subscribe( //<<<<<<<< Add Section
    (response) =>  {
        console.log(response);
    }
  );
}

ConfirmAddProvider(){
  const options = {
    title: 'Finished Editing Service Provider?',
    message: 'By leaving the page your information will be saved.',
    cancelText: 'CANCEL',
    confirmText: 'YES, ADD'
  };
  
  this.dialogService.open(options);
      
  this.dialogService.confirmed().subscribe(confirmed => {
     if (confirmed) {
          this.addNewProvider(); // your post/add function 
          window.location.reload();
        }
      });
}

CancelAddProvider() { 
  const options = {
    title: 'Leaving Page?',
    message: 'By leaving the page your information will be lost.',
    cancelText: 'CANCEL',
    confirmText: 'YES, DISCARD CHANGES'
  };
  
  this.dialogService.open(options);
      
  this.dialogService.confirmed().subscribe(confirmed => {
     if (confirmed) {
          this.ShowTable(); // your post/add function 
        }
      });
  }


  ConfirmEditProvider(){
    const options = {
      title: 'Finished Edit Service Provider?',
      message: 'By leaving the page your information will be saved.',
      cancelText: 'CANCEL',
      confirmText: 'YES, ADD'
    };
    
    this.dialogService.open(options);
        
    this.dialogService.confirmed().subscribe(confirmed => {
       if (confirmed) {
            this.PutProvider(); // your post/add function 
            window.location.reload();
          }
        });
  }
  
  CancelEditProvider() { 
    const options = {
      title: 'Leaving Page?',
      message: 'By leaving the page your information will be lost.',
      cancelText: 'CANCEL',
      confirmText: 'YES, DISCARD CHANGES'
    };
    
    this.dialogService.open(options);
        
    this.dialogService.confirmed().subscribe(confirmed => {
       if (confirmed) {
            this.ShowTable(); // your post/add function 
          }
        });
    }

//===========================Remove Section=======================
deleteProvider(Id: number){
  const options = {
    title: 'Deleting Service Provider?',
    message: 'By confirming your information will be deleted.',
    cancelText: 'CANCEL',
    confirmText: 'YES, DELETE'
  };
  this.dialogService.open(options);
  this.dialogService.confirmed().subscribe(confirmed => {
    if (confirmed) {
      this.ProviderService.deleteProvider(Id).subscribe();
       }
     });
}

//=========================Un Hide table===========================
ShowTable(){
  this.showTable = true;
  this.showAdd = false;
  this.show = false;
}

}
