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
import { EdittypeDialogComponent } from '../../vehicle-types/edittype-dialog/edittype-dialog.component';


@Component({
  selector: 'app-editequip-dialog',
  templateUrl: './editequip-dialog.component.html',
  styleUrls: ['./editequip-dialog.component.scss']
})
export class EditequipDialogComponent implements OnInit {

  public settings: Settings;
  form:FormGroup;
  
  editSelect: number;
  TypeEdit: types;

  constructor(public appSettings:AppSettings, private router:Router, private eqtService:EquipmentTypeService,
    public dialog:MatDialog, private http:HttpClient, private formBuilder:FormBuilder,
    private dialogService: ConfirmDialogService, private DialogService: SuccessDialogService,
    public dialogRef: MatDialogRef<EdittypeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public equipType: types) 
    {
      this.settings = this.appSettings.settings; 
      //this.dataSource = new MatTableDataSource<Skill>(this.data);
      this.form=this.formBuilder.group({
        'equipType':['',Validators.compose([Validators.required,Validators.maxLength(20)])]
      }) }
  ngOnInit(): void {
    if(this.equipType){
      this.form.setValue(this.equipType);
      this.editSelect=this.equipType.Equipment_Type_ID;
      console.log(this.editSelect);
     // localStorage.setItem("currentFarm","6");
      
    } 
  }
  data:any;
  putType(){
    this.eqtService.putEquipmentType(this.equipType.Equipment_Type_Description,this.equipType.Equipment_Type_ID).subscribe(
      success=>{
        this.data=success;
        console.log(this.data);
        console.log("Success")
        window.location.reload();
      },
      error=>{
        console.log(error);
      }
    );
  }

  ConfirmEditEQTypes() {
    const options = {
      title: 'Finshed Editing?',
      message: 'By confirming, your information will be changed.',
      cancelText: 'CANCEL',
      confirmText: 'YES, CONFIRM CHANGES'
    };
    
    this.dialogService.open(options);
        
    this.dialogService.confirmed().subscribe(confirmed => {
       if (confirmed) {
            this.putType(); // for the edit 
            
          }
        });
  }

  //this function is to cancel the edit 
  CancelEditEQTypes() {
    const options = {
      title: 'Cancel Edit?',
      message: 'By confirming your information will be lost.',
      cancelText: 'CANCEL',
      confirmText: 'YES, DISCARD CHANGES'
    };
    
    this.dialogService.open(options);
        
    this.dialogService.confirmed().subscribe(confirmed => {
       if (confirmed) {
            this.dialogRef.close(); //to show the table
          }
        });
  }

}
