
import { Component, Inject,Output,EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';
import {  OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {FaultStaff, Staff} from '../../Models/Fault';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import {FaultService } from '../fault-service.service'
import { DataSource } from '@angular/cdk/table';
import {Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormBuilder,Validators,FormControl } from '@angular/forms';


@Component({
  selector: 'app-staff-selection-dialog',
  templateUrl: './staff-selection-dialog.component.html',
  styleUrls: ['./staff-selection-dialog.component.scss']
})
export class StaffSelectionDialogComponent {
  
 
  
  public settings: Settings;
  AdminPriv:string; 

  constructor(public appSettings:AppSettings, private router:Router, private faultService: FaultService,
    public dialog:MatDialog, private http:HttpClient, private formBuilder:FormBuilder,
    public dialogRef: MatDialogRef<StaffSelectionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public staff: Staff)  {
      this.settings = this.appSettings.settings;
     }

  ngOnInit(): void {
    this.getStaff();
  }

  staffList:any;
getStaff(){
 
  this.faultService.getStaff().subscribe( 
    (response)=>{
      this.staffList=response;
      console.log(this.staffList);
    }
  )
}

staffArray:Array<Staff>= [];
checkedStaff(id,staff,event) {
        
  console.log(this.staffList);
        console.log(event);
        if (event.checked == true) {
            this.staffArray.push(staff);
        }
        else if (event.checked == false) {
            let index = this.staffArray.indexOf(staff);
            this.staffArray.splice(index,1)
        }

        console.log(this.staffArray)
}
@Output() ouputChild:EventEmitter<any>= new EventEmitter<any>();

select()
{
  this.ouputChild.emit(this.staffArray);

}
}
