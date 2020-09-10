import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';
import {  OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { types } from '../../Models/eqType'
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { DataSource } from '@angular/cdk/table';
import {Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormBuilder,Validators,FormControl } from '@angular/forms';
import { ConfirmDialogService } from '../../shared/Dialogs/ConfirmDialog/confirm-dialog.service';
import { SuccessDialogService } from '../../shared/Dialogs/SuccessDialog/success-dialog.service';
import { isSuccess } from 'angular-in-memory-web-api';
import { EquipmentTypeService } from '../equipmenttypeservice';




@Component({
  selector: 'app-addequip-dialog',
  templateUrl: './addequip-dialog.component.html',
  styleUrls: ['./addequip-dialog.component.scss']
})
export class AddequipDialogComponent implements OnInit {

  public settings: Settings;
  form:FormGroup;
  addType:any;

  constructor(public appSettings:AppSettings, private router:Router, private eqtService:EquipmentTypeService,
    public dialog:MatDialog, private http:HttpClient, private formBuilder:FormBuilder,
    private dialogService: ConfirmDialogService, private DialogService: SuccessDialogService,
    public dialogRef: MatDialogRef<AddequipDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public equipType: types) 
    {
      this.settings = this.appSettings.settings; 
      //this.dataSource = new MatTableDataSource<Skill>(this.data);
      this.form=this.formBuilder.group({
        'equipType':['',Validators.compose([Validators.required,Validators.maxLength(20)])]
      }) }
  ngOnInit(): void {
  }

  data:any;
  AddNewEquipmentType(){
    console.log("ok");
    this.eqtService.postEquipmentType(localStorage.getItem("currentFarm"),this.addType).subscribe(
      success=>{
        this.data=success;
        console.log(success);
        window.location.reload();
      },
      error=>{
        console.log(error);
      }
      );
      
  }

  ConfirmAddEQTypes() { 
    const options = {
      title: 'Finished Adding Equipment Type?',
      message: 'By leaving the page your information will be saved.',
      cancelText: 'CANCEL',
      confirmText: 'YES'
    };
    
    this.dialogService.open(options);
        
    this.dialogService.confirmed().subscribe(confirmed => {
       if (confirmed) {
            this.AddNewEquipmentType(); // your post/add function 
            
          }
        });
  }

  CancelAddEQTypes() {
    const options = {
      title: 'Cancel Add?',
      message: 'By confirming your information will be lost.',
      cancelText: 'CANCEL',
      confirmText: 'YES, DISCARD CHANGES'
    };
    
    this.dialogService.open(options);
        
    this.dialogService.confirmed().subscribe(confirmed => {
       if (confirmed) {
            this.dialogRef.close(); //to go back to the table 
          }
        });
  }

}
