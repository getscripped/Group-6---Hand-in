import {  OnInit } from '@angular/core';
import { Settings } from '../app.settings.model';
import { AppSettings } from '../app.settings';
import { MatTableDataSource } from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { StaffSchedules } from '../Models/StaffSchedules';

export interface Element {
Task_Description: string;
Status_Description: string;
}
@Component({
  selector: 'app-staff-schedule',
  templateUrl: './staff-schedule.component.html',
  styleUrls: ['./staff-schedule.component.scss']
})
export class StaffScheduleComponent implements OnInit {
  public displayedColumns = ['Task_Description', 'Status_Description'];
  public dataSource: any;
  StartDateDef = new Date('1970-01-01');
  EndDateDef = new Date(2020, 11, 10);
  public settings: Settings;
  show: boolean = false;
  showAdd: boolean = false;
  hideTable: boolean = true;
  Recurring: boolean = true;
  weekday: boolean = false;
  staffShow:boolean = false;
  taskshow: boolean = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;

 data: Element[] = [
    {Task_Description: 'Feed Chickens',Status_Description: 'Completed'},
    {Task_Description: 'Fix Fence', Status_Description: 'In Progress'},
    {Task_Description: 'Feed Chickens', Status_Description: 'Completed'},
    {Task_Description: 'Mow Lawn', Status_Description: 'Completed'},   
    {Task_Description: 'Fix Fence', Status_Description: 'In Progress'},
    {Task_Description: 'Mow Lawn', Status_Description: 'In Progress'},   
    {Task_Description: 'Fix Fence', Status_Description: 'Completed'}

  ];

tasks: string[] = [
   "Fix Fence", "Mow Lawn", "Feed Chickens"
 ]

 statusses: string[] = [
  "In Progress", "Completed"
]

AdminPriv: string;
TaskSelect: string;
StatusSelect: string;

constructor(public appSettings:AppSettings) {
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
}
