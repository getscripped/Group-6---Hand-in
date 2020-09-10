import { Component, OnInit, Type, Input,Inject } from '@angular/core';

import { Settings } from '../app.settings.model';
import { AppSettings } from '../app.settings';
import { MatTableDataSource } from '@angular/material/table';
import {  ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { DialogOverviewExampleDialog } from '../pages/ui/dialog/dialog.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Maintenance, PostMaintenance,MaintenanceStaff,Staff } from '../Models/Maintenance';
import { MaintenanceService } from './maintenance-service.service';
import { isSuccess } from 'angular-in-memory-web-api';
import { error } from 'protractor';
import { Infrastructure } from '../Models/Infrastructures';
import{formatDate} from '@angular/common';
import { Equipment } from '../Models/equipment';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatFormField } from '@angular/material/form-field';
import { MatSelect } from '@angular/material/select';
//import { StaffSelectionDialogComponent } from './staff-selection-dialog/staff-selection-dialog.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmDialogService } from '../shared/Dialogs/ConfirmDialog/confirm-dialog.service';
import { SuccessDialogService } from '../shared/Dialogs/SuccessDialog/success-dialog.service';

export interface Element {
  Value: number;
  Text: string;
  }

@Component({
  selector: 'app-maintenance-log',
  templateUrl: './maintenance-log.component.html',
  styleUrls: ['./maintenance-log.component.scss']
})
export class MaintenanceLogComponent implements OnInit {

  public displayedColumns = ['Maintenance_ID','Maintenance_Description','Maintenance_Type_Description','Section_Name' ,'Infrastructure_Name','Equipment_Description', 'Maintenance_Start_Date', 'Maintenance_End_Date', 'Importance_Description', 'Status_Description','Actions'];
  public dataSource: any;
  public settings: Settings;
  show: boolean = false;
  showAdd: boolean = false;
  showTable: boolean = true;
  form: FormGroup;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild('InfraSec') InfraSec: MatCheckbox;
  @ViewChild('EqSec') EqSec: MatCheckbox;
  @ViewChild('EqInfa') EqInfa: MatCheckbox;
  @ViewChild('Section') Section: MatCheckbox;
  @ViewChild('SecSelect') SecSelect: MatSelect;
  //@Input() array:any;
 // @ViewChild(StaffSelectionDialogComponent) selection;

 

  

  section:boolean =false;
  infrastructure:boolean =false;
  equipment:boolean=false;
  infrastructureAndEquipment:boolean=false;

currentEdit: number;
ops: any;
types: string[] = [
  "Wiring","Structural","Security","Other", "Fence", "Equipment", "Infrastructure"
 ]
 infrastructures: Infrastructure[];
 //equipment: Equipment[];
 //Importance: Importance[];
 staffs: Staff[];
active: Element[] = [{Value: 1, Text: "True"},{Value: 0, Text: "False"}]; // <<<< dropdown data
MaintenanceEdit: Maintenance;
MaintenanceAdd: Maintenance=new Maintenance;
data : Maintenance[] = [];
AdminPriv: string;


  constructor(public appSettings:AppSettings,public router: Router, private formbuilder: FormBuilder, 
    public dialog: MatDialog, private http : HttpClient,private MaintenanceService: MaintenanceService, private dialogService: ConfirmDialogService, private DialogService: SuccessDialogService) {
    this.settings = this.appSettings.settings; 
    
    this.form = this.formbuilder.group({
      'Description': ['',Validators.compose([Validators.required, Validators.maxLength(50)])],
      'Start': [null,Validators.compose([Validators.required])],
      'End': [null,Validators.compose([Validators.required])],
      'section':['',Validators.compose([Validators.required])],
      'importance':['',Validators.compose([Validators.required])],
      'equipment':['',Validators.compose([Validators.required])],
      'infrastructure':['',Validators.compose([Validators.required])],
      'equipment1':['',Validators.compose([Validators.required])],
      'infrastructure1':['',Validators.compose([Validators.required])],
      'Type':['',Validators.compose([Validators.required])],
      'Status' :['',Validators.compose([Validators.required])],

  })
  }
  ngOnInit(): void {
    if(localStorage.getItem("jwtToken") == null){ 
      this.router.navigateByUrl("login");
   }else{
    if(localStorage.getItem("hasSection") != "yes"){
      alert("No sections found, please add one");
      this.router.navigateByUrl("/section");
    }
    
    //localStorage.setItem("currentFarm","5");
    //this.getData();
    //if(localStorage.getItem("jwtToken") == null){ 
      this.AdminPriv = localStorage.getItem("PrivelageLevel");
    //localStorage.setItem("currentFarm","5"); //<<<<<< Remove when done!!!!!!!!!!!!!!!!!!!!
      this.getData();
   }
   //}
  }

  

  //====================================Get data==============================
  dataMaintenance:Maintenance[]=[];
  
  dataStaff:any;
  getData(){
   // localStorage.setItem("currentFarm","5");
    this.MaintenanceService.getMaintenance().subscribe( //<<<<<<Get All Sections
      (response) =>{
        console.log(response);
        this.dataMaintenance = response['Maintenance'];
        this.dataStaff = response['Maintenancetaff'];
        this.dataMaintenance.forEach(element => {
          element.Maintenance_Start_Date=formatDate(element.Maintenance_Start_Date,'yyyy/MM/dd','en');
          element.Maintenance_End_Date=formatDate(element.Maintenance_End_Date,'yyyy/MM/dd','en');
        });
        console.log(this.dataMaintenance);
        this.dataSource = new MatTableDataSource<Maintenance>(this.dataMaintenance);  //<<<<populate datasource
        this.dataSource.paginator = this.paginator; // <<<<<<< Paginator setup
      },
      // error=>{  //========If JWT is not accepted do this
      //     alert("An error has occured, please re login");
      //     this.router.navigateByUrl("logout");
          
      // }
    );
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  staffarray:any;
  ngAfterViewInit() {
    // this.staffarray=this.selection.staffArray; 
    // console.log(this.staffarray);
    this.dataSource.paginator = this.paginator;
  }

  changeform(){
    if(this.show == false){
      this.show =true;
      this.showAdd = false;
      this.showTable = false;
    }
  }
  canEdit: boolean = false;
  data2:any;
  tempMaintenance:Maintenance;
tempStaff:any;
  getMaintenanceDetails(id: number){
     this.canEdit = true;
   //Implement function to pupulate edit field and populate skill edit\
   this.editMaintenanceID = id;
   //this.changeform();
   //localStorage.setItem("CurrentSkill", id.toString())
   this.ops = {     // <<<<<< Initialize header with token
     headers: new HttpHeaders({
       'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
     })
   };
   this.MaintenanceService.getMaintenanceDetails(id).subscribe( // <<<< get specific skill
     success => {
       this.data2 = success;
       
       this.MaintenanceEdit = this.data2['Maintenance'][0];
       this.tempStaff = this.data2['MaintenanceStaff'];
       console.log(this.MaintenanceEdit);
       console.log(this.tempStaff);
       
 
       if(this.EqSec == undefined) {
         setTimeout(()=> {
           this.sectionChecked();
           this.infraChecked();
           this.equipChecked();
           this.equipAndInfraChecked();
         }, 1000)
       } else {
           this.sectionChecked();
           this.infraChecked();
           this.equipChecked();
           this.equipAndInfraChecked();
       }
       
     }
   );
   
   this.getSection();
   this.getImportance();
   this.getMaintenanceTypes();
   this.getStaff();
   this.changeform();
     
     
   }
//========================Get Values for selected Maintenance to edit=====
getMaintenanceDetail(Id: number){
  localStorage.setItem("CurrentMaintenance", Id.toString())
  this.ops = {     // <<<<<< Initialize header with token
    headers: new HttpHeaders({
      
      'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
    })
  };
  this.MaintenanceService.getMaintenanceDetails(Id).subscribe( // <<<< get specific equipment
    success => {
      this.MaintenanceEdit = success['Maintenance'][0];
      this.dataStaff = success['MaintenanceStaff'];
      console.log(this.MaintenanceEdit);
      console.log(this.dataStaff);
      this.currentEdit = Id;
    }
  );
  this.changeform();
}

  //===========================Change forms to add Maintenance============
  AddMaintenance(){
    if(this.show == true){
         this.show = false;
    }
    this.MaintenanceAdd = new Maintenance;
    this.showAdd = true;
    this.showTable = false;
    this.getSection();
    this.getImportance();
    this.getMaintenanceTypes();
    this.getStaff();
  }

  ConfirmAddMT() { 
    const options = {
      title: 'Finished Adding Farm?',
      message: 'By leaving the page your information will be saved.',
      cancelText: 'CANCEL',
      confirmText: 'YES'
    };
    
    this.dialogService.open(options);
        
    this.dialogService.confirmed().subscribe(confirmed => {
       if (confirmed) {
            this.addNewMaintenance(); // your post/add function 
            this.ShowTable(); 
          }
        });
  }

  CancelAddMT() {
    const options = {
      title: 'Cancel Add?',
      message: 'By confirming your information will be lost.',
      cancelText: 'CANCEL',
      confirmText: 'YES, DISCARD CHANGES'
    };
    
    this.dialogService.open(options);
        
    this.dialogService.confirmed().subscribe(confirmed => {
       if (confirmed) {
            this.ShowTable(); //to go back to the table 
          }
        });
  }

  ConfirmEditMT() { 
    const options = {
      title: 'Finished Editing?',
      message: 'By leaving the page your information will be saved.',
      cancelText: 'CANCEL',
      confirmText: 'YES'
    };
    
    this.dialogService.open(options);
        
    this.dialogService.confirmed().subscribe(confirmed => {
       if (confirmed) {
            this.PutMaintenance(); // your post/add function 
            this.ShowTable(); 
          }
        });
  }

  CancelEditMT() {
    const options = {
      title: 'Cancel Edit?',
      message: 'By confirming your information will be lost.',
      cancelText: 'CANCEL',
      confirmText: 'YES, DISCARD CHANGES'
    };
    
    this.dialogService.open(options);
        
    this.dialogService.confirmed().subscribe(confirmed => {
       if (confirmed) {
            this.ShowTable(); //to go back to the table 
          }
        });
  }


  //=============================PUT Maintenance==========================
  editMaintenanceID:number;
  maintenance:MaintenanceStaff=new MaintenanceStaff();
  PutMaintenance(){
    this.maintenance.MaintenanceLog=this.MaintenanceEdit;
    this.maintenance.Staff=this.staffArray;
    console.log(this.editMaintenanceID);
    console.log(this.maintenance);
    this.ops = {     // <<<<<< Initialize header with token
      headers: new HttpHeaders({
        
        'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
      })
    };
    this.MaintenanceService.putMaintenance(this.editMaintenanceID,this.maintenance).subscribe( //<<<<<<<< update skill
      (response) =>  {
          console.log(response);
          
      }
    );
    //window.location.reload();
  }

// ===========================POST Section==========================
maintenanceStaff:MaintenanceStaff=new MaintenanceStaff;
addNewMaintenance(){
  //this.MaintenanceAdd.Section_ID = 5;
  this.MaintenanceAdd.Status_ID = 2;
  //this.MaintenanceAdd.Maintenance_ID=0;
  //this.MaintenanceAdd.Maintenance_Image=null;

  //this.MaintenanceAdd.Maintenance_Start_Date=formatDate(this.MaintenanceAdd.Maintenance_Start_Date,'yyyy-MM-dd','en');
  //this.MaintenanceAdd.Maintenance_End_Date=formatDate(this.MaintenanceAdd.Maintenance_End_Date,'yyyy-MM-dd','en');

  this.maintenanceStaff.MaintenanceLog=this.MaintenanceAdd;
  this.maintenanceStaff.Staff=this.staffArray;
  console.log(this.maintenanceStaff);
 
  this.ops = {     // <<<<<< Initialize header with token
    headers: new HttpHeaders({
      
      'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
    })
  };
  this.MaintenanceService.postMaintenance(this.maintenanceStaff).subscribe( //<<<<<<<< Add Maintenance
    (response) =>  {
        console.log(response);
    }
  );
}



//===========================Remove Maintenance=======================
deleteMaintenance(Id:number){
  const options = {
    title: 'Deleting Farm?',
    message: 'By confirming your information will be deleted.',
    cancelText: 'CANCEL',
    confirmText: 'YES, DELETE'
  };
  this.dialogService.open(options);
  this.dialogService.confirmed().subscribe(confirmed => {
    if (confirmed) {
      this.MaintenanceService.deleteMaintenance(Id).subscribe()
      window.location.reload();
       }
     });
}

//=========================Un Hide table===========================
ShowTable(){
  this.showTable = true;
  this.showAdd = false;
  this.show = false;
}

sectionsList:any;
getSection(){
  this.MaintenanceService.getSection().subscribe( 
    (response)=>{
      this.sectionsList=response;
      console.log(this.sectionsList);
    }
  )
}

staffList:any;
getStaff(){
  //const dialogRef=this.dialog.open(StaffSelectionDialogComponent)
  this.MaintenanceService.getStaff().subscribe( 
    (response)=>{
      this.staffList=response;
      console.log(this.staffList);
    },
    error=>{
      alert("No staff exist, please add staff first");
      this.router.navigateByUrl("/users");
    }
  )
}

typeList:any;
getMaintenanceTypes(){
  this.MaintenanceService.getMaintenanceTypes().subscribe( 
    (response)=>{
      this.typeList=response;
      console.log(this.typeList);
    }
  )
}

infraList:any;
getInfrastructure(selectedSectionID:number): Promise<any> {
  var promise = new Promise<any>((res, rej) => {
    this.MaintenanceService.getInfrastructure(selectedSectionID).subscribe( 
      (response)=>{
        this.infraList=response;
        res(response);
      }
    )
  })
  return promise;
}

equipSectionList:any;
getEquipmentSection(selectedSectionID:number){
  this.MaintenanceService.getEquipmentSection(selectedSectionID).subscribe( 
    (response)=>{
      this.equipSectionList=response;
      console.log(this.equipSectionList);
    }
  )
}

equipInfraList:any;
getEquipmentInfrastructure(selectedInfraID:number){
  this.MaintenanceService.getEquipmentInfrastructure(selectedInfraID).subscribe( 
    (response)=>{
      this.equipInfraList=response;
      console.log(this.equipInfraList);
    }
  )
}

importanceList:any;
getImportance(){
  this.MaintenanceService.getImportance().subscribe( //get all skills
    (response)=>{
      this.importanceList=response;
      console.log(this.importanceList);
    }
  )
}

selectionMade:boolean=false;
  justSection(){
    this.selectionMade=true;
    this.EqInfa.checked=false;
    this.EqSec.checked=false;
    this.InfraSec.checked=false;
      this.section=true;
      this.infrastructure=false;
      this.equipment=false;
      this.infrastructureAndEquipment=false;
      
      
      if(this.Section.checked==false){
        this.section=false;
      }
      if(this.SecSelect._onChange){
        this.MaintenanceEdit.Equipment_ID=null;
        this.MaintenanceEdit.Infrastructure_ID=null;
      }
  }

  sectionID:number;
  onInfrastructure(){
    //console.log(this.TaskEdit.Section_ID)
    this.EqInfa.checked=false;
    this.EqSec.checked=false;
    this.Section.checked=false;
    if(this.MaintenanceEdit!=null){
      this.getInfrastructure(this.MaintenanceEdit.Section_ID);
      this.MaintenanceEdit.Equipment_ID=null;
    }
    else{
      this.getInfrastructure(this.sectionID)
      this.MaintenanceAdd.Equipment_ID=null;
      
    }
    
    this.section=false;
    this.infrastructure=true;
    this.equipment=false;
    this.infrastructureAndEquipment=false;

   if(this.InfraSec.checked==false){
     this.infrastructure=false;
   }
  }


//if infrastructure is N/A continue to adding the rest of the task and skip equipment
  justEquipment(){
    this.EqInfa.checked=false;
    this.Section.checked=false;
    this.InfraSec.checked=false;

    this.section=false;
    this.infrastructure=false;
    this.equipment=true;
    this.infrastructureAndEquipment=false;

    if(this.EqSec.checked==false){
      this.equipment=false;
    }

    if(this.MaintenanceEdit!=null){
      this.getEquipmentSection(this.MaintenanceEdit.Section_ID)
      this.MaintenanceEdit.Infrastructure_ID=null;
    }
    else{
      this.getEquipmentSection(this.sectionID)
      this.MaintenanceAdd.Infrastructure_ID=null;
    }
    
  }

  infraID:number;
  InfrastructureAndEquipment(){
    this.EqSec.checked=false;
    this.Section.checked=false;
    this.InfraSec.checked=false;
    this.section=false;
    this.infrastructure=false;
    this.equipment=false;
    this.infrastructureAndEquipment=true;
    if(this.MaintenanceEdit!=null){
      this.getInfrastructure(this.MaintenanceEdit.Section_ID).then(() => {
        this.getEquipmentInfrastructure(this.MaintenanceEdit.Infrastructure_ID);
      })
    }
    else{
      this.getInfrastructure(this.sectionID).then(() => {
        this.getEquipmentInfrastructure(this.infraID);
      }) 
    }

    if(this.EqInfa.checked==false){
      this.infrastructureAndEquipment=false;
    }

  }

  
//=========================== gets the skills that where checked ==============================
checkedOptions: Staff[]

//======================= check which checkbox is selected when editing====================================      
onlySection:boolean=false;
onlyInfra:boolean=false;
onlyEquip:boolean=false;
InfraAndEquip:boolean=false;

  sectionChecked(){
    if(this.MaintenanceEdit.Infrastructure_ID == null && this.MaintenanceEdit.Equipment_ID == null){
      this.Section.toggle();
      //this.onlySection=true;
      this.section=true;
      this.infrastructure=false;
      this.equipment=false;
      this.infrastructureAndEquipment=false; 
    }
  }
   

  infraChecked(){
    if(this.MaintenanceEdit.Infrastructure_ID != null && this.MaintenanceEdit.Equipment_ID == null){
     this.InfraSec.toggle();
      //this.onlyInfra=true;
      
      this.getInfrastructure(this.MaintenanceEdit.Section_ID);
      this.section=false;
      this.infrastructure=true;
      this.equipment=false;
    }
    
  }

  equipChecked(){
    if(this.MaintenanceEdit.Infrastructure_ID == null && this.MaintenanceEdit.Equipment_ID != null){
      this.EqSec.toggle();
      //this.onlyEquip=true;
      this.getEquipmentSection(this.MaintenanceEdit.Section_ID);
      this.section=false;
      this.infrastructure=false;
      this.equipment=true;
      this.infrastructureAndEquipment=false;
    }
    
  }

  equipAndInfraChecked(){
    if(this.MaintenanceEdit.Infrastructure_ID != null && this.MaintenanceEdit.Equipment_ID != null){
      this.EqInfa.toggle();
      //this.InfraAndEquip=true;
      this.section=false;
      this.infrastructure=false;
      this.equipment=false;
      this.infrastructureAndEquipment=true;
      this.getInfrastructure(this.MaintenanceEdit.Section_ID).then(() => {
        this.getEquipmentInfrastructure(this.MaintenanceEdit.Infrastructure_ID);
      })
    }
   
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

StaffEdit : Staff[];
ifChecked(staffID):boolean{
  var isMatched = false;
  this.StaffEdit = this.dataStaff;
  console.log(this.StaffEdit);
  this.StaffEdit.forEach(staff => {
   if(!isMatched) {
    if(staff.Staff_ID === staffID){
      isMatched = true;
    }
    else{
      isMatched = false;
    }
   }
    
  });
  return isMatched;
  }
}
