import { Component, Input,Inject } from '@angular/core';
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

export interface Element {
  Value:number;
  Text:string;
}

@Component({
  selector: 'app-editskill-dialog',
  templateUrl: './editskill-dialog.component.html',
  styleUrls: ['./editskill-dialog.component.scss']
})
export class EditskillDialogComponent implements OnInit {
  editSkillID: any;
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
    public dialog:MatDialog, private http:HttpClient, public formBuilder:FormBuilder,
    private dialogService: ConfirmDialogService, private DialogService: SuccessDialogService,
    public dialogRef: MatDialogRef<EditskillDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public skill:Skill) 
    {
      this.settings = this.appSettings.settings; 
      //this.dataSource = new MatTableDataSource<Skill>(this.data);
      
      this.form=this.formBuilder.group({
        $id:null,
        Skill_ID:null,
        Skill_Description:['',Validators.compose([Validators.required,Validators.maxLength(20)])]
      }) }
    
        

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
      if(this.skill){
        this.form.setValue(this.skill);
        this.editSkillID=this.skill.Skill_ID;
        console.log(this.editSkillID);
       // localStorage.setItem("currentFarm","6");
        
      } 
      
  }

   //============================== update skill =====================================
   PutSkill(){
  
    this.ops = {     // <<<<<< Initialize header with token
      headers: new HttpHeaders({
        
        'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
      })
    };
    this.skillService.putSkill(this.skill.Skill_ID,this.skill).subscribe( //<<<<<<<< update skill
      (response) =>  {
          console.log(response);
          
      }
    );
    window.location.reload();
  }

  ConfirmUpdateSkill() { 
    const options = {
      title: 'Are you sure you want to update this skill?',
      message: '',
      cancelText: 'CANCEL',
      confirmText: 'YES'
    };
    
    this.dialogService.open(options);
        
    this.dialogService.confirmed().subscribe(confirmed => {
       if (confirmed) {
            this.PutSkill(); // your post/add function 
            
          }
        });
  }
}
