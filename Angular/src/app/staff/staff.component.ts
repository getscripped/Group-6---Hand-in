import {  Component, OnInit } from '@angular/core';

import { Settings } from '../app.settings.model';
import { AppSettings } from '../app.settings';
import { MatTableDataSource } from '@angular/material/table';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { StaffSkill, Staff, Skill, PostStaff } from '../Models/Staff'

import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { StaffServiceService } from '../pages/users/staff-service.service';

export interface Element {
  Staff_ID:number;
  Staff_Name:string;
  Staff_Surname:string;
  Staff_Phone_Number:string;
  Clocked_In_Time:string;
}

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {

  constructor(public staffService:StaffServiceService, public router:Router){}

  AdminPriv: string;

  ngOnInit(){
    if(localStorage.getItem("jwtToken") === null){
      this.router.navigateByUrl("login");
   }else{
    this.AdminPriv = localStorage.getItem("PrivelageLevel");
  //  localStorage.setItem("currentFarm","6"); //<<<<<< Remove when done!!!!!!!!!!!!!!!!!!!!
    this.getData();
  }
  }

  public displayedColumns = ['Staff_ID', 'Staff_Name', 'Staff_Surname', 'Staff_Phone_Number','Clock_in_Time'];
  public dataSource: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  // data: Element[] = [
  //   {Staff_ID:6902150236082, Staff_Name:"Jack", Staff_Surname:"Black", Staff_Phone_Number:"0845648884", Clock_in_Time:'12:00'},
  //   {Staff_ID:9203050458083, Staff_Name:"Solomn", Staff_Surname:"Mplunga", Staff_Phone_Number:"0832654785",Clock_in_Time:'08:00'},
  //   {Staff_ID:8710081256081, Staff_Name:"Happy", Staff_Surname:"Hlingani", Staff_Phone_Number:"0784561289",Clock_in_Time:'08:30'},
  //   {Staff_ID:6102185621083, Staff_Name:"Gracious", Staff_Surname:"Nkosi", Staff_Phone_Number:"0614589874", Clock_in_Time:'09:10'},
  //   {Staff_ID:9805201584082, Staff_Name:"Susan", Staff_Surname:"Grant", Staff_Phone_Number:"0725698563", Clock_in_Time:'13:10'},    
  // ];

  data1:any  
getData(){
  this.staffService.getCheckedInStaff().subscribe( //get all skills
    (response)=>{
      this.data1=response;
      console.log(this.data1);
      this.dataSource=new MatTableDataSource<Staff>(this.data1); //populate data
      this.dataSource.paginator=this.paginator;
    }
  )
}
}

