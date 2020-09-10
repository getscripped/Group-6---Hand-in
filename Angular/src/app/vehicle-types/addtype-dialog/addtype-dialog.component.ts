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
  selector: 'app-addtype-dialog',
  templateUrl: './addtype-dialog.component.html',
  styleUrls: ['./addtype-dialog.component.scss']
})
export class AddtypeDialogComponent implements OnInit {

  public settings: Settings;
  form:FormGroup;
  addType: string;

  constructor(public appSettings:AppSettings, private router:Router, private vhtService:VehicleTypeService,
    public dialog:MatDialog, private http:HttpClient, private formBuilder:FormBuilder,
    private dialogService: ConfirmDialogService, private DialogService: SuccessDialogService,
    public dialogRef: MatDialogRef<AddtypeDialogComponent>,
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

  AddNewVehicleType(){
    console.log("ok");
    this.vhtService.postVehicleType(localStorage.getItem("currentFarm"),this.addType).subscribe(
      success=>{
      },
      error=>{
        console.log(error);
      }
      );
      window.location.reload();
  }
  ConfirmAddVT() { 
    const options = {
      title: 'Finished Adding Vehicle Type?',
      message: 'By leaving the page your information will be saved.',
      cancelText: 'CANCEL',
      confirmText: 'YES'
    };
    
    this.dialogService.open(options);
        
    this.dialogService.confirmed().subscribe(confirmed => {
       if (confirmed) {
            this.AddNewVehicleType(); // your post/add function 
            this.router.navigateByUrl('/veTypes') //
          }
        });
  }

  CancelAddVT() {
    const options = {
      title: 'Cancel Add?',
      message: 'By confirming your information will be lost.',
      cancelText: 'CANCEL',
      confirmText: 'YES, DISCARD CHANGES'
    };
    
    this.dialogService.open(options);
        
    this.dialogService.confirmed().subscribe(confirmed => {
       if (confirmed) {
        this.dialogRef.close();//to go back to the table 
          }
        });
  }
}
