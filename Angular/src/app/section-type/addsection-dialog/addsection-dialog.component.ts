import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';
import {  OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { DataSource } from '@angular/cdk/table';
import {Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormBuilder,Validators,FormControl } from '@angular/forms';
import { ConfirmDialogService } from '../../shared/Dialogs/ConfirmDialog/confirm-dialog.service';
import { SuccessDialogService } from '../../shared/Dialogs/SuccessDialog/success-dialog.service';
import { isSuccess } from 'angular-in-memory-web-api';
import { SectionTypes, PostSectionType } from '../../Models/SectionType';
import { SectionTypeService } from '../sectiontype-service.service';

@Component({
  selector: 'app-addsection-dialog',
  templateUrl: './addsection-dialog.component.html',
  styleUrls: ['./addsection-dialog.component.scss']
})
export class AddsectionDialogComponent implements OnInit {
settings:Settings;
form:FormGroup;
SectionTypeAdd:PostSectionType = new PostSectionType;
ops:any;

  constructor(public appSettings:AppSettings, private router:Router, private SecTypeService :SectionTypeService,
    public dialog:MatDialog, private http:HttpClient, private formBuilder:FormBuilder,
    private dialogService: ConfirmDialogService, private DialogService: SuccessDialogService,
    public dialogRef: MatDialogRef<AddsectionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public secType: SectionTypes) {
      this.settings = this.appSettings.settings; 
    console.log("lol");
    this.form = this.formBuilder.group({
      'Description': ['',Validators.compose([Validators.required, Validators.maxLength(20)])],
     })
    }

  ngOnInit(): void {
  }
  addNewSectionType(){

    this.SectionTypeAdd.Farm_ID = Number(localStorage.getItem("currentFarm"));//Remove!!!!!!!
  
    
    
    this.ops = {     // <<<<<< Initialize header with token
      headers: new HttpHeaders({
        
        'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
      })
    };
    this.SecTypeService.postSectionType(this.SectionTypeAdd).subscribe( //<<<<<<<< Add Section type
      (response) =>  {
          console.log(response);
          window.location.reload();
      }
    );
  }
}