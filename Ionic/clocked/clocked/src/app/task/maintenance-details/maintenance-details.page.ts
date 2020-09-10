import { Component, OnInit } from '@angular/core';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../../Services/task.service';
import { Maintenance } from '../../Models/Maintenance';

@Component({
  selector: 'app-maintenance-details',
  templateUrl: './maintenance-details.page.html',
  styleUrls: ['./maintenance-details.page.scss'],
})
export class MaintenanceDetailsPage implements OnInit {

  constructor(public router:Router, public service:TaskService) { }

  ngOnInit() {
  }
  back(){
    this.router.navigate(['maintenance-select']);
  }
 
  home(){
   this.router.navigate(['']);
 }

 ionViewWillEnter(){
  if(localStorage.getItem("jwtToken") === null){
    this.router.navigate(['login']);
  }
  else{
    console.log(localStorage.getItem("currentMaint"));
   this.getMaintDetails();
  }
  
}

mainDetails:Maintenance=new Maintenance;
getMaintDetails(){
  this.service.getMaintDetails().subscribe(success=>{
    this.mainDetails=success;
    console.log(this.mainDetails);
  })
}
}
