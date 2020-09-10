import { Component, OnInit } from '@angular/core';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../../Services/task.service';
import { Maintenance } from '../../Models/Maintenance';

@Component({
  selector: 'app-maintenance-select',
  templateUrl: './maintenance-select.page.html',
  styleUrls: ['./maintenance-select.page.scss'],
})
export class MaintenanceSelectPage implements OnInit {

  constructor(public router:Router, public service:TaskService) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    if(localStorage.getItem("jwtToken") === null){
      this.router.navigate(['login']);
    }
    else{
      console.log(localStorage.getItem("currentStaff"))
    this.getMaintDetails();
    }
    
  }

  backButton(){
    this.router.navigate(['task']);
  }

  maintDetails(id)
 {
   this.router.navigate(['maintenance-details']);
   localStorage.setItem("currentMaint",id);
 }

 maintList:Maintenance[]=[];
 getMaintDetails(){
   this.service.getMaintanances().subscribe(success=>{
      this.maintList=success;
      console.log(this.maintList);
   })
 }

 
 completed(id):boolean{
  var disableBox:boolean=false;
  var isMatch:boolean=false;
  this.maintList.forEach(x=>{
    if(!isMatch){
      if(x.Maintenance_ID==id && x.Status_ID==1){
        isMatch=true;
        disableBox=true;
      }
      else{
        isMatch=false;
        disableBox=false;
      }
    }
  });
  return isMatch;
 }

 isChecked(id,event){
   console.log("entered")
  if(event.checked=true){
    this.service.UpdateMaintStatus(id).subscribe(response=>{
      console.log(response);
    })
  }

 }
}
