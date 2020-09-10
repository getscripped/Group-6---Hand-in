import { Component, OnInit } from '@angular/core';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../../Services/task.service';
import { Task } from '../../Models/Task';
@Component({
  selector: 'app-task-select',
  templateUrl: './task-select.page.html',
  styleUrls: ['./task-select.page.scss'],
})
export class TaskSelectPage implements OnInit {

  constructor(public router:Router, public service:TaskService) { }

  ngOnInit() {
    
  }
  ionViewWillEnter(){
    if(localStorage.getItem("jwtToken") === null){
      this.router.navigate(['login']);
    }
    else{
      console.log(localStorage.getItem("currentStaff"))
    this.getTaskDetails();
    }
    
  }

  backButton(){
    this.router.navigate(['task']);
  }

  taskDetails(taskID)
 {
   localStorage.setItem("currentTask",taskID);
   this.router.navigate(['task-details']);
 }
taskList:Task[]=[];
 getTaskDetails(){
   this.service.getTasks().subscribe(success=>{
      this.taskList=success;
      console.log(this.taskList);
   })
 }

 
 completed(id):boolean{
  var disableBox:boolean=false;
  var isMatch:boolean=false;
  this.taskList.forEach(x=>{
    if(!isMatch){
      if(x.Task_ID==id && x.Status_ID==1){
        //isMatch=true;
        isMatch=false; //vir nou gaan ek dit so set dan lyk dit uncompleted
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
    this.service.UpdateTaskStatus(id).subscribe(response=>{
      console.log(response);
    })
  }

 }
}
