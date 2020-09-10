import { Component, OnInit } from '@angular/core';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { StaffService } from '../Services/staff.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Staff } from '../Models/Staff';
import { Clocked } from '../Models/Clocked';
import { AngularFireStorage, AngularFireUploadTask  } from '@angular/fire/storage';
//import { Dialogs } from '@ionic-native/dialogs/ngx'

@Component({
  selector: 'app-clock-in',
  templateUrl: './clock-in.component.html',
  styleUrls: ['./clock-in.component.scss'],
})
export class ClockInComponent implements OnInit {

  


  constructor(private router:Router,public staffService:StaffService) { }

  ops:any;

  ngOnInit() {
    
    console.log(localStorage.getItem("currentFarm"))
    // if(localStorage.getItem("jwtToken") === null){
    //   this.router.navigate(['login']);
    // }
    // else{
    //   this.getStaff();
    // }
   
  }

  ionViewWillEnter(){
    if(localStorage.getItem("jwtToken") === null){
      this.router.navigate(['login']);
    }
    else{
      this.getStaff();
    }
  }

staff:any;
  onSearchTerm(ev: CustomEvent) {
    
    const val = ev.detail.value;
  
    if (val && val.trim() !== '') {
      this.StaffList = this.StaffList.filter(staff => {
        return staff.Staff_Name.toLowerCase().indexOf(val.trim().toLowerCase()) > -1;
      });
    }
    else{
      this.getStaff();
    }
  }


  home(){
    this.router.navigate(['']);
  }


  data:any;
  clocked:Clocked=new Clocked;
  imageSrc:string;


  clockin(staffID,staff){
    this.clocked.Clocked_In_Time=new Date();
    this.clocked.Staff_ID=staffID;
    console.log(this.clocked.Clocked_In_Time);
    localStorage.setItem("currentStaff",staffID);
    localStorage.setItem("staffName",staff.Staff_Name);
    localStorage.setItem("staffSurname", staff.Staff_Surname)
    this.staffService.clockIn(this.clocked).subscribe(success=>{
      this.data=success;      
      console.log(this.data);
      alert("You have successfully clocked in for the day!")
      // this.dialogs.alert("You have successfully clocked in for the day")
      // .then(()=> console.log('Clocked in'))
      // .catch(e=>console.log("Error displaying dialog",e)); 
      
    })
    this.router.navigate(['task']);
  }

data1:any;
StaffList: Staff[]=[];
  getStaff(){
    this.ops = {     // <<<<<< Initialize header with token
      headers: new HttpHeaders({
        
        'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
      })
    };
    this.staffService.getStaff().subscribe( // <<<< get specific skill
      success => {
        this.data1 = success['staff'];
        this.StaffList = this.data1;
        console.log(this.StaffList);
      }
    );
  }
    

}
