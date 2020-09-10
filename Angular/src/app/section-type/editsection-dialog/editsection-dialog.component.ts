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
import { EditskillDialogComponent } from '../../skill/editskill-dialog/editskill-dialog.component';

@Component({
  selector: 'app-editsection-dialog',
  templateUrl: './editsection-dialog.component.html',
  styleUrls: ['./editsection-dialog.component.scss']
})
export class EditsectionDialogComponent implements OnInit {

  settings:Settings;
form:FormGroup;
SectionTypeAdd:PostSectionType = new PostSectionType;
ops:any;

  constructor(public appSettings:AppSettings, private router:Router, private SecTypeService :SectionTypeService,
    public dialog:MatDialog, private http:HttpClient, private formBuilder:FormBuilder,
    private dialogService: ConfirmDialogService, private DialogService: SuccessDialogService,
    public dialogRef: MatDialogRef<EditskillDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public secType: SectionTypes) {
      this.settings = this.appSettings.settings; 
    console.log("lol");
    this.form = this.formBuilder.group({
      'Description': ['',Validators.compose([Validators.required, Validators.maxLength(20)])],
     })
    }

  ngOnInit(): void {
  }

  PutSectionType(){
    this.SecTypeService.putSectionType(this.secType, this.secType.Section_Type_ID).subscribe(
    success=>{
      console.log(success);
      window.location.reload();
    },

    error=>{
      console.log(error)
    }
    );
  }

}
