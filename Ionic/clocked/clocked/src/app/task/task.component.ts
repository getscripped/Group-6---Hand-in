import { Component, OnInit } from '@angular/core';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';

import {NgModule} from '@angular/core';
import {Observable} from 'rxjs';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {

  constructor(private router:Router) { }
staffName:any;
staffSurname:any;
  ngOnInit() {
    
  }

  ionViewWillEnter(){
    if(localStorage.getItem("jwtToken") === null){
      this.router.navigate(['login']);
    }
    else{
      this.staffName=localStorage.getItem("staffName")
    this.staffSurname=localStorage.getItem("staffSurname")
    console.log(this.staffName)
    console.log(this.staffSurname)
    }
    
  }

  task:boolean=false;
  fault:boolean=false;
  maintenance:boolean=false;

  home(){
    this.router.navigate(['']);
  }

  tasks(){
    this.task=true;
    this.fault=false;
    this.maintenance=false;
    this.router.navigate(['task-select'])
    
  }
  faults(){
    this.task=false;
    this.fault=true;
    this.maintenance=false;
    this.router.navigate(['fault-select'])
  }
  maintenances(){
    this.task=false;
    this.fault=false;
    this.maintenance=true;
    this.router.navigate(['maintenance-select'])
  }

}
