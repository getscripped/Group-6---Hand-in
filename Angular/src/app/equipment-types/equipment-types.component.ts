import {  OnInit } from '@angular/core';
import { Settings } from '../app.settings.model';
import { AppSettings } from '../app.settings';
import { MatTableDataSource } from '@angular/material/table';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Vehicles } from '../Models/Vehicles'
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { types } from '../Models/eqType';
import { EquipmentTypeService } from './equipmenttypeservice';
import { getWeekYearWithOptions } from 'date-fns/fp';
import { ConfirmDialogService } from '../shared/Dialogs/ConfirmDialog/confirm-dialog.service';
import { SuccessDialogService } from '../shared/Dialogs/SuccessDialog/success-dialog.service';
import { MatDialog } from '@angular/material/dialog';
import { AddequipDialogComponent } from './addequip-dialog/addequip-dialog.component';
import { EditequipDialogComponent } from './editequip-dialog/editequip-dialog.component';



@Component({
  selector: 'app-equipment-types',
  templateUrl: './equipment-types.component.html',
  styleUrls: ['./equipment-types.component.scss']
})
export class EquipmentTypesComponent implements OnInit {
  public displayedColumns = ['Type_ID', 'Type','Actions'];
  public dataSource: any;
  public settings: Settings;
  editSelect: number;
  TypeEdit: types;
  show: boolean = false; // <<< Show edit form
  showtable: boolean = true;  // <<<  show table variable
  showAdd: boolean = false;  //<<< show add form variable
  addType:any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  data : types[] = []; // <<< data goes here
  constructor(public appSettings:AppSettings, public router: Router, 
    private http : HttpClient, private eqtService: EquipmentTypeService, private dialogService: ConfirmDialogService, 
    public dialog:MatDialog,private DialogService: SuccessDialogService) {
    this.settings = this.appSettings.settings; 
  
  }

  //=======================================Filter table======================
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //======================================Paginator=========================
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  //=====================================Formchange to show edit===========
  changeform(){
    if(this.show == false){
      this.show =true;
      this.showAdd = false;
      this.showtable = false;
    }
  }

  //====================================Formchange to show add============
  AddVehicleType(){
    // if(this.show == true){
    //      this.show = false;
    // }

    // this.showAdd = true;
    // this.showtable = false;
    const dialogRef = this.dialog.open(AddequipDialogComponent
      
      );
      //this.showAdd=true;
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
  }
 
  //=================================New type POST========================
  AddNewEquipmentType(){
    console.log("ok");
    this.eqtService.postEquipmentType(localStorage.getItem("currentFarm"),this.addType).subscribe(
      success=>{

      },
      error=>{
        console.log(error);
      }
      );
  }

   //adds a dialog box for confirming the addition to the system 
   ConfirmAddEQTypes() { 
    const options = {
      title: 'Finished Adding Equipment Typrd?',
      message: 'By leaving the page your information will be saved.',
      cancelText: 'CANCEL',
      confirmText: 'YES'
    };
    
    this.dialogService.open(options);
        
    this.dialogService.confirmed().subscribe(confirmed => {
       if (confirmed) {
            this.AddNewEquipmentType(); // your post/add function 
            this.showTable(); 
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
            this.showTable(); //to go back to the table 
          }
        });
  }

  //=================================Get type details to edit============
  getTypeDetail(selected: number){
    this.eqtService.getEquipmentTypeDetails(selected).subscribe(  //<<<<<<Get equipment types
      (response) => {
            this.data1 = response;
            console.log(this.data1);
            this.TypeEdit = <types>this.data1;
            console.log(this.TypeEdit);
            this.editSelect = selected;
            const dialogRef = this.dialog.open(EditequipDialogComponent,{
              data:this.data1
            });
            
      });
    
  }

  //========================================Re show table================
  showTable(){
    this.showtable = true;
    this.showAdd = false;
    this.show = false;
  }


  ngOnInit(): void {
    if(localStorage.getItem("jwtToken") === null){
      this.router.navigateByUrl("login");
    }else{
      
      this.getData();
    }
  }
  data1:any;
  getData(){
   this.eqtService.getEquipmentType().subscribe(
      (response) =>{
          this.data1 = response;
          this.dataSource = new MatTableDataSource<types>(this.data1);
          this.dataSource.paginator = this.paginator;
      },
      error=>{  //========If JWT is not accepted do this
        //  alert("An error has occured, please re login");
         // this.router.navigateByUrl("logout");
      }
    );
  }

  //===============================================================
  putType(){
    this.eqtService.putEquipmentType(this.TypeEdit.Equipment_Type_Description,this.editSelect).subscribe(
      success=>{
        console.log("Success")
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
            this.showTable();
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
            this.showTable(); //to show the table
          }
        });
  }

}