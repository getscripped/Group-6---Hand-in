import { Component, OnInit } from '@angular/core';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { StaffService } from '../Services/staff.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Staff } from '../Models/Staff';
import { Clocked } from '../Models/Clocked';
import { AngularFireStorage, AngularFireUploadTask  } from '@angular/fire/storage';

@Component({
  selector: 'app-clock-out',
  templateUrl: './clock-out.component.html',
  styleUrls: ['./clock-out.component.scss'],
})
export class ClockOutComponent implements OnInit {

  constructor(private router:Router,public staffService:StaffService) { }

  ngOnInit() {
    // localStorage.setItem("currentFarm","6")
    //   this.getCheckedInStaff();
  }
  ionViewWillEnter(){
    if(localStorage.getItem("jwtToken") === null){
      this.router.navigate(['login']);
    }
    else{
      this.getCheckedInStaff();
    }
  }

  onSearchTerm(ev: CustomEvent) {
    
    const val = ev.detail.value;
  
    if (val && val.trim() !== '') {
      this.staffList = this.staffList.filter(staff => {
        return staff.Staff_Name.toLowerCase().indexOf(val.trim().toLowerCase()) > -1;
      });
    }
    else{
      this.getCheckedInStaff();
    }
  }

  home(){
    this.router.navigate(['']);
  }
  clocked:any;
  clockout(staffID){
    this.staffService.clockOut(staffID).subscribe(success=>{
      this.clocked=success;
      alert("clocked out")
      this.router.navigate(['']);
    })
    
  }

  staffList:any; 
getCheckedInStaff(){
  this.staffService.getCheckedInStaff().subscribe( //get all skills
    (response)=>{
      this.staffList=response;
      console.log(this.staffList);
      
    }
  )
}
}
