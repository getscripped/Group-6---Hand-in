import { Component, OnInit } from '@angular/core';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../../Services/task.service';
import { Task } from '../../Models/Task';
@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.page.html',
  styleUrls: ['./task-details.page.scss'],
})
export class TaskDetailsPage implements OnInit {

  constructor(public router: Router,public service:TaskService) { }

  ngOnInit() {
  }
 back(){
   this.router.navigate(['task-select']);
 }

 ionViewWillEnter(){
  if(localStorage.getItem("jwtToken") === null){
    this.router.navigate(['login']);
  }
  else{
    console.log(localStorage.getItem("currentTask"));
    this.getTaskDetails();
  }
   
 }

 home(){
  this.router.navigate(['']);
}
taskDetails:Task=new Task;
getTaskDetails(){
  this.service.getTaskDetails().subscribe(success=>{
    this.taskDetails=success;
    console.log(this.taskDetails);
  })
}
}
