import { Component, OnInit } from '@angular/core';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../../Services/task.service';
import { Faults } from '../../Models/Fault';

@Component({
  selector: 'app-fault-details',
  templateUrl: './fault-details.page.html',
  styleUrls: ['./fault-details.page.scss'],
})
export class FaultDetailsPage implements OnInit {

  constructor(public router: Router, public service:TaskService) { }

  ngOnInit() {
  }
  back(){
    this.router.navigate(['fault-select']);
  }
 
  home(){
   this.router.navigate(['']);
 }

 ionViewWillEnter(){
  if(localStorage.getItem("jwtToken") === null){
    this.router.navigate(['login']);
  }
  else{
    console.log(localStorage.getItem("currentFault"));
   this.getFaultDetails();
  }
  
}

 faultDetails:Faults=new Faults;
getFaultDetails(){
  this.service.getFaultDetails().subscribe(success=>{
    this.faultDetails=success;
    console.log(this.faultDetails);
  })
}
}
