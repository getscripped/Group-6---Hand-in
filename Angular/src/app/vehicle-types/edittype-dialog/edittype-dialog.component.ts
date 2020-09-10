import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';
import {  OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Skill, PostSkill } from '../../Models/Skill'
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { DataSource } from '@angular/cdk/table';
import {Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormBuilder,Validators,FormControl } from '@angular/forms';
import { ConfirmDialogService } from '../../shared/Dialogs/ConfirmDialog/confirm-dialog.service';
import { SuccessDialogService } from '../../shared/Dialogs/SuccessDialog/success-dialog.service';
import { isSuccess } from 'angular-in-memory-web-api';
import { VehicleTypeService } from '../Vehicletypeservice';
import { VehicleTypes } from '../../Models/veTypes';

@Component({
  selector: 'app-edittype-dialog',
  templateUrl: './edittype-dialog.component.html',
  styleUrls: ['./edittype-dialog.component.scss']
})
export class EdittypeDialogComponent implements OnInit {

  public settings: Settings;
  form:FormGroup;
  typeSelect: number;
  TypeEdit: VehicleTypes;

  constructor(public appSettings:AppSettings, private router:Router, private vhtService:VehicleTypeService,
    public dialog:MatDialog, private http:HttpClient, private formBuilder:FormBuilder,
    private dialogService: ConfirmDialogService, private DialogService: SuccessDialogService,
    public dialogRef: MatDialogRef<EdittypeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public veType: VehicleTypes) {

      this.settings = this.appSettings.settings; 
      //this.dataSource = new MatTableDataSource<Skill>(this.data);
      this.form=this.formBuilder.group({
        'vehicleType':['',Validators.compose([Validators.required,Validators.maxLength(20)])]
      })
    }

  ngOnInit(): void {
    if(this.veType){
      this.form.setValue(this.veType);
    } 
    else{
      this.veType = new VehicleTypes();
    } 
  }

  putvehicleType(){
    this.vhtService.putVehicleType(this.veType.Vehicle_Type_Description,this.veType.Vehicle_Type_ID).subscribe(
      success=>{
        console.log("Success")
      },
      error=>{
        console.log(error);
      }
    );
    window.location.reload();
  }

  ConfirmEditVT() {
    const options = {
      title: 'Finshed Editing?',
      message: 'By confirming, your information will be changed.',
      cancelText: 'CANCEL',
      confirmText: 'YES, CONFIRM CHANGES'
    };
    
    this.dialogService.open(options);
        
    this.dialogService.confirmed().subscribe(confirmed => {
       if (confirmed) {
            this.putvehicleType(); // for the edit 
           
          }
        });
  }

  //this function is to cancel the edit 
  CancelEditVT() {
    const options = {
      title: 'Cancel Edit?',
      message: 'By confirming your information will be lost.',
      cancelText: 'CANCEL',
      confirmText: 'YES, DISCARD CHANGES'
    };
    
    this.dialogService.open(options);
        
    this.dialogService.confirmed().subscribe(confirmed => {
       if (confirmed) {
        this.dialog.closeAll();
          }
        });
  }
}
