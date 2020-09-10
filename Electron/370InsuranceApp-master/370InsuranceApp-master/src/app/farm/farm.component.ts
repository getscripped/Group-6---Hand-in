import { Component, OnInit, ViewChild} from '@angular/core';
import { Settings } from '../app.settings.model';
import { AppSettings } from '../app.settings';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import {Farm} from '../Models/Farm'
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AngularFireUploadTask, AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { farmService } from './farmService.service';
import { provinces } from '../Models/Provinces';
import { farmTypes } from '../Models/FarmTypes';
import 'jspdf-autotable';
import autoTable from 'jspdf-autotable'; 
import  { Chart } from 'chart.js';
import * as jwt_decode from "jwt-decode";
import { ConfirmDialogService } from '../Dialogs/ConfirmDialog/confirm-dialog.service';
import { SuccessDialogService } from '../Dialogs/SuccessDialog/success-dialog.service';
declare var jsPDF:any;

export interface Element {
  Value:number;
  Text: string;
}

@Component({
  selector: 'app-farm',
  templateUrl: './farm.component.html',
  styleUrls: ['./farm.component.scss']
})
export class FarmComponent implements OnInit {

  public displayedColumns =['Farm Name','Farm Type','Farm Size','Province','Farm Email','Farm Number'];
  public dataSource: any;
  public settings: Settings;
  form:FormGroup;
  EmailAddress:string;

  farmtypes: farmTypes []=[];
  provinces: provinces []=[];
  Active: Element[] = [{Value: 1, Text: "Yes"},{Value: 0, Text: "No"}];
  data : Farm[] = [];
  ops:any;
  currentEdit:number;
  AdminPriv: string;
  showtable: boolean = true;
  tableData:any;
  rows =[];
  temp:Farm;

  constructor(public appSettings:AppSettings, private farmservice: farmService, private router: Router,private formbuilder: FormBuilder, public dialog: MatDialog, private http : HttpClient, private dialogService: ConfirmDialogService, private DialogService: SuccessDialogService ) {
    this.settings = this.appSettings.settings;
     console.log("test");
    this.form = this.formbuilder.group({
      'Size':['', Validators.compose([Validators.required,Validators.maxLength(30)])],
      'Address':['', Validators.compose([Validators.required,Validators.maxLength(150)])],
      'Name':['', Validators.compose([Validators.required,Validators.maxLength(100)])],
      'Email':['', Validators.compose([Validators.required,Validators.maxLength(150)])],
      'Number':['', Validators.compose([Validators.required,Validators.maxLength(10)])],


      Types: new FormControl,
      Prov: new FormControl
    })
  }

  ngOnInit(): void {
    if(localStorage.getItem("currentUser") == null){
          this.router.navigateByUrl("");
     }
    else{
       this.getData();
      } 
  }

  data1:any;
  getData(){
    this.farmservice.getFarm().subscribe(
      (response) => {
        this.data1=response;
        this.tableData = this.data1;
        console.log(this.data1["farmlist"]);
        this.dataSource = new MatTableDataSource<Farm>(this.data1["farmList"]);  
      },
      error=>{
       
      }
    );

    this.farmservice.getFarmTypes().subscribe(
      (response) => {
        this.data1 = response;
        console.log(this.data1);
        this.farmtypes = this.data1;
      }
    );

    this.farmservice.getProvinces().subscribe(
      (response) => {
        this.data1 = response;
        console.log(this.data1);
        this.provinces = this.data1;
      }
    );
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  changeform(){
    if(this.showtable == false){
      this.showtable = true;
    }
    else{
      this.showtable=false;
    }
  }


  showTable(){
    this.showtable = true;
  }


  Download(){
    const doc = new jsPDF('portrait','px','a4'); //<<<<<Declare pdf
  
    for(let i = 0;  i< this.tableData.farmList.length; i++){ //<<< get all rows in JSOn and convert to object list
        this.temp =  this.tableData.farmList[i];
        this.rows.push([this.temp.Farm_ID,this.temp.Farm_Name,this.temp.Farm_Size,
          this.temp.Farm_Type_Description,this.temp.Province_Description, this.temp.Farm_Email, this.temp.Farm_ContactNumber]);   //========You push all your JSON to a rows list
    }
    
    doc.autoTable({ //<<<<< Add list to table, order is important here
    header:['Insurable Farm List'],
    head: [['Farm ID', 'Farm Name', 'Farm Size', 'Farm Type','Farm Province',
    'Farm Email','Farm Number']], //=====This is the PDF headings
    body: this.rows
    }); 
 
     doc.save("InsurableFarmList"); //<<<< save doc
}


}

