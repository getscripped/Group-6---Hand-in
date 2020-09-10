import { Component, OnInit, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Settings } from '../app.settings.model';
import { AppSettings } from '../app.settings';
import { MatTableDataSource } from '@angular/material/table';
import {Insurance, PostInsurance} from '../Models/InsuranceProviders';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { insuranceService } from './insuranceService.service';


export interface Element{
  Value:number;
  Text: string;
}

@Component({
  selector: 'app-insurnace-provider',
  templateUrl: './insurnace-provider.component.html',
  styleUrls: ['./insurnace-provider.component.scss']
})
export class InsurnaceProviderComponent implements OnInit {
  public displayedColumns = ['IP_ID', 'IP_Name', 'IP_Reg_Number','IP_VAT_Number','IP_Phone_Number'];
  public dataSource: any;
  public settings: Settings;
  show: boolean = false;
  showAdd: boolean = false;
  form: FormGroup;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  showtable: boolean = true;
  currentEdit: number;
  ops:any;
  InsuranceaAdd: PostInsurance = new PostInsurance;
  InsuranceEdit: PostInsurance = new PostInsurance;
  data : Insurance[] = [];
  AdminPriv: string;

  constructor(public appSettings:AppSettings,public router: Router, private formbuilder: FormBuilder, public dialog: MatDialog, private http : HttpClient,private insuranceService:insuranceService)
  { 
     this.settings = this.appSettings.settings; 
     this.form = this.formbuilder.group({  // <<<< Form validation
      'Name':['', Validators.compose([Validators.required,Validators.maxLength(50)])],
      'PhoneNumber':['', Validators.compose([Validators.required,Validators.maxLength(10)])],
      'RegNumber':['', Validators.compose([Validators.required,Validators.maxLength(50)])],
      'VATNumber':['', Validators.compose([Validators.required,Validators.maxLength(50)])]
   })
  }

  ngOnInit(): void {
  //   if(localStorage.getItem("jwtToken") == null){
  //     this.router.navigateByUrl("login");
  //  }else{
  //   this.AdminPriv = localStorage.getItem("PrivelageLevel");
  //   localStorage.setItem("currentFarm","7"); 
    this.getData();
   //}
  }

  data1:any;
  getData(){
    this.insuranceService.getInsuranceProviders().subscribe( 
      (response) =>{
        this.data1 = response;
        console.log(this.data1["IPList"]);
        this.dataSource = new MatTableDataSource<Insurance>(this.data1["IPList"]);
        this.dataSource.paginator = this.paginator; 
      },
      error=>{
        alert("An error has occured, please login.");
       // this.router.navigateByUrl("logout");
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

  getInsuranceProviderDetails(id:number){
    localStorage.setItem("CurrentInsuranceProvider", id.toString())
    this.ops = {    
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
      })
    };
    this.insuranceService.getInsuranceProviderDetails(id).subscribe(
      success => {
        this.data1 = success;
        this.InsuranceEdit = this.data1;
        this.currentEdit = id;
      }
    );
    this.changeform();
  }

  addInsurance(){
    if(this.show == true){
         this.show = false;
    }
    this.InsuranceaAdd = new PostInsurance;
    this.showAdd = true;
    this.showtable = false;
  }

  putInsurance(){
    this.insuranceService.putInsuranceProvider(this.InsuranceEdit, this.currentEdit).subscribe(
      success=>{
        console.log(success);
      },
      error=>{
        console.log(error)
      }
    );
  }

  addNewInsuranceProvider(){
    this.ops = {    
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
      })
    };
    this.insuranceService.postInsuranceProvider(this.InsuranceaAdd).subscribe( 
      (response) =>  {
          console.log(response);
      }
    );
  }

  deleteInsurance(id:number){
    if(confirm("Are you sure to delete ?")) {
      this.insuranceService.deleteInsuranceProvider(id).subscribe(
        success=>{
          alert("Equipment succesfully removed");
        },
        error=>{
          alert(error);
        }
      );
    }
  }

  showTable(){
    this.showtable = true;
    this.showAdd = false;
    this.show = false;
  }
}
