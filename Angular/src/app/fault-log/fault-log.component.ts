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
import { Faults, PostFault,FaultStaff,Staff, MessageClass } from '../Models/Fault';
import { FaultService } from './fault-service.service';
import { isSuccess } from 'angular-in-memory-web-api';
import { error } from 'protractor';
import { Infrastructure } from '../Models/Infrastructures';
import{formatDate} from '@angular/common';
import { Equipment } from '../Models/equipment';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatFormField } from '@angular/material/form-field';
import { MatSelect } from '@angular/material/select';
import { StaffSelectionDialogComponent } from './staff-selection-dialog/staff-selection-dialog.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmDialogService } from '../shared/Dialogs/ConfirmDialog/confirm-dialog.service';
import { SuccessDialogService } from '../shared/Dialogs/SuccessDialog/success-dialog.service';

export interface Element {
  Value: number;
  Text: string;
  }

@Component({
  selector: 'app-fault-log',
  templateUrl: './fault-log.component.html',
  styleUrls: ['./fault-log.component.scss']
})
export class FaultLogComponent implements OnInit {

  public displayedColumns = ['Fault_ID','Fault_Description','Fault_Type_Description','Section_Name' ,'Infrastructure_Name','Equipment_Description', 'Fault_Start_Date', 'Fault_End_Date', 'Importance_Description', 'Status_Description','Actions'];
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
//types: string[] = [
  //"Wiring","Structural","Security","Other", "Fence", "Equipment", "Infrastructure" //Moet gehardcode word in Fault Type Table
 //]
 infrastructures: Infrastructure[];
 //equipment: Equipment[];
 //Importance: Importance[];
 staffs: Staff[];
active: Element[] = [{Value: 1, Text: "True"},{Value: 0, Text: "False"}]; // <<<< dropdown data
FaultEdit: Faults;
FaultAdd: Faults=new Faults;
staffNumbers: MessageClass = new MessageClass;
data : Faults[] = [];
AdminPriv: string;


  constructor(public appSettings:AppSettings,public router: Router, private formbuilder: FormBuilder, 
    public dialog: MatDialog, private http : HttpClient,private FaultService: FaultService,private dialogService: ConfirmDialogService, private DialogService: SuccessDialogService) {
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
  dataFault:Faults[]=[];
  
  dataStaff:any;
  getData(){
    //localStorage.setItem("currentFarm","5");
    this.FaultService.getFaults().subscribe( //<<<<<<Get All Sections
      (response) =>{
        this.dataFault = response['Faults'];
        this.dataStaff = response['FaultStaff'];
        this.dataFault.forEach(element => {
          element.Fault_Start_Date=formatDate(element.Fault_Start_Date,'yyyy/MM/dd','en');
          element.Fault_End_Date=formatDate(element.Fault_End_Date,'yyyy/MM/dd','en');
        });
        console.log(this.dataFault);
        this.dataSource = new MatTableDataSource<Faults>(this.dataFault);  //<<<<populate datasource
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
  tempFault:Faults;
tempStaff:any;
  getFaultDetails(id: number){
     this.canEdit = true;
   //Implement function to pupulate edit field and populate skill edit\
   this.editFaultID = id;
   //this.changeform();
   //localStorage.setItem("CurrentSkill", id.toString())
   this.ops = {     // <<<<<< Initialize header with token
     headers: new HttpHeaders({
       'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
     })
   };
   this.FaultService.getFaultDetails(id).subscribe( // <<<< get specific skill
     success => {
       this.data2 = success;
       
       this.FaultEdit = this.data2['Fault'][0];
       this.tempStaff = this.data2['FaultStaff'];
       console.log(this.FaultEdit);
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
   this.getFaultTypes();
   this.getStaff();
   this.changeform();
     
     
   }
//========================Get Values for selected Fault to edit=====
getFaultDetail(Id: number){
  localStorage.setItem("CurrentFault", Id.toString())
  this.ops = {     // <<<<<< Initialize header with token
    headers: new HttpHeaders({
      
      'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
    })
  };
  this.FaultService.getFaultDetails(Id).subscribe( // <<<< get specific equipment
    success => {
      this.FaultEdit = success['Fault'][0];
      this.dataStaff = success['FaultStaff'];
      console.log(this.FaultEdit);
      console.log(this.dataStaff);
      this.currentEdit = Id;
    }
  );
  this.changeform();
}

  //===========================Change forms to add Fault============
  AddFault(){
    if(this.show == true){
         this.show = false;
    }
    this.FaultAdd = new Faults;
    this.showAdd = true;
    this.showTable = false;
    this.getSection();
    this.getImportance();
    this.getFaultTypes();
    this.getStaff();
  }


  //=============================PUT Fault==========================
  editFaultID:number;
  fault:FaultStaff=new FaultStaff();
  PutFault(){
    this.fault.FaultLog=this.FaultEdit;
    this.fault.Staff=this.staffArray;
    console.log(this.editFaultID);
    console.log(this.fault);
    this.ops = {     // <<<<<< Initialize header with token
      headers: new HttpHeaders({
        
        'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
      })
    };
    this.FaultService.putFault(this.editFaultID,this.fault).subscribe( //<<<<<<<< update skill
      (response) =>  {
          console.log(response);
          
      }
    );
    //window.location.reload();
  }

  ConfirmAddFault() {
    const options = {
      title: 'Finshed Editing?',
      message: 'By confirming, your information will be changed.',
      cancelText: 'CANCEL',
      confirmText: 'YES, CONFIRM CHANGES'
    };
    
    this.dialogService.open(options);
        
    this.dialogService.confirmed().subscribe(confirmed => {
       if (confirmed) {
            this.addNewFault(); // for the edit 
            window.location.reload();
          }
        });
  }

  //this function is to cancel the edit 
  CancelAddFault() {
    const options = {
      title: 'Cancel Edit?',
      message: 'By confirming your information will be lost.',
      cancelText: 'CANCEL',
      confirmText: 'YES, DISCARD CHANGES'
    };
    
    this.dialogService.open(options);
        
    this.dialogService.confirmed().subscribe(confirmed => {
       if (confirmed) {
            this.ShowTable(); //to show the table
          }
        });
  }


  ConfirmEditFault() {
    const options = {
      title: 'Finshed Editing?',
      message: 'By confirming, your information will be changed.',
      cancelText: 'CANCEL',
      confirmText: 'YES, CONFIRM CHANGES'
    };
    
    this.dialogService.open(options);
        
    this.dialogService.confirmed().subscribe(confirmed => {
       if (confirmed) {
            this.PutFault(); // for the edit 
            window.location.reload();
          }
        });
  }

  //this function is to cancel the edit 
  CancelEditFault() {
    const options = {
      title: 'Cancel Edit?',
      message: 'By confirming your information will be lost.',
      cancelText: 'CANCEL',
      confirmText: 'YES, DISCARD CHANGES'
    };
    
    this.dialogService.open(options);
        
    this.dialogService.confirmed().subscribe(confirmed => {
       if (confirmed) {
            this.ShowTable(); //to show the table
          }
        });
  }

// ===========================POST Section==========================
faultStaff:FaultStaff=new FaultStaff;
staffNumber: MessageClass = new MessageClass;
staffIDArray: Array<MessageClass> = [];
addNewFault(){
  //this.FaultAdd.Section_ID = 5;
  this.FaultAdd.Status_ID = 1;
  //this.FaultAdd.Fault_ID=0;
  //this.FaultAdd.Fault_Image=null;
  console.log(this.staffArray);

  //this.staffArray.forEach(staff => {
    //this.staffIDArray.push(staff.Staff_ID);
  //})
    //this.FaultService.getStaffNumber(this.staffIDArray).subscribe(
      //(response) => {
        //console.log(response);
      //}
    //)
    //
  //this.FaultAdd.Fault_Start_Date=formatDate(this.FaultAdd.Fault_Start_Date,'yyyy-MM-dd','en');
  //this.FaultAdd.Fault_End_Date=formatDate(this.FaultAdd.Fault_End_Date,'yyyy-MM-dd','en');
  this.faultStaff.FaultLog=this.FaultAdd;
  this.faultStaff.Staff=this.staffArray;
  console.log(this.faultStaff);
 
  this.ops = {     // <<<<<< Initialize header with token
    headers: new HttpHeaders({
      
      'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
    })
  };
  this.FaultService.postFault(this.faultStaff).subscribe( //<<<<<<<< Add Fault
    (response) =>  {
        console.log(response);
    }
  );
  



}



//===========================Remove Fault=======================
deleteFault(Id:number){
  const options = {
    title: 'Deleting Fault?',
    message: 'By confirming your information will be deleted.',
    cancelText: 'CANCEL',
    confirmText: 'YES, DELETE'
  };
  this.dialogService.open(options);
  this.dialogService.confirmed().subscribe(confirmed => {
    if (confirmed) {
      this.FaultService.deleteFault(Id).subscribe();
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
  this.FaultService.getSection().subscribe( 
    (response)=>{
      this.sectionsList=response;
      console.log(this.sectionsList);
    }
  )
}

staffList:any;
getStaff(){
  //const dialogRef=this.dialog.open(StaffSelectionDialogComponent)
  this.FaultService.getStaff().subscribe( 
    (response)=>{
      this.staffList=response;
      console.log(this.staffList);
    }
  )
}

typeList:any;
getFaultTypes(){
  this.FaultService.getFaultTypes().subscribe( 
    (response)=>{
      this.typeList=response;
      console.log(this.typeList);
    }
  )
}

infraList:any;
getInfrastructure(selectedSectionID:number): Promise<any> {
  var promise = new Promise<any>((res, rej) => {
    this.FaultService.getInfrastructure(selectedSectionID).subscribe( 
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
  this.FaultService.getEquipmentSection(selectedSectionID).subscribe( 
    (response)=>{
      this.equipSectionList=response;
      console.log(this.equipSectionList);
    }
  )
}

equipInfraList:any;
getEquipmentInfrastructure(selectedInfraID:number){
  this.FaultService.getEquipmentInfrastructure(selectedInfraID).subscribe( 
    (response)=>{
      this.equipInfraList=response;
      console.log(this.equipInfraList);
    }
  )
}

importanceList:any;
getImportance(){
  this.FaultService.getImportance().subscribe( //get all skills
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
        this.FaultEdit.Equipment_ID=null;
        this.FaultEdit.Infrastructure_ID=null;
      }
  }

  sectionID:number;
  onInfrastructure(){
    //console.log(this.TaskEdit.Section_ID)
    this.EqInfa.checked=false;
    this.EqSec.checked=false;
    this.Section.checked=false;
    if(this.FaultEdit!=null){
      this.getInfrastructure(this.FaultEdit.Section_ID);
      this.FaultEdit.Equipment_ID=null;
    }
    else{
      this.getInfrastructure(this.sectionID)
      this.FaultAdd.Equipment_ID=null;
      
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

    if(this.FaultEdit!=null){
      this.getEquipmentSection(this.FaultEdit.Section_ID)
      this.FaultEdit.Infrastructure_ID=null;
    }
    else{
      this.getEquipmentSection(this.sectionID)
      this.FaultAdd.Infrastructure_ID=null;
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
    if(this.FaultEdit!=null){
      this.getInfrastructure(this.FaultEdit.Section_ID).then(() => {
        this.getEquipmentInfrastructure(this.FaultEdit.Infrastructure_ID);
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
    if(this.FaultEdit.Infrastructure_ID == null && this.FaultEdit.Equipment_ID == null){
      this.Section.toggle();
      //this.onlySection=true;
      this.section=true;
      this.infrastructure=false;
      this.equipment=false;
      this.infrastructureAndEquipment=false; 
    }
  }
   

  infraChecked(){
    if(this.FaultEdit.Infrastructure_ID != null && this.FaultEdit.Equipment_ID == null){
     this.InfraSec.toggle();
      //this.onlyInfra=true;
      
      this.getInfrastructure(this.FaultEdit.Section_ID);
      this.section=false;
      this.infrastructure=true;
      this.equipment=false;
    }
    
  }

  equipChecked(){
    if(this.FaultEdit.Infrastructure_ID == null && this.FaultEdit.Equipment_ID != null){
      this.EqSec.toggle();
      //this.onlyEquip=true;
      this.getEquipmentSection(this.FaultEdit.Section_ID);
      this.section=false;
      this.infrastructure=false;
      this.equipment=true;
      this.infrastructureAndEquipment=false;
    }
    
  }

  equipAndInfraChecked(){
    if(this.FaultEdit.Infrastructure_ID != null && this.FaultEdit.Equipment_ID != null){
      this.EqInfa.toggle();
      //this.InfraAndEquip=true;
      this.section=false;
      this.infrastructure=false;
      this.equipment=false;
      this.infrastructureAndEquipment=true;
      this.getInfrastructure(this.FaultEdit.Section_ID).then(() => {
        this.getEquipmentInfrastructure(this.FaultEdit.Infrastructure_ID);
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
