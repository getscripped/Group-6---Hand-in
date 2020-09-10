import {  OnInit, ElementRef } from '@angular/core';
import { Settings } from '../app.settings.model';
import { AppSettings } from '../app.settings';
import { MatTableDataSource } from '@angular/material/table';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Task, TaskSkill, Skill,PostTask,SkillArray } from '../Models/Task'
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { TaskServiceService } from './task-service.service';
import {HttpHeaders} from '@angular/common/http';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatFormField } from '@angular/material/form-field';
import { MatSelect } from '@angular/material/select';
import { ConfirmDialogService } from '../shared/Dialogs/ConfirmDialog/confirm-dialog.service';
import { SuccessDialogService } from '../shared/Dialogs/SuccessDialog/success-dialog.service';
import { isSuccess } from 'angular-in-memory-web-api';

export interface Element {
  Value:string;
  Text:string;
}

declare var jsPDF: any;  

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  public displayedColumns = ['Task_Description','Task_Type_Description','Task_Duration','Section_Name', 'Infrastructure_Name','Equipment_Description','Importance_Description','Actions'];
  public dataSource: any;
  public settings: Settings;
  show: boolean = false;
  showAdd: boolean = false;
  hideTable:boolean=true; 
  //regularDistribution = 9 / 3;
  section:boolean =false;
  infrastructure:boolean =false;
  equipment:boolean=false;
  infrastructureAndEquipment:boolean=false;
  add:boolean=false;
  notEquipment:boolean=false;
  equipmentSelected:boolean=true;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild('InfraSec') InfraSec: MatCheckbox;
  @ViewChild('EqSec') EqSec: MatCheckbox;
  @ViewChild('EqInfa') EqInfa: MatCheckbox;
  @ViewChild('Section') Section: MatCheckbox;
  @ViewChild('SecSelect') SecSelect: MatSelect;
  @ViewChild('test') test: ElementRef = new ElementRef<any>(null);

  
  
time: Element[] =[
  {
    Value:"30",Text:"30"
  },
  {
    Value:"60",Text:"60"
  },{
    Value:"90",Text:"90"
  },{
    Value:"120",Text:"120"
  },{
    Value:"150",Text:"150"
  },{
    Value:"180",Text:"180"
  },{
    Value:"210",Text:"210"
  },{
    Value:"240",Text:"240"
  },{
    Value:"270",Text:"270"
  },{
    Value:"300",Text:"300"
  },{
    Value:"330",Text:"330"
  },{
    Value:"360",Text:"360"
  },
  {
    Value:"390",Text:"390"
  },{
    Value:"420",Text:"420"
  },{
    Value:"450",Text:"450"
  },
  {
    Value:"480",Text:"480"
  },
];

canEdit: boolean = false;
TaskEdit: Task;
SkillEdit:Skill[];
TaskAdd:Task= new Task;
AdminPriv: string;
selectedValue: string;
EquipmentSelect: string;
TypeSelect: String;
SectionSelect: string;
InfrastructureSelect: string;
SkillSelect:string;
ImportanceSelect:string;
form: FormGroup;

newTask:Task=new Task();
taskSkill:TaskSkill=new TaskSkill();
ops:any;
tempTask:Task;
tempSkill:any;
skillList:Skill[]=[];

  constructor(public appSettings:AppSettings, private router:Router, private formBuilder:FormBuilder, 
    private dialogService: ConfirmDialogService, private DialogService: SuccessDialogService,
    public taskService:TaskServiceService) {
    this.settings = this.appSettings.settings; 
    //this.dataSource = new MatTableDataSource<Element>(this.data);
    

    this.form=this.formBuilder.group({
      'section':['',Validators.compose([Validators.required])],
      'task_description':['',Validators.compose([Validators.required, Validators.maxLength(50)])],
      'task_duration':['',Validators.compose([Validators.required,Validators.max(480)])],
      'task_type':['',Validators.compose([Validators.required])],
      'importance':['',Validators.compose([Validators.required])],
      'equipment':['',Validators.compose([Validators.required])],
      'infrastructure':['',Validators.compose([Validators.required])],
      'equipment1':['',Validators.compose([Validators.required])],
      'infrastructure1':['',Validators.compose([Validators.required])]
    })
  }

 
  ngOnInit(): void {
     this.AdminPriv = localStorage.getItem("PrivelageLevel");
     
     if(localStorage.getItem("jwtToken") === null){
      this.router.navigateByUrl("login");

   }else{
    this.AdminPriv = localStorage.getItem("PrivelageLevel");
    //localStorage.setItem("currentFarm","6"); //<<<<<< Remove when done!!!!!!!!!!!!!!!!!!!!
    this.getTasks();
  }

  }

  ngAfterInit() {
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  changeform(){
    if(this.show == false){
      this.show =true;
      this.showAdd = false;
      this.hideTable=false;
    }
  }
  data2:any;
  skillobj:any;
 getTaskDetails(id: number){
    this.canEdit = true;
  //Implement function to pupulate edit field and populate skill edit\
  this.editTaskID = id;
  //this.changeform();
  //localStorage.setItem("CurrentSkill", id.toString())
  this.ops = {     // <<<<<< Initialize header with token
    headers: new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
    })
  };
  this.taskService.getTaskDetails(id).subscribe( // <<<< get specific skill
    success => {
      this.data2 = success;
      
      this.TaskEdit = this.data2['Tasks'][0];
      this.tempSkill = this.data2['TaskSkills'];
      console.log(this.TaskEdit);
      console.log(this.tempSkill);
      
      // this.skillArray=this.data2['Skills'];
      // console.log(this.skillArray);
      this.tempSkill.forEach(x=>{
        this.skillArray.push(x.Skill_ID);
      })
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
  this.getTaskType();
  this.getSkills();
  this.changeform();
  
    
  }
  tableData:Task[]=[];
  data1:any;
  getTasks(){ 
    this.taskService.getTask().subscribe( //get all staff
        (success)=>{
        this.data1=success;
        this.tableData = this.data1['Tasks'];
        this.tempTask = this.data1['Tasks'];
        this.tempSkill = this.data1['TaskSkills'];
            //this.data1=response;
        console.log(this.tempTask);
        console.log(this.tempSkill);

        this.dataSource=new MatTableDataSource<TaskSkill>(this.data1['Tasks']); //populate data
        this.dataSource.paginator=this.paginator;
        
        },
        error=>{
            console.log(error);
        }
    )
    }

sectionsList:any;
getSection(){
  this.taskService.getSection().subscribe( 
    (response)=>{
      this.sectionsList=response;
      console.log(this.sectionsList);
    }
  )
}

infraList:any;
getInfrastructure(selectedSectionID:number): Promise<any> {
  var promise = new Promise<any>((res, rej) => {
    this.taskService.getInfrastructure(selectedSectionID).subscribe( 
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
  this.taskService.getEquipmentSection(selectedSectionID).subscribe( 
    (response)=>{
      this.equipSectionList=response;
      console.log(this.equipSectionList);
    }
  )
}

equipInfraList:any;
getEquipmentInfrastructure(selectedInfraID:number){
  this.taskService.getEquipmentInfrastructure(selectedInfraID).subscribe( 
    (response)=>{
      this.equipInfraList=response;
      console.log(this.equipInfraList);
    }
  )
}

importanceList:any;
getImportance(){
  this.taskService.getImportance().subscribe( //get all skills
    (response)=>{
      this.importanceList=response;
      console.log(this.importanceList);
    }
  )
}

taskTypeList:any;
getTaskType(){
  this.taskService.getTaskType().subscribe( //get all skills
    (response)=>{
      this.taskTypeList=response;
      console.log(this.taskTypeList);
    }
  )
}

  AddTask(){
    if(this.show == true){
         this.show = false;
    }
    this.TaskAdd = new Task;
    this.showAdd = true;
    this.hideTable=false;
    this.getSection();
    this.getImportance();
    this.getTaskType();
    this.getSkills();
    
 
  }

  addNewTask(){
    console.log(this.checkedOptions);
    this.taskSkill.Task=this.TaskAdd;
    this.taskSkill.Skill=this.checkedOptions;
    console.log(this.taskSkill);
    this.ops = {     // <<<<<< Initialize header with token
      headers: new HttpHeaders({
        
        'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
      })
    };
    this.taskService.postTask(this.taskSkill).subscribe( //<<<<<<<< Add staff
      (response) =>  {
        console.log(response);
          
          window.location.reload();
      }
    );
  }

    //============================== update skill =====================================
    editTaskID:number;
    task:TaskSkill=new TaskSkill();
    newSkillsList:Array<Skill>=[];
    PutTask(){
      this.task.Task=this.TaskEdit;
      //this.task.Skill=this.skillArray;

      this.Skill.forEach(x=>{
        this.skillArray.forEach(a=>{
          if(x.Skill_ID==a){
            this.newSkillsList.push(x);
          }
        })
      })
      this.task.Skill=this.newSkillsList;
      this.ops = {     // <<<<<< Initialize header with token
        headers: new HttpHeaders({
          
          'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
        })
      };
      this.taskService.putTask(this.editTaskID,this.task).subscribe( //<<<<<<<< update skill
        (response) =>  {
            console.log(response);
            
        }
      );
      window.location.reload();
    }

  deleteTask(id:number){
    const options = {
      title: 'Delete Task',
      message: 'By deleting this task it will be permanentely deleted. Are you sure?',
      cancelText: 'CANCEL',
      confirmText: 'YES'
    };
    
    this.dialogService.open(options);
        
    this.dialogService.confirmed().subscribe(confirmed => {
       if (confirmed) {
        this.ops = {     // <<<<<< Initialize header with token
          headers: new HttpHeaders({
            
            'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
          })
        };
        this.taskService.deleteTask(id).subscribe( //<<<<<<<< delete task
          (response) =>  {
              console.log(response);
             
          }
        ); 
        window.location.reload();
            
          }
        });
      
  
}

 
  //========================================Download PDF=============
  rows = []; //<<< For JSON parsing
  temp: Task; //<< To add to list

  download(){
    const doc = new jsPDF('portrait','px','a4'); //<<<<<Declare pdf
    console.log(this.tableData);
    

    for(let i = 0;  i< this.tableData.length; i++){   //<<< get all rows in JSOn and convert to object list
        this.temp =  this.tableData[i];
        
        this.rows.push([this.temp.Task_Description,this.temp.Task_Type_Description,this.temp.Task_Duration, this.temp.Section_Name,this.temp.Infrastructure_Name,this.temp.Equipment_Description, this.temp.Importance_Description ]);
        
    }

    
    doc.autoTable({ //<<<<< Add list to table, order is important here
      head: [['Task Description', 'Task Type','Task Duration', 'Section', 'Infrastructure','Equipment','Importance',]],
      body: this.rows
    }); 
    doc.save("TaskList"); //<<<< save doc


  }
  back()
  {
    this.show=false;
    this.hideTable=true;
    this.showAdd=false;

  }

  //=============================== get data ====================================
Skill:any  
getSkills(){
  this.taskService.getSkill().subscribe( //get all skills
    (response)=>{
      this.Skill=response;
      console.log(this.Skill);
      
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
        this.TaskEdit.Equipment_ID=null;
        this.TaskEdit.Infrastructure_ID=null;
      }
  }

  sectionID:number;
  onInfrastructure(){
    //console.log(this.TaskEdit.Section_ID)
    this.EqInfa.checked=false;
    this.EqSec.checked=false;
    this.Section.checked=false;
    if(this.TaskEdit!=null){
      this.getInfrastructure(this.TaskEdit.Section_ID);
      this.TaskEdit.Equipment_ID=null;
    }
    else{
      this.getInfrastructure(this.sectionID)
      this.TaskAdd.Equipment_ID=null;
      
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

    if(this.TaskEdit!=null){
      this.getEquipmentSection(this.TaskEdit.Section_ID)
      this.TaskEdit.Infrastructure_ID=null;
    }
    else{
      this.getEquipmentSection(this.sectionID)
      this.TaskAdd.Infrastructure_ID=null;
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
    if(this.TaskEdit!=null){
      this.getInfrastructure(this.TaskEdit.Section_ID).then(() => {
        this.getEquipmentInfrastructure(this.TaskEdit.Infrastructure_ID);
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
  checkedOptions: Skill[]=[];
  


//======================= check which checkbox is selected when editing====================================      
onlySection:boolean=false;
onlyInfra:boolean=false;
onlyEquip:boolean=false;
InfraAndEquip:boolean=false;

  sectionChecked(){
    if(this.TaskEdit.Infrastructure_ID == null && this.TaskEdit.Equipment_ID == null){
      this.Section.toggle();
      //this.onlySection=true;
      this.section=true;
      this.infrastructure=false;
      this.equipment=false;
      this.infrastructureAndEquipment=false; 
    }
  }
   

  infraChecked(){
    if(this.TaskEdit.Infrastructure_ID != null && this.TaskEdit.Equipment_ID == null){
     this.InfraSec.toggle();
      //this.onlyInfra=true;
      
      this.getInfrastructure(this.TaskEdit.Section_ID);
      this.section=false;
      this.infrastructure=true;
      this.equipment=false;
    }
    
  }

  equipChecked(){
    if(this.TaskEdit.Infrastructure_ID == null && this.TaskEdit.Equipment_ID != null){
      this.EqSec.toggle();
      //this.onlyEquip=true;
      this.getEquipmentSection(this.TaskEdit.Section_ID);
      this.section=false;
      this.infrastructure=false;
      this.equipment=true;
      this.infrastructureAndEquipment=false;
    }
    
  }

  equipAndInfraChecked(){
    if(this.TaskEdit.Infrastructure_ID != null && this.TaskEdit.Equipment_ID != null){
      this.EqInfa.toggle();
      //this.InfraAndEquip=true;
      this.section=false;
      this.infrastructure=false;
      this.equipment=false;
      this.infrastructureAndEquipment=true;
      this.getInfrastructure(this.TaskEdit.Section_ID).then(() => {
        this.getEquipmentInfrastructure(this.TaskEdit.Infrastructure_ID);
      })
    }
   
  }

  skillArray:Array<Skill>= [];
  checkedSkills(id,skill:Skill,event) {
    console.log(skill);
          console.log(event);
          if (event.checked == true) {
            
              this.skillArray.push(id);
              this.checkedOptions.push(skill);
          }
          else if (event.checked == false) {
              let index = this.checkedOptions.indexOf(skill);
              //this.skillArray.splice(index,1);
              this.checkedOptions.splice(index,1);
              this.skillArray=this.skillArray.filter(x=>x!=id)
          }
         console.log(this.checkedOptions);
          console.log(this.skillArray)
  }
skillObj:Skill=new Skill;
  ifChecked(skillID:number):boolean{
    var isMatched = false;
    this.SkillEdit = this.tempSkill;
    //this.skillArray=[this.tempSkill.Skill_ID,this.tempSkill.Skill_Description];
    this.SkillEdit.forEach(skill => {
     if(!isMatched) {
      if(skill.Skill_ID === skillID){
        isMatched = true;
       
      }
      else{
        isMatched = false
      }
     }
      
    });
    return isMatched
    }

    ConfirmAddTask() { 
      const options = {
        title: 'Adding a new Task',
        message: 'Are you sure you want to add this task to your farm.',
        cancelText: 'CANCEL',
        confirmText: 'YES'
      };
      
      this.dialogService.open(options);
          
      this.dialogService.confirmed().subscribe(confirmed => {
         if (confirmed) {
              this.addNewTask(); // your post/add function 
              
            }
          });
    }

    ConfirmUpdateTask() { 
      const options = {
        title: 'Update Task',
        message: 'Are you sure you want to update the task details?',
        cancelText: 'CANCEL',
        confirmText: 'YES'
      };
      
      this.dialogService.open(options);
          
      this.dialogService.confirmed().subscribe(confirmed => {
         if (confirmed) {
              this.PutTask(); // your post/add function 
              
            }
          });
    }

    CancelSubmission() { 
      const options = { //the information you want the dialog to display 
        title: 'Leaving Page?',
        message: 'By leaving the page your information will be lost.',
        cancelText: 'CANCEL',
        confirmText: 'YES, DISCARD CHANGES'
      };
      
      this.dialogService.open(options);
          
      this.dialogService.confirmed().subscribe(confirmed => {
         if (confirmed) {
              this.back(); // your post/add function 
            }
          });
    }

    DownloadSubmission() { 
      const options = { //the information you want the dialog to display 
        title: 'Download Task List',
        message: 'Do you want to download a list of all tasks on your farm?',
        cancelText: 'CANCEL',
        confirmText: 'YES'
      };
      
      this.dialogService.open(options);
          
      this.dialogService.confirmed().subscribe(confirmed => {
         if (confirmed) {
              this.download(); // your post/add function 
            }
          });
    }
}



