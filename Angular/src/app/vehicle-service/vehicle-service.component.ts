import { Component, OnInit, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Settings } from '../app.settings.model';
import { AppSettings } from '../app.settings';
import { MatTableDataSource } from '@angular/material/table';
import {VehicleService, PostVehicleService, PostNotification} from '../Models/VehicleService';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { SRProviders } from '../Models/SRProvider';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { vsService } from './vsService.service';
import { AngularFireUploadTask, AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
// import { response } from '../Models/response';
// import { tableData } from '../Models/table';
import  { Chart } from 'chart.js';
import { promisify } from 'util';
import {autoTable} from 'jspdf-autotable'; 
import 'jspdf-autotable';
import { VehicleTypes } from '../Models/veTypes';
import { ConfirmDialogService } from '../shared/Dialogs/ConfirmDialog/confirm-dialog.service';
import { SuccessDialogService } from '../shared/Dialogs/SuccessDialog/success-dialog.service';
import { Vehicles } from '../Models/Vehicles';
import { isSuccess } from 'angular-in-memory-web-api';
import { yearsPerPage } from '@angular/material/datepicker';
declare var jsPDF:any;

export interface Element{
  Value:number;
  Text: string;
}

@Component({
  selector: 'app-vehicle-service',
  templateUrl: './vehicle-service.component.html',
  styleUrls: ['./vehicle-service.component.scss']
})
export class VehicleServiceComponent implements OnInit {
  showtable: boolean = true;
  public displayedColumns = ['Vehicle_ID', 'Vehicle_Service_Mileage', 'Vehicle_Service_Start_Date', 'Vehicle_Service_End_Date','Invoice','Actions'];
  public dataSource: any;
  public settings: Settings;
  show: boolean = false;
  showAdd: boolean = false;
  showService: boolean =false;
  form: FormGroup;

  invoiceSrc: string;
  basePath = '/invoices';                      
  downloadableURL = '';                      
  task: AngularFireUploadTask;
  currentVehicle: string;
  rows =[];
  temp:VehicleService;

  submit1: boolean = false;
  submit2: boolean = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  currentEdit: number;
  Vehicles: Vehicles [] =[];
  providers: SRProviders []= [];
  ops:any
  file:any;
  progressValue: Observable<number>;
  VehicleNotificationAdd: PostNotification = new PostNotification;
  VehicleServEdit: PostVehicleService = new PostVehicleService;
  VehicleServAdd: PostVehicleService = new PostVehicleService();
  Data : VehicleService[] = [];
  status: Element[] = [{Value: 1, Text: "Active"},{Value: 2, Text: "False"}]; // <<<< dropdown data
  AdminPriv: string;
  tableData:any;

  constructor(public appSettings:AppSettings, public router: Router, private formbuilder: FormBuilder, public dialog: MatDialog, private http : HttpClient, private vsService: vsService,private fireStorage: AngularFireStorage,private dialogService: ConfirmDialogService, private DialogService: SuccessDialogService) { 
    this.settings = this.appSettings.settings; 
    this.form = this.formbuilder.group({  
      'Description':['', Validators.compose([Validators.required,Validators.maxLength(150)])],
      'Mileage':['', Validators.compose([Validators.required,Validators.maxLength(10)])],
      'Start':['', Validators.compose([Validators.required,Validators.maxLength(10)])],
      'End':['', Validators.compose([Validators.required,Validators.maxLength(10)])],
      'Status':['', Validators.compose([Validators.required,Validators.maxLength(10)])],
  
      Providers: new FormControl,
      VehicleTypes: new FormControl,
      VSD: new FormControl,
      Type: new FormControl,
      providers: new FormControl,
      Desc: new FormControl,
      file: new FormControl,
      Provider: new FormControl,
      RequestEnd: new FormControl,
      RequestStart:new FormControl,
      AddStart: new FormControl, 
      AddEnd: new FormControl,
      EditStart:new FormControl,
      EditEnd:new FormControl
    })

    
  }

  ngOnInit(): void {
  //  if(localStorage.getItem("jwtToken") === null){
  //     this.router.navigateByUrl("login");
  //  }else{
  //   this.AdminPriv = localStorage.getItem("PrivelageLevel");
   
    this.getData();
    //} 
  }
  hasProvider = "yes";
  data3:any;
  getData(){
    this.vsService.getVehicleService().subscribe( 
      (response) =>{
        this.data3 = response;
        console.log(this.data3);
        this.tableData = this.data3.vsList;
        this.dataSource = new MatTableDataSource<VehicleService>(this.data3.vsList);
        this.dataSource.paginator = this.paginator; 
      },
      error=>{  //========If JWT is not accepted do this
        //  alert("An error has occured, please re login");
        //  this.router.navigateByUrl("logout");
        console.log(error);
      }

    );

    this.vsService.getServiceProviders().subscribe( 
      (response) => {
            this.data3 = response;
            console.log(this.data3);
            this.providers = this.data3;
    },
    error=>{
      this.hasProvider = "no";
    }); 

    this.vsService.getVehicles().subscribe( 
      (response) => {
            this.data3 = response;
            console.log(this.data3);
            this.Vehicles = this.data3;
    },
    error=>{
      alert("No vehicles exist!");
      this.router.navigateByUrl("/vehicles");
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
      this.showtable = false;
      this.showService =false;

    }
  }

  getVehicleServiceDetail(id:number){
    localStorage.setItem("CurrentVehicle", id.toString())
    this.ops = { 
      headers: new HttpHeaders({
        
        'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
      })
    };
    this.vsService.getVehicleServiceDetails(id).subscribe( 
      success => {
        this.data3 = success;
        this.VehicleServEdit = this.data3;
        console.log(this.VehicleServEdit);
        this.currentEdit = id;
      }
    );
    this.currentVehicle = this.VehicleServAdd.Vehicle_ID;
    this.changeform();
  }

  addVehicleService(){
    if(this.show == true){
      this.show = false;
    }
    this.VehicleServAdd = new PostVehicleService;
    this.showAdd = true;
    this.showtable = false;
    this.showService =false;
    if(this.hasProvider == "no"){
      alert("Please add a provider first");
      this.router.navigateByUrl("sr-prov");
    }
  }

  putVehicleService(){
    this.VehicleServEdit.Vehicle_Service_Document = this.downloadableURL;
    this.vsService.putVehicleService(this.VehicleServEdit, this.currentEdit).subscribe(
      success=>{
        console.log(success);
      },
  
      error=>{
        console.log(error)
      }
    );
  }

  ConfirmEditVS() { 
    const options = {
      title: 'Finished Editing Vehicle Service?',
      message: 'By leaving the page your information will be changed.',
      cancelText: 'CANCEL',
      confirmText: 'YES, CONFIRM CHANGES'
    };
    
    this.dialogService.open(options);
        
    this.dialogService.confirmed().subscribe(confirmed => {
       if (confirmed) {
            this.onSubmitE(); // your post/add function
            window.location.reload(); 
          }
        });
  }

  CancelEditVS() { 
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

  postVehicleService(){
   this.VehicleServAdd.Vehicle_Service_Document = this.downloadableURL;
  
    this.ops = {    
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
      })
    };
    this.vsService.postVehicleService(this.VehicleServAdd).subscribe( 
      (response) =>  {
          console.log(response);
      }
    );
  }

  ConfirmAddVS() { 
    const options = {
      title: 'Finished Adding Vehicle Service?',
      message: 'By leaving the page your information will be saved.',
      cancelText: 'CANCEL',
      confirmText: 'YES, ADD'
    };
    
    this.dialogService.open(options);
        
    this.dialogService.confirmed().subscribe(confirmed => {
       if (confirmed) {
            this.postVehicleService(); // your post/add function 
            window.location.reload();
          }
        });
  }

  CancelAddVS() { 
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

  deleteVehicleService(id:string){
    const options = {
      title: 'Deleting Vehicle Service?',
      message: 'By confirming your information will be deleted.',
      cancelText: 'CANCEL',
      confirmText: 'YES, DELETE'
    };
    this.dialogService.open(options);
    this.dialogService.confirmed().subscribe(confirmed => {
      if (confirmed) {
        this.vsService.deleteVehicleService(id).subscribe()
         }
       });
  }

  showTable(){
    this.showtable = true;
    this.showAdd = false;
    this.show = false;
    this.showService=false;
  }

  showServiceNotification(){
    if(this.show == true){
      this.show = false;
    }
    this.VehicleNotificationAdd = new PostNotification;
    this.showAdd=false;
    this.showtable=false;
    this.showService=true;
  }

  postServiceRequest(ProviderID:number, VehicleID:string){
    this.vsService.postServiceRequest(ProviderID, VehicleID).subscribe(
      success=>{
        alert("Succesfully sent service request");
      },
      error=>{
        alert(error);
      }
    );
  }

  ConfirmService() { 
    const options = {
      title: 'Send Request?',
      message: 'By pressing send the service request will be sent.',
      cancelText: 'CANCEL',
      confirmText: 'YES, SEND'
    };
    
    this.dialogService.open(options);
        
    this.dialogService.confirmed().subscribe(confirmed => {
       if (confirmed) {
            this.postServiceRequest(this.VehicleNotificationAdd.Provider_ID, this.VehicleNotificationAdd.Vehicle_ID);
             this.showTable();// your post/add function 
          }
        });
  }

  CancelService() { 
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

  Download(){
    const doc = new jsPDF('portrait','px','a4'); //<<<<<Declare pdf
    
    for(let i = 0;  i< this.tableData.length; i++){ //<<< get all rows in JSOn and convert to object list
        this.temp =  this.tableData[i];
        
        this.rows.push([this.temp.Vehicle_Service_ID,this.temp.Vehicle_Service_Description,this.temp.Vehicle_Service_Mileage,
          this.temp.Vehicle_Service_Start_Date,this.temp.Vehicle_Service_End_Date, this.temp.Vehicle_ID]);   //========You push all your JSON to a rows list
    }
    console.log(this.rows);
    doc.autoTable({ //<<<<< Add list to table, order is important here
    head: [['Vehicle Service ID', 'Vehicle Service Description', 'Vehicle Service Mileage', 'Vehicle Service Start Date',
    'Vehicle Service End Date','Vehicle ID']], //=====This is the PDF headings
    
    body: this.rows
    }); 
 
     doc.save("VehicleServiceList"); //<<<< save doc

     const options = {
      title: 'Download Started!',
      message: 'The document will be available shortly.',
      cancelText: 'CANCEL',
      confirmText: 'OK'
    };
    
    this.DialogService.open(options);
        
    this.DialogService.confirmed().subscribe(confirmed => {
       if (confirmed) {
            this.showTable(); //to show the table
          }
        });
  }

  SubmitData = new VehicleService(); 
  PostData = new VehicleService();

  public async onSubmit() {
    if (this.file) {
       const filePath = `${this.basePath}/${this.VehicleServAdd.Vehicle_ID + this.VehicleServAdd.Vehicle_Service_Description + this.VehicleServAdd.Vehicle_Service_Mileage + this.VehicleServAdd.Provider_ID}`;
       this.task =  this.fireStorage.upload(filePath, this.file);    
       // this.progress = this.snapTask.percentageChanges();
       this.progressValue = this.task.percentageChanges();
       (await this.task).ref.getDownloadURL().then(url => 
        {
          this.downloadableURL = url;
          this.postVehicleService()
        });  
     } else {  
       this.downloadableURL = ''; 
       this.postVehicleService();
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
       this.file.name = this.VehicleServAdd.Vehicle_ID + this.VehicleServAdd.Vehicle_Service_Description + this.VehicleServAdd.Vehicle_Service_Mileage + this.VehicleServAdd.Provider_ID;
  }

  public async onSubmitE() {
    if (this.file) {
       const filePath = `${this.basePath}/${this.VehicleServEdit.Vehicle_ID + this.VehicleServEdit.Vehicle_Service_Description + this.VehicleServEdit.Vehicle_Service_Mileage + this.VehicleServEdit.Provider_ID}`;
       this.task =  this.fireStorage.upload(filePath, this.file);    
       // this.progress = this.snapTask.percentageChanges();
       this.progressValue = this.task.percentageChanges();
       (await this.task).ref.getDownloadURL().then(url => 
        {
          this.downloadableURL = url;
          this.putVehicleService()
        });  
     } else {  
       this.downloadableURL = ''; 
       this.putVehicleService();
      }      
   }

}
