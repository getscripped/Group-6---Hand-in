import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { User, UserProfile, UserWork, UserContacts, UserSocial, UserSettings, UserSkills } from '../user.model';
import { AngularFireStorage, AngularFireUploadTask  } from '@angular/fire/storage';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StaffSkill, Staff, Skill, PostStaff } from '../../../Models/Staff'
import { StaffServiceService } from '../staff-service.service';
import { ConfirmDialogService } from '../../../shared/Dialogs/ConfirmDialog/confirm-dialog.service';
import { SuccessDialogService } from '../../../shared/Dialogs/SuccessDialog/success-dialog.service';
import { isSuccess } from 'angular-in-memory-web-api';
import { colorSets } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-edit-staff-dialog',
  templateUrl: './edit-staff-dialog.component.html',
  styleUrls: ['./edit-staff-dialog.component.scss']
})
export class EditStaffDialogComponent implements OnInit {

  public settings: Settings;
  imageSrc: string;
  basePath = '/images';                       //  <<<<<<< Image base path
  downloadableURL = '';                      //  <<<<<<<   URL for firebase image view
  task: AngularFireUploadTask;  
  file: any;
  progressValue: Observable<number>;
  tempStaff:Staff;
  tempSkill:any;
  ops:any;
  StaffEdit:Staff=new Staff();
  SkillEdit:Skill[];
  id:any;
  StaffAdd:StaffSkill=new StaffSkill();
  staffSkill:Array<any>=[];

  public form:FormGroup;
  public passwordHide:boolean = true;
  constructor(public dialogRef: MatDialogRef<EditStaffDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public user: StaffSkill,
              public fb: FormBuilder, public appSettings:AppSettings,
              private dialogService: ConfirmDialogService, private DialogService: SuccessDialogService,
              public router:Router,private fireStorage: AngularFireStorage,
              private http: HttpClient, public staffService:StaffServiceService) {
                this.settings = this.appSettings.settings;  

                
    this.form = this.fb.group({
      //username: [null, Validators.compose([Validators.required, Validators.minLength(5)])],
      //password: [null, Validators.compose([Validators.required, Validators.minLength(6)])],       
      //personal: this.fb.group({
        
        Staff_ID:[null, Validators.compose([Validators.required,Validators.maxLength(13),Validators.minLength(13)])],
        Staff_Name: [null, Validators.compose([Validators.required,Validators.maxLength(30)])],
        Staff_Surname: [null, Validators.compose([Validators.required,Validators.maxLength(30)])],  
        Staff_DoB: [null, Validators.compose([Validators.required])],
        Staff_Address:[null, Validators.compose([Validators.required,Validators.maxLength(100)])],
        Staff_Phone_Number: [null, Validators.compose([Validators.required, Validators.minLength(10),Validators.maxLength(10)])],
        Staff_Photo: [null],
        Skill_ID:[null]
      //}),
      // work: this.fb.group({
      //   company: null,
      //   position: null,
      //   salary: null
      // }),
      //contacts: this.fb.group({
        //email: null,
        //phone: null,
        //address: null          
      //}),
      // social: this.fb.group({
      //   facebook: null,
      //   twitter: null,
      //   google: null
      // }),
      // settings: this.fb.group({
      //   isActive: null,
      //   isDeleted: null,
      //   registrationDate: null,
      //   joinedDate: null
      // }),
      // skills: this.fb.group({
      //   plumbing:null,
      //   electricity:null,
      //   hardware:null,
      //   mechanic:null
      // })
    });
  }
editStaffID:number;
editSkillID:number;
  ngOnInit() {
    console.log(this.user);
    this.StaffEdit=this.user.Staff;
    console.log(this.StaffEdit);
    this.staffSkill=this.user.Skill;
    console.log(this.staffSkill)
    this.SkillEdit = this.user["Skills"];
    this.getSkill();
    this.SkillEdit.forEach(x=>{
      this.skillArray.push(x.Skill_ID);
    })
    //console.log(this.SkillEdit);
    console.log(this.skillArray);
    if(this.StaffEdit.Staff_ID){

    }
    this.editStaffID=this.user.Staff.Staff_ID;
    console.log(this.editStaffID);
    if(this.tempSkill)
    if(this.user){
      this.form.setValue(this.user);
    } 
    else{
      this.user = new StaffSkill();
      //this.user.profile = new UserProfile();
      //this.user.work = new UserWork();
      //this.user.contacts = new UserContacts();
      //this.user.social = new UserSocial();
      //this.user.settings = new UserSettings();
      //this.user.skills=new UserSkills();
    } 
  }

   //============================== update skill =====================================
   PutStaff(){
    this.StaffEdit.Farm_ID = 6;
    this.StaffEdit.Is_Active=true;
    this.StaffEdit.Staff_Photo=this.downloadableURL;
    this.StaffAdd.Staff=this.StaffEdit;
    this.StaffAdd.Skill=this.skillArray;

    this.ops = {     // <<<<<< Initialize header with token
      headers: new HttpHeaders({
        
        'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
      })
    };
    this.staffService.putStaff(this.StaffEdit.Staff_ID,this.StaffAdd).subscribe( //<<<<<<<< update skill
      (response) =>  {
          console.log(response);
          this.dialogRef.close();
          window.location.reload();
      }
    );
  }
  
  Skill:Array<any>=[]; 
  skills:any;
  staffSkills:any; 
  getSkill(){
    
  this.staffService.getSkill().subscribe( //get all skills
    (response)=>{
      this.Skill=response;
      console.log(this.Skill);

      // this.SkillEdit=this.user["StaffSkills"];
      // console.log(this.SkillEdit);
      // for(let i=0; i<=10; i++){
      //   //console.log(this.Skill.length)
        
      //   console.log(this.Skill[i]);
      //   for(let x=0; x<=10;x++){
      //     console.log(this.SkillEdit[x])
          // if(this.SkillEdit[x].Skill_ID){
          //   (<HTMLInputElement>document.getElementById(this.Skill[i].Skill_ID)).checked == true;
          // }
       // } 
    } //}
  ) 
}

skillArray:Array<any>= [];
checkedSkills(id,event) {
  const checked=event.target.checked;
        //console.log(skill);
        console.log(event);
        console.log(id);
        if (event.target.checked == true) {
            this.skillArray.push(id);
        }
        else if (event.target.checked == false) {
            //let index = this.skillArray.indexOf(skill);
            //this.skillArray.splice(index,1)
            this.skillArray=this.skillArray.filter(x=>x!=id)
        }

        console.log(this.skillArray)
}

  ifChecked(skillID):boolean{
    var isMatched = false;
    //this.SkillEdit = this.user["StaffSkills"];
    
    this.SkillEdit.forEach(skill => {
     if(!isMatched) {
      if(skill.Skill_ID === skillID){
        isMatched = true
      }
      else{
        isMatched = false
      }
     }
      
    });
    return isMatched
    }
     

  onFileChanged(event) {
    const file = event.target.files[0]
  }
  
  close(): void {
    this.dialogRef.close();
  }
  
 
  processFile(imageInput: any) {
   // Have a look at https://www.freecodecamp.org/news/how-to-make-image-upload-easy-with-angular-1ed14cb2773b/
  }

  onSelectedFile(event){
    
    const reader = new FileReader();
    
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
    
      reader.onload = () => {
   
        this.imageSrc = reader.result as string;
        this.user.Staff.Staff_Photo=this.imageSrc;
     
        this.form.patchValue({
          fileSource: reader.result
        });
   
      };
   
    }
    
       this.file = event.target.files[0];
       //this.file.name = this.StaffAdd;
     
    
  }

  public async onSubmit() {

     
    if (this.file) {
      
      
       const filePath = `${this.basePath}/${this.StaffEdit.Staff_ID}`;  // path at which image will be stored in the firebase storage
       this.task =  this.fireStorage.upload(filePath, this.file);    // upload task
 
       // this.progress = this.snapTask.percentageChanges();
 
       this.progressValue = this.task.percentageChanges();
       (await this.task).ref.getDownloadURL().then(url => 
        {
          this.downloadableURL = url;// <<< url is found here
          this.PutStaff()
        });  
     } else {  
       this.downloadableURL = ''; 
       this.PutStaff();
      }
 
 
       
   }

   ConfirmEditStaff() { 
    const options = {
      title: 'Are you sure you want to update this staff member?',
      message: 'By confirming the staff members details will be updated',
      cancelText: 'CANCEL',
      confirmText: 'YES'
    };
    
    this.dialogService.open(options);
        
    this.dialogService.confirmed().subscribe(confirmed => {
       if (confirmed) {
            this.onSubmit(); // your post/add function 
            
          }
        });
  }


  CancelUpdateStaff() { 
    const options = {
      title: 'Leaving Page?',
      message: 'By leaving the page your information will be lost.',
      cancelText: 'CANCEL',
      confirmText: 'YES'
    };
    
    this.dialogService.open(options);
        
    this.dialogService.confirmed().subscribe(confirmed => {
       if (confirmed) {
            this.close(); // your post/add function 
            
          }
        });
  }
}
