import { Component, OnInit, ViewChild} from '@angular/core';
import { Settings } from '../app.settings.model';
import { AppSettings } from '../app.settings';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import {Farm, PostFarm, PostForeman} from '../Models/Farm'
import { Router } from '@angular/router';
import { farmService } from './farmService.service';
import { farmTypes } from '../Models/FarmTypes';
import { provinces } from '../Models/Provinces';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfirmDialogService } from '../shared/Dialogs/ConfirmDialog/confirm-dialog.service';
import { SuccessDialogService } from '../shared/Dialogs/SuccessDialog/success-dialog.service';

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

  public displayedColumns =['Farm Name','Farm Type','Farm Size','Province','Farm Address','Farm Email','Farm Number','Active','Actions'];
  public dataSource: any;
  public settings: Settings;
  show: boolean = false;
  showAdd: boolean = false;
  showF: boolean = false;
  showFAdd: boolean = false;
  form:FormGroup;
  EmailAddress:string;
  currentFarm: string;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  farmtypes: farmTypes []=[];
  provinces: provinces []=[];
  active: Element[] = [{Value: 1, Text: "True"},{Value: 0, Text: "False"}]; // <<<< dropdown data
  data : Farm[] = []; 
  ops:any;
  currentEdit:number;
  FarmAdd: PostFarm = new PostFarm;
  FarmEdit: PostFarm = new PostFarm;
  ForemanAdd: PostForeman = new PostForeman;
  AdminPriv: string;
  showtable: boolean = true;
 

  constructor(public appSettings:AppSettings, private farmservice: farmService, private router: Router,private formbuilder: FormBuilder, public dialog: MatDialog, private http : HttpClient, private dialogService: ConfirmDialogService, private DialogService: SuccessDialogService) { 
    this.settings = this.appSettings.settings; 
    console.log("debug");
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
   this.currentFarm = localStorage.getItem("currentFarm");
  //     if(localStorage.getItem("jwtToken") == null){
  //      this.router.navigateByUrl("login");
  //  }else{
  //    this.AdminPriv = localStorage.getItem("PrivelageLevel");

     this.getData();
   // } 
  }

  data1:any;
  getData(){
    this.farmservice.getFarm().subscribe(
      (response) => {
        this.data1=response;
        console.log(this.data1["farmlist"]);
        this.dataSource = new MatTableDataSource<Farm>(this.data1["farmList"]);  
        this.dataSource.paginator = this.paginator;
        localStorage.setItem("hasFarm","yes"); 
        console.log(localStorage.getItem("hasFarm"));
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

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  changeform(){
    if(this.show == false){
      this.show =true;
      this.showAdd = false;
      this.showtable = false;
    }
  }
  
    getFarmDetails(id: number){
    this.farmservice.getFarmDetails(id).subscribe(
      success=>{
        this.data1 = success;
        this.FarmEdit = this.data1;
      },
      error=>{
        console.log(error);
      }
    );
  }
 
  addFarm(){
    if(this.show == true){
      this.show = false;
    } 
    this.FarmAdd = new PostFarm;
    this.showAdd = true;
    this.showtable = false;
    this.showF = false;
    this.showFAdd = false;
  }

  putFarm(){
    this.farmservice.putFarm(this.FarmEdit,this.currentEdit).subscribe(
      success=>{
        console.log(success);
        window.location.reload();
      },
      error=>{
        console.log(error)
      }
    );
  }

  ConfirmEditFarm() {
    const options = {
      title: 'Finshed Editing?',
      message: 'By confirming, your information will be changed.',
      cancelText: 'CANCEL',
      confirmText: 'YES, CONFIRM CHANGES'
    };
    
    this.dialogService.open(options);
        
    this.dialogService.confirmed().subscribe(confirmed => {
       if (confirmed) {
            this.putFarm(); // for the edit 
            this.showTable();
          }
        });
  }

  //this function is to cancel the edit 
  CancelEditFarm() {
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

  postFarm(){
    
    this.FarmAdd.Is_Active = "1";
    
    this.ops = {   
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
      })
    };
    this.farmservice.postFarm(this.FarmAdd).subscribe( 
      success =>  {
          console.log(success);
          localStorage.setItem("hasFarm","yes");
          window.location.reload();
      },
      error=>{

      }
    );
  }

  //adds a dialog box for confirming the addition to the system 
  ConfirmAddFarm() { 
    const options = {
      title: 'Finished Adding Farm?',
      message: 'By leaving the page your information will be saved.',
      cancelText: 'CANCEL',
      confirmText: 'YES'
    };
    
    this.dialogService.open(options);
        
    this.dialogService.confirmed().subscribe(confirmed => {
       if (confirmed) {
            this.postFarm(); // your post/add function 
            this.showTable(); 
          }
        });
  }

  CancelAddFarm() {
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

  deleteFarm(id:number){
    const options = {
      title: 'Deleting Farm?',
      message: 'By confirming your information will be deleted.',
      cancelText: 'CANCEL',
      confirmText: 'YES, DELETE'
    };
    this.dialogService.open(options);
    this.dialogService.confirmed().subscribe(confirmed => {
      if (confirmed) {
        this.farmservice.deleteFarm(id).subscribe()
        window.location.reload();
         }
       });
  }


  showTable(){
    this.showtable = true;
    this.showAdd = false;
    this.show = false;
    this.showF = false;    
  }
  
  Foreman(){
      this.showtable = false;
      this.showAdd = false;
      this.show = false;
      this.showF = false;
  }

  addForeman(){
    if(this.show == true){
      this.show = false;
    } 
    this.ForemanAdd = new PostForeman;
    this.showAdd = false;
    this.showtable = false;
    this.showF = true;
    
  }

  showForeman(){
    if(this.show == true){
      this.show = false;
    } 
    this.showAdd = false;
    this.showtable = false;
    this.showF = true;
    
  }

  getForeman(){
    const options = {
      title: 'Current Foreman',
      message: 'The foreman is on the farm.',
      cancelText: 'CANCEL',
      confirmText: 'OK'};
    this.farmservice.getForeman().subscribe();
    this.DialogService.open(options);
    this.DialogService.confirmed().subscribe(confirmed => {
      if (confirmed) {
        this.showTable();
         }
       });
  }

  postForeman(){
    this.farmservice.postForeman(this.ForemanAdd.EmailAddress).subscribe(
      success=>{
        alert("Foreman succesfully added");
        window.location.reload();
      },
      error=>{
        console.log(error);
      }
    );
  }

  ConfirmAddForeman(){
    const options = {
      title: 'Add Foreman?',
      message: 'The foreman will be added to the farm.',
      cancelText: 'CANCEL',
      confirmText: 'OK'};
      this.dialogService.open(options);
    this.dialogService.confirmed().subscribe(confirmed => {
      if (confirmed) {
        this.postForeman();
        this.showTable();
         }
       });
  }

  deleteForeman(ID:number){
      const options = {
        title: 'Removing Foreman?',
        message: 'By confirming your information will be deleted.',
        cancelText: 'CANCEL',
        confirmText: 'YES, REMOVE'
      };
      this.dialogService.open(options);
      this.dialogService.confirmed().subscribe(confirmed => {
        if (confirmed) {
          this.farmservice.deleteForeman().subscribe()
           }
         });
  }

  getFarmInfo(id:number){
    localStorage.setItem("CurrentFarm", id.toString())
    this.ops = { 
      headers: new HttpHeaders({
        
        'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
      })
    };
    this.farmservice.getFarmDetails(id).subscribe( 
      success => {
        this.data1 = success;
        this.FarmEdit = this.data1;
        console.log(this.FarmEdit);
        this.currentEdit = id;
      }
    );
    this.changeform();
  }
}
