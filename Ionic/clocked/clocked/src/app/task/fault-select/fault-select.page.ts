import { Component, OnInit } from '@angular/core';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../../Services/task.service';
import { Faults } from '../../Models/Fault';

@Component({
  selector: 'app-fault-select',
  templateUrl: './fault-select.page.html',
  styleUrls: ['./fault-select.page.scss'],
})
export class FaultSelectPage implements OnInit {

  constructor(public router:Router, public service:TaskService) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    if(localStorage.getItem("jwtToken") === null){
      this.router.navigate(['login']);
    }
    else{
      console.log(localStorage.getItem("currentStaff"))
    this.getFaultDetails();
    }
    
  }

  backButton(){
    this.router.navigate(['task']);
  }

  faultDetails(id)
 {
   localStorage.setItem("currentFault",id);
   this.router.navigate(['fault-details']);
   
 }

 faultList:Faults[]=[];
 getFaultDetails(){
   this.service.getFaults().subscribe(success=>{
      this.faultList=success;
      console.log(this.faultList);
   })
 }

 

 completed(id):boolean{
  var disableBox:boolean=false;
  var isMatch:boolean=false;
  this.faultList.forEach(x=>{
    if(!isMatch){
      if(x.Fault_ID==id && x.Status_ID==1){
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
    this.service.UpdateFaultStatus(id).subscribe(response=>{
      console.log(response);
    })
  }

 }
}
