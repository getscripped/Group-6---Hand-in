import {  OnInit } from '@angular/core';
import { Settings } from '../app.settings.model';
import { AppSettings } from '../app.settings';
import { MatTableDataSource } from '@angular/material/table';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Skill, PostSkill } from '../Models/Skill'
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { SkillServiceService } from './skill-service.service';
import { DataSource } from '@angular/cdk/table';
import {Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup, FormBuilder,Validators,FormControl } from '@angular/forms';
import { SkillDialogComponent } from './skill-dialog/skill-dialog.component';
import { EditskillDialogComponent } from './editskill-dialog/editskill-dialog.component';
import { ConfirmDialogService } from '../shared/Dialogs/ConfirmDialog/confirm-dialog.service';
import { SuccessDialogService } from '../shared/Dialogs/SuccessDialog/success-dialog.service';
import { UserDialogComponent } from '../pages/users/user-dialog/user-dialog.component';
import { isSuccess } from 'angular-in-memory-web-api';

export interface Element {
  Value:number;
  Text:string;
}


@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {
  editSkillID: any;
  public displayedColumns = ['Skill_Description','Actions'];
  public dataSource:any;
  public settings: Settings;
  show: boolean = false;
  showEdit:boolean=false;
  showAdd: boolean = false;
  hideTable:boolean=true;
  form:FormGroup;
  ngHide:boolean=true;
  ngShow:boolean=false;
 
  @ViewChild(MatPaginator) paginator: MatPaginator;

  data:Skill[]=[];
  ops:any;
  SkillEdit:PostSkill=new PostSkill; 
  SkillAdd:PostSkill=new PostSkill;
  SkillDelete:Skill;
  AdminPriv:string; 
  id:number;
  idNum:any;

//  data: Element[] = [
//     {Skill_ID: 1,Skill_Description: "Mechanic"},
//     {Skill_ID: 2,Skill_Description: "Plumbing"},
//     {Skill_ID: 3,Skill_Description: "Livestock skills"},

//   ];
  


selectedValue: string;

  constructor(public appSettings:AppSettings, private router:Router, private skillService:SkillServiceService,
  public dialog:MatDialog, private http:HttpClient, private formBuilder:FormBuilder) {
    this.settings = this.appSettings.settings; 
    //this.dataSource = new MatTableDataSource<Skill>(this.data);
    this.form=this.formBuilder.group({
      'skill_description':['',Validators.compose([Validators.required,Validators.maxLength(20)])]
    })
  }
  ngOnInit(): void {
    if(localStorage.getItem("jwtToken") === null){
      this.router.navigateByUrl("login");
   }else{
    this.AdminPriv = localStorage.getItem("PrivelageLevel");
   // localStorage.setItem("currentFarm","6"); //<<<<<< Remove when done!!!!!!!!!!!!!!!!!!!!
    this.getData();
  }
}

//=============================== get data ====================================
data1:any  
getData(){
  this.skillService.getSkill().subscribe( //get all skills
    (response)=>{
      this.data1=response;
      console.log(this.data1);
      this.dataSource=new MatTableDataSource<Skill>(this.data1); //populate data
      this.dataSource.paginator=this.paginator;
    }
  )
}
//============================= table filter ======================================
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //============================ paginator initializer =============================
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  
//======================== change between add and edit form =======================
  // changeform(){
  //   if(this.show == false){
  //     this.show =true;
  //     this.showAdd = false;
  //     this.hideTable=false;
  //   }
  // }

//========== gets details to populate edit dialog box that gets called==========
  getSkillDetails(id: number){
    //Implement function to pupulate edit field and populate skill edit\
    this.editSkillID = id;
    console.log(this.editSkillID);
    //this.changeform();
    //localStorage.setItem("CurrentSkill", id.toString())
    this.ops = {     // <<<<<< Initialize header with token
      headers: new HttpHeaders({
        
        'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
      })
    };
    this.skillService.getSkillDetails(id).subscribe( // <<<< get specific skill
      success => {
        this.data1 = success;
        this.SkillEdit = this.data1;
        //this.PutSkill();
        const dialogRef = this.dialog.open(EditskillDialogComponent,{
          data:this.data1
        });
      }
    );
    
  }
  //========================== calls dialog to add a skill===========================
  AddSkillDialog(skill){
    const dialogRef = this.dialog.open(SkillDialogComponent
      
    );
    //this.showAdd=true;
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
//================================= delete skill ======================================
deleteSkill(id:number){
  if(confirm("Are you sure to delete?")) {
    this.ops = {     // <<<<<< Initialize header with token
      headers: new HttpHeaders({
        
        'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
      })
    };
    this.skillService.deleteSkill(id).subscribe( //<<<<<<<< delete skill
      (response) =>  {
          console.log(response);
          
      }
    ); 
}
window.location.reload();
}

download(){
  alert("Download successful")
}

back()
{
  this.show=false;
  this.hideTable=true;
  this.showAdd=false;
}
  //======================== change forms to add skill =============================
  // AddSkill(){
  //   if(this.show == true){
  //        this.show = false;
  //   }
  //   this.SkillAdd=new PostSkill;
  //   this.hideTable=false;
  //   this.showAdd=true;
  // }

//========================== add new skill =========================================
  // addNewSkill(){
  //   this.SkillAdd.Farm_ID = 6;
    
  //   this.ops = {     // <<<<<< Initialize header with token
  //     headers: new HttpHeaders({
        
  //       'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
  //     })
  //   };
  //   this.skillService.postSkill(this.SkillAdd).subscribe( //<<<<<<<< Add skill
  //     (response) =>  {
  //         console.log(response);
  //     }
  //   );
  // }

  // //============================== update skill =====================================
  
  // PutSkill(){
  
  //   this.ops = {     // <<<<<< Initialize header with token
  //     headers: new HttpHeaders({
        
  //       'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
  //     })
  //   };
  //   this.skillService.putSkill(this.editSkillID,this.SkillEdit).subscribe( //<<<<<<<< update skill
  //     (response) =>  {
  //         console.log(response);
  //     }
  //   );
  // }


  
}


