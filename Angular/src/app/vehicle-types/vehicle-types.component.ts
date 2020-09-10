import {  OnInit } from '@angular/core';
import { Settings } from '../app.settings.model';
import { AppSettings } from '../app.settings';
import { MatTableDataSource } from '@angular/material/table';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Vehicles } from '../Models/Vehicles'
import { Router } from '@angular/router';
import { VehicleTypeService } from './Vehicletypeservice';
import { VehicleTypes } from '../Models/veTypes';
import { ConfirmDialogService } from '../shared/Dialogs/ConfirmDialog/confirm-dialog.service';
import { SuccessDialogService } from '../shared/Dialogs/SuccessDialog/success-dialog.service';
import { AddtypeDialogComponent } from './addtype-dialog/addtype-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { EdittypeDialogComponent } from './edittype-dialog/edittype-dialog.component';

export interface Element {
  Type_ID: string;
  Type: string;

  }

  @Component({
    selector: 'app-vehicle-types',
    templateUrl: './vehicle-types.component.html',
    styleUrls: ['./vehicle-types.component.scss']
  })

export class VehicleTypesComponent implements OnInit {
  public displayedColumns = ['Type','Actions'];
  public dataSource: any;
  public settings: Settings;
  typeSelect: number;
  TypeEdit: VehicleTypes;
  show: boolean = false;  //<<< show edit form
  showtable: boolean = true; //<<< show table
  showAdd: boolean = false; //<<< show add form
  addType: string;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  data: Element[] = [];
  constructor(public appSettings:AppSettings, public router: Router, public vhtService:VehicleTypeService,
    private dialogService: ConfirmDialogService, private DialogService: SuccessDialogService,  public dialog:MatDialog) {
    this.settings = this.appSettings.settings; 
    this.dataSource = new MatTableDataSource<Element>(this.data);
  }

  //==============================Filter table==================
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //============================Initialize paginator============
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  data1:any;
  getData(){
   this.vhtService.getVehicleTypes().subscribe(
      (response) =>{
          this.data1 = response;
          console.log(this.data1);
          this.dataSource = new MatTableDataSource<VehicleTypes>(this.data1);
          this.dataSource.paginator = this.paginator;
      },
      error=>{  //========If JWT is not accepted do this
        //  alert("An error has occured, please re login");
        //  this.router.navigateByUrl("logout");
      }
    );
  }
  //==================Change to edit form=====================
  changeform(){
    if(this.show == false){
      this.show =true;
      this.showAdd = false;
      this.showtable = false;
    }
  }

  //=================change to add form=======================
  AddVehicleType(){
    // if(this.show == true){
    //      this.show = false;
    // }

    // this.showAdd = true;
    // this.showtable = false;
    const dialogRef = this.dialog.open(AddtypeDialogComponent
      
      );
      //this.showAdd=true;
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
  }


  //===============Vehicle POST==============================
  AddNewVehicleType(){
    console.log("ok");
    this.vhtService.postVehicleType(localStorage.getItem("currentFarm"),this.addType).subscribe(
      success=>{
      },
      error=>{
        console.log(error);
      }
      );
  }

  //adds a dialog box for confirming the addition to the system 
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
            this.showTable(); 
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
            this.showTable(); //to go back to the table 
          }
        });
  }

  //================Get type to edit in object===============
  getTypeDetail(selected: number){
    this.vhtService.getVehicleTypeDetails(selected).subscribe(  //<<<<<<Get equipment types
      (response) => {
            this.data1 = response;
            console.log(this.data1);
            this.TypeEdit = <VehicleTypes>this.data1;
            console.log(this.TypeEdit);
            this.typeSelect = selected;
            const dialogRef = this.dialog.open(EdittypeDialogComponent,{
              data:this.data1
            });
            
      });
    this.changeform();
  }

  //===========================Show table ===================
  showTable(){
    this.showtable = true;
    this.showAdd = false;
    this.show = false;
  }
  ngOnInit(): void {
    if(localStorage.getItem("jwtToken") == null){
      this.router.navigateByUrl("login");
      
    }

    this.getData();
  }


  putvehicleType(){
    this.vhtService.putVehicleType(this.TypeEdit.Vehicle_Type_Description,this.typeSelect).subscribe(
      success=>{
        console.log("Success")
      },
      error=>{
        console.log(error);
      }
    );
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
            this.showTable();
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
            this.showTable(); //to show the table
          }
        });
  }
}
