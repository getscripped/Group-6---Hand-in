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
import { SkillServiceService } from '../skill-service.service';
import { DataSource } from '@angular/cdk/table';
import {Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormBuilder,Validators,FormControl } from '@angular/forms';
import { ConfirmDialogService } from '../../shared/Dialogs/ConfirmDialog/confirm-dialog.service';
import { SuccessDialogService } from '../../shared/Dialogs/SuccessDialog/success-dialog.service';
import { isSuccess } from 'angular-in-memory-web-api';

@Component({
  selector: 'app-skill-dialog',
  templateUrl: './skill-dialog.component.html',
  styleUrls: ['./skill-dialog.component.scss']
})
export class SkillDialogComponent {
  public dataSource:any;
  public settings: Settings;
  show: boolean = false;
  showEdit:boolean=false;
  showAdd: boolean = false;
  hideTable:boolean=true;
  form:FormGroup;

  data:Skill[]=[];
  ops:any;
  SkillEdit:PostSkill=new PostSkill; 
  SkillAdd:PostSkill=new PostSkill;
  AdminPriv:string; 
  id:number;

  constructor(public appSettings:AppSettings, private router:Router, private skillService:SkillServiceService,
    public dialog:MatDialog, private http:HttpClient, private formBuilder:FormBuilder,
    private dialogService: ConfirmDialogService, private DialogService: SuccessDialogService,
    public dialogRef: MatDialogRef<SkillDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public skill: Skill) 
    {
      this.settings = this.appSettings.settings; 
      //this.dataSource = new MatTableDataSource<Skill>(this.data);
      this.form=this.formBuilder.group({
        'skill_description':['',Validators.compose([Validators.required,Validators.maxLength(20)])]
      }) }
    
        

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
    if(this.skill){
      this.form.setValue(this.skill);
    } 
    else{
      this.skill = new Skill();
    } 
  }

 
  addNewSkill(){
    this.SkillAdd.Farm_ID = Number(localStorage.getItem("currentFarm"));
    
    this.ops = {     // <<<<<< Initialize header with token
      headers: new HttpHeaders({
        
        'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
      })
    };
    this.skillService.postSkill(this.SkillAdd).subscribe( //<<<<<<<< Add skill
      (response) =>  {
          console.log(response);
          this.dialogRef.close();
          window.location.reload();
      }
    );
  }

   //============================== update skill =====================================
   PutSkill(){
    this.ops = {     // <<<<<< Initialize header with token
      headers: new HttpHeaders({
        
        'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
      })
    };
    this.skillService.putSkill(this.id,this.SkillEdit).subscribe( //<<<<<<<< update skill
      (response) =>  {
          console.log(response);
          this.dialogRef.close();
          window.location.reload();
      }
    );
  }
  //==================================Post to Api to check if Skill exists=============================
  submit1:boolean=false;
  checkExist(){

    this.http.post("http://localhost:52620/api/Skill/SkillExist/" +localStorage.getItem("currentFarm").toString(), this.SkillAdd.Skill_Description).subscribe(  //  <<< Post for Skill exists check
      success => {
        this.submit1 = true; // <<< Button shows if ID not found
      },

      error =>{
        alert("This skill already exists!");
        this.SkillAdd.Skill_Description = null;
        this.submit1 = false;   // <<< Button hides when ID found
      }
      
    );
    }


    ConfirmAddSkill() { 
      const options = {
        title: 'Are you sure you want to add this skill?',
        message: '',
        cancelText: 'CANCEL',
        confirmText: 'YES'
      };
      
      this.dialogService.open(options);
          
      this.dialogService.confirmed().subscribe(confirmed => {
         if (confirmed) {
              this.addNewSkill(); // your post/add function 
              
            }
          });
    }
}
