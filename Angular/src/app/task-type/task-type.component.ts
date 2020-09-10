import {  OnInit } from '@angular/core';
import { Settings } from '../app.settings.model';
import { AppSettings } from '../app.settings';
import { MatTableDataSource } from '@angular/material/table';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Task_Type } from '../Models/Task_Type'
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
export interface Element {
  Task_Type_ID:number;
  Task_Type_Description:string;
}

@Component({
  selector: 'app-task-type',
  templateUrl: './task-type.component.html',
  styleUrls: ['./task-type.component.scss']
})
export class TaskTypeComponent implements OnInit {

  public displayedColumns = ['Task_Type_ID', 'Task_Type_Description','Actions'];
  public dataSource: any;
  public settings: Settings;
  show: boolean = false;
  showAdd: boolean = false;
  hideTable:boolean=true;
  @ViewChild(MatPaginator) paginator: MatPaginator;

 data: Element[] = [
    {Task_Type_ID: 1,Task_Type_Description: "Farming"},
    {Task_Type_ID: 2,Task_Type_Description: "Plumbing"},
    {Task_Type_ID: 3,Task_Type_Description: "Livestock"},

  ];
  

  Task_TypeEdit: Task_Type;
  Task_TypeAdd: Task_Type;
AdminPriv: string;
selectedValue: string;

  constructor(public appSettings:AppSettings, private router:Router) {
    this.settings = this.appSettings.settings; 
    this.dataSource = new MatTableDataSource<Element>(this.data);
  }
  ngOnInit(): void {
     this.AdminPriv = localStorage.getItem("PrivelageLevel");
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  changeform(){
    if(this.show == false){
      this.show =true;
      this.showAdd = false;
    }
  }

  getTaskTypeDetail(Id: number){
    //Implement function to pupulate edit field and populate vehicle edit\
    this.Task_TypeEdit = new Task_Type;
    this.Task_TypeEdit.Task_Type_Description = "Crops";
    this.changeform();
  }

  AddTaskType(){
    if(this.show == true){
         this.show = false;
    }
    this.Task_TypeAdd = new Task_Type;
    this.showAdd = true;
  }

  PutTaskType(){
    alert("Done");
  }

  deleteTaskType(){
    alert("Are you sure");
  }

  back()
  {
    this.show=false;
    this.hideTable=true;
    this.showAdd=false;
  }
}


