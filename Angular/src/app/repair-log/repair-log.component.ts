import {  OnInit } from '@angular/core';
import { Settings } from '../app.settings.model';
import { AppSettings } from '../app.settings';
import { MatTableDataSource } from '@angular/material/table';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { RepairLog, PostRepairLog, PostNotification } from '../Models/RepairLogs';
import { RepairRequests } from '../Models/RepairRequests';
import { pathToFileURL, fileURLToPath } from 'url';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Vehicles } from '../Models/Vehicles';
import { SRProviders } from '../Models/SRProvider';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RepairlogService } from './repairlog.service';
import { AngularFireUploadTask, AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { ConfirmDialogService } from '../shared/Dialogs/ConfirmDialog/confirm-dialog.service';
import { Status } from '../Models/Status';
import { vsService } from '../vehicle-service/vsService.service';
declare var jsPDF: any;  //<<<<<<<<<<<<<< new jspdf import


export interface Element{
  Value:number;
  Text: string;
}

@Component({
  selector: 'app-repair-log',
  templateUrl: './repair-log.component.html',
  styleUrls: ['./repair-log.component.scss']
})
export class RepairLogComponent implements OnInit {
  public displayedColumns = ['Vehicle_Repair_ID', 'VRD_Invoice','Registration_Number', 'Provider_Name','Vehicle_Repair_Cost', 'Vehicle_Repair_Date_Started', 'Vehicle_Repair_Date_Ended', 'Status_Description','Actions'];
  public dataSource: any; //<<<<<< Data source for table
  public settings: Settings;
  show: boolean = false;   // <<< edit form show
  showAdd: boolean = false; // <<< Add form show
  showtable: boolean = true; // <<< show table
  showRequest: boolean = false;
  form: FormGroup;

  invoiceSrc: string;
  basePath = '/invoices';                      
  downloadableURL = '';                      
  task: AngularFireUploadTask;
  currentVehicle: string;


  submit1: boolean = false;
  submit2: boolean = false;
  @ViewChild(MatPaginator) paginator: MatPaginator;

currentEdit: number;

ops:any; // <<<< Header for AUTH
Vehicles: Vehicles[] = [];   // <<<< dropdown data for tasks   
srProviders: SRProviders[] = []; // <<<< dropdown data for staff
statusses: Status[] = [];
//invoices: Element[] = [{Value :3, Text: "Toyota-Menlyn-Agrilog-Invoice.pdf"}]; // <<<< dropdown data

SubmitData = new RepairLog(); 
PostData = new RepairLog();

data : RepairLog[] = []; // <<< Table data goes here
RepairLogEdit: PostRepairLog = new PostRepairLog; // <<<< equipment instance for PUT
RepairLogAdd: PostRepairLog = new PostRepairLog; // <<<< equipment instance for POST
RepairRequestAdd: PostNotification = new PostNotification; // <<<< equipment instance for POST
AdminPriv: string; // <<<< Check user ROLE

  constructor(public appSettings:AppSettings,public router: Router,private dialogService: ConfirmDialogService,private fireStorage: AngularFireStorage, private formbuilder: FormBuilder, public dialog: MatDialog, private http : HttpClient,private repService: RepairlogService, private vsService: vsService) {
    this.settings = this.appSettings.settings; 
   

    this.form = this.formbuilder.group({  // <<<< Form validation
      'Cost':['', Validators.compose([Validators.required])],
      'start_Date':['', Validators.compose([Validators.required])],
      'end_Date':['', Validators.compose([Validators.required])],

      Provider : new FormControl,
      VRD : new FormControl,//??
      Vehicle : new FormControl,
      Status : new FormControl,
      file : new FormControl,

    })
    
  }
  file:any;
progressValue: Observable<number>;
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
  tableData: RepairLog[] = [];
  getData(){
    
    this.repService.getRepairLogs().subscribe( //<<<<<<Get All Equipment
      (response) =>{
        this.data1 = response;
        this.tableData = this.data1;
        //console.log(this.data1);
        this.dataSource = new MatTableDataSource<RepairLog>(this.data1);  //<<<<populate datasource
        this.dataSource.paginator = this.paginator; // <<<<<<< Paginator setup
      }
    );

    this.repService.getProv().subscribe(
      (response) => {
        this.data1 = response;
        //console.log(this.data1);
        this.srProviders = this.data1;
});

this.vsService.getVehicles().subscribe( 
  (response) => {
        this.data1 = response;
        console.log(this.data1);
        this.Vehicles = this.data1;
});

     this.repService.getStat().subscribe(
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
  getRepairLogDetail(Id: number){
    localStorage.setItem("CurrentVehicle", Id.toString())
    this.ops = {     // <<<<<< Initialize header with token
      headers: new HttpHeaders({
        
        'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
      })
    };
    this.repService.getRepairLogDetails(Id).subscribe( // <<<< get specific equipment
      success => {
        this.data1 = success;
        this.RepairLogEdit = this.data1;
        this.currentEdit = Id;
      }
    );
    this.currentVehicle = this.RepairLogAdd.Vehicle_ID;
    this.changeform();
  }


  //===========================Change forms to add equipment============
  AddRepairLog(){
    if(this.show == true){
         this.show = false;
    }
    this.RepairLogAdd = new PostRepairLog;
    this.showAdd = true;
    this.showtable = false;
    this.showRequest = false;
  }

  AddRepairRequest(){
    if(this.show == true){
         this.show = false;
    }
    this.RepairRequestAdd = new PostNotification;
    this.showAdd = false;
    this.showtable = false;
    this.showRequest = true;
  }
  //=============================PUT equipment==========================
  PutRepairLog(){
    this.RepairLogEdit.Vehicle_Repair_Document = this.downloadableURL;
    this.repService.putRepairLog(this.RepairLogEdit, this.currentEdit).subscribe(
    success=>{
      console.log(success);
    },

    error=>{
      console.log(error)
    }
    );
    console.log(this.RepairLogEdit);
  }

  ConfirmEditVR() { 
    const options = {
      title: 'Finished Editing Vehicle Repair Log?',
      message: 'By leaving the page your information will be changed.',
      cancelText: 'CANCEL',
      confirmText: 'YES, CONFIRM CHANGES'
    };
    
    this.dialogService.open(options);
        
    this.dialogService.confirmed().subscribe(confirmed => {
       if (confirmed) {
            this.onSubmitE();
            this.showTable();
          }
        });
  }

  CancelEditVR() { 
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
  addNewRepairLog(){
    //this.RepairLogAdd.Farm_ID = 1;
    this.RepairLogAdd.Status_ID = 1;
    this.RepairLogAdd.Vehicle_Repair_Document = this.downloadableURL;
    this.ops = {     // <<<<<< Initialize header with token
      headers: new HttpHeaders({
        
        'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
      })
    };
    this.repService.postRepairLog(this.RepairLogAdd).subscribe( //<<<<<<<< Add equipment
      (response) =>  {
          console.log(response);
      }
    );
    console.log(this.RepairLogAdd);

  }

  ConfirmAddVR() { 
    const options = {
      title: 'Finished Adding Vehicle Repair?',
      message: 'By leaving the page your information will be saved.',
      cancelText: 'CANCEL',
      confirmText: 'YES, ADD'
    };
    
    this.dialogService.open(options);
        
    this.dialogService.confirmed().subscribe(confirmed => {
       if (confirmed) {
            this.onSubmit(); // your post/add function 
            this.showTable();
          }
        });
  }

  CancelAddVR() { 
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

  postRepairRequest(ProviderID:number, VehicleID:string){
    this.repService.postRepairRequest(ProviderID, VehicleID).subscribe(
      success=>{
        alert("Succesfully sent repair request");
      },
      error=>{
        alert(error);
      }
    );
  }

   ConfirmRepair() { 
    const options = {
      title: 'Send Request?',
      message: 'By pressing send the repair request will be sent.',
      cancelText: 'CANCEL',
      confirmText: 'YES, SEND'
    };
    
    this.dialogService.open(options);
        
    this.dialogService.confirmed().subscribe(confirmed => {
       if (confirmed) {
            this.postRepairRequest(this.RepairRequestAdd.Provider_ID, this.RepairRequestAdd.Vehicle_ID); // your post/add function
            this.showTable();// your post/add function 
 
          }
        });
  }

  CancelRepair() { 
    const options = {
      title: 'Cancel Request?',
      message: 'By leaving the page your information will be lost.',
      cancelText: 'CANCEL',
      confirmText: 'YES, DISCARD'
    };
    
    this.dialogService.open(options);
        
    this.dialogService.confirmed().subscribe(confirmed => {
       if (confirmed) {
            this.showTable(); // your post/add function 
          }
        });
  }

  //===========================Remove Equipment=======================
  deleteRepairLog(Id: number){
    const options = {
      title: 'Deleting Vehicle Repair?',
      message: 'By confirming your information will be deleted.',
      cancelText: 'CANCEL',
      confirmText: 'YES, DELETE'
    };
    this.dialogService.open(options);
    this.dialogService.confirmed().subscribe(confirmed => {
      if (confirmed) {
        this.repService.deleteRepairLog(Id).subscribe()
         }
       });
  }


  //=========================Un Hide table===========================
  showTable(){
    this.showtable = true;
    this.showAdd = false;
    this.show = false;
    this.showRequest = false;
  }

  rows = []; //<<< For JSON parsing
  temp: RepairLog; //<< To add to list
  //=======================Download Equipment report================
  Download(){
    const doc = new jsPDF('portrait','px','a4'); //<<<<<Declare pdf
    
    for(let i = 0;  i< this.tableData.length; i++){   //<<< get all rows in JSOn and convert to object list
        this.temp =  this.tableData[i];
        this.rows.push([this.temp.Vehicle_Registration_Number, this.temp.Provider_Name, this.temp.Vehicle_Repair_Cost, this.temp.Vehicle_Repair_Date_Started, this.temp.Vehicle_Repair_Date_Ended, this.temp.Status_Description ]);
        
    }

    
    doc.autoTable({ //<<<<< Add list to table, order is important here
      head: [['Vehicle Registration Number', 'Provider Name','Cost','Date Started','Date Ended','Status']],
      body: this.rows
    }); 
    doc.save("Vehicle Repair List"); //<<<< save doc


  }

  public async onSubmit() { 
    if (this.file) {
      const filePath = `${this.basePath}/${this.RepairLogAdd. Vehicle_ID + this.RepairLogAdd.Provider_ID}`;
      this.task =  this.fireStorage.upload(filePath, this.file);    
       // this.progress = this.snapTask.percentageChanges();
       this.progressValue = this.task.percentageChanges();
       (await this.task).ref.getDownloadURL().then(url => 
        {
          this.downloadableURL = url;
          this.addNewRepairLog()
        });  
     } else {  
       this.downloadableURL = ''; 
       this.addNewRepairLog();
      }      
   }

  onSelectedFile(event){
    const reader = new FileReader();
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
    
      reader.onload = () => {
        this.invoiceSrc = reader.result as string;
        this.form.patchValue({
          fileSource: reader.result
        });
      };
    }
       this.file = event.target.files[0];
       this.file.name = this.RepairLogAdd.Vehicle_ID + this.RepairLogAdd.Provider_ID;
  }

  public async onSubmitE() {
    if (this.file) {
      const filePath = `${this.basePath}/${this.RepairLogEdit. Vehicle_ID + this.RepairLogEdit.Provider_ID}`;
       this.task =  this.fireStorage.upload(filePath, this.file);    
       // this.progress = this.snapTask.percentageChanges();
       this.progressValue = this.task.percentageChanges();
       (await this.task).ref.getDownloadURL().then(url => 
        {
          this.downloadableURL = url;
          this.PutRepairLog()
        });  
     } else {  
       this.downloadableURL = ''; 
       this.PutRepairLog();
      }      
   }
}