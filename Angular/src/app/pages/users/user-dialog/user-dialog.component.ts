import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { User, UserProfile, UserWork, UserContacts, UserSocial, UserSettings, UserSkills } from '../user.model';
import { AngularFireStorage, AngularFireUploadTask  } from '@angular/fire/storage';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { StaffServiceService } from '../staff-service.service';
import { StaffSkill, Staff, Skill, PostStaff } from '../../../Models/Staff'
import { HttpHeaders } from '@angular/common/http';
import { ConfirmDialogService } from '../../../shared/Dialogs/ConfirmDialog/confirm-dialog.service';
import { SuccessDialogService } from '../../../shared/Dialogs/SuccessDialog/success-dialog.service';
import { isSuccess } from 'angular-in-memory-web-api';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss']
})
export class UserDialogComponent implements OnInit {
  
  public settings: Settings;
  imageSrc: string;
  basePath = '/images';                       //  <<<<<<< Image base path
  downloadableURL = '';                      //  <<<<<<<   URL for firebase image view
  task: AngularFireUploadTask;  
  file: any;
  progressValue: Observable<number>;
  tempStaff:Staff;
  tempSkill:Skill[];
  StaffAdd:StaffSkill=new StaffSkill();
  ops:any;
  NewStaff:Staff=new Staff();

  public form:FormGroup;
  public passwordHide:boolean = true;
  constructor(public dialogRef: MatDialogRef<UserDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public user: StaffSkill,
              public fb: FormBuilder, public appSettings:AppSettings,
              private dialogService: ConfirmDialogService, private DialogService: SuccessDialogService,
              public router:Router,private fireStorage: AngularFireStorage,
              private http: HttpClient,
            public staffService:StaffServiceService) {
                this.settings = this.appSettings.settings;  
    this.form = this.fb.group({
      //username: [null, Validators.compose([Validators.required, Validators.minLength(5)])],
      //password: [null, Validators.compose([Validators.required, Validators.minLength(6)])],       
      //personal: this.fb.group({
        
        'Staff_ID':[null, Validators.compose([Validators.required,Validators.maxLength(13),Validators.minLength(13)])],
        'Staff_Name': [null, Validators.compose([Validators.required,Validators.maxLength(30)])],
        'Staff_Surname': [null, Validators.compose([Validators.required,Validators.maxLength(30)])],  
        'Staff_DoB': [null, Validators.compose([Validators.required])],
        'Staff_Address':[null, Validators.compose([Validators.required,Validators.maxLength(100)])],
        'Staff_Phone_Number': [null, Validators.compose([Validators.required, Validators.minLength(10),Validators.maxLength(10)])],
        'Staff_Photo': null
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

  ngOnInit() {
    this.getSkill();
    this.tempStaff=this.user.Staff;
    this.tempSkill=this.user.Skill[""];
    console.log(this.tempSkill);
    console.log(this.tempStaff); 
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


  addNewStaff(){
   
    this.NewStaff.Farm_ID = Number(localStorage.getItem("currentFarm"));
    this.NewStaff.Is_Active=true;
    this.NewStaff.Staff_Photo=this.downloadableURL;
    this.StaffAdd.Staff=this.NewStaff
    this.StaffAdd.Skill=this.skillArray;
    console.log(this.StaffAdd);
    this.ops = {     // <<<<<< Initialize header with token
      headers: new HttpHeaders({
        
        'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
      })
    };
    this.staffService.postStaff(this.StaffAdd).subscribe( //<<<<<<<< Add staff
      (response) =>  {
        console.log(response);
          this.dialogRef.close();
          window.location.reload();
      }
    );
  }

  //=============================== get data ====================================
Skill:any  
getSkill(){
  this.staffService.getSkill().subscribe( //get all skills
    (response)=>{
      this.Skill=response;
      console.log(this.Skill);
     
    }
  )
}

skillArray:Array<Skill>= [];
checkedSkills(id,skill) {
        console.log(skill);
        if ((<HTMLInputElement>document.getElementById(id)).checked == true) {
            this.skillArray.push(skill);
        }
        else if ((<HTMLInputElement>document.getElementById(id)).checked == false) {
            let index = this.skillArray.indexOf(skill);
            this.skillArray.splice(index,1)
        }

        console.log(this.skillArray)
    }

    omit_special_char(event)
    {   
     var k;  
     k = event.charCode;  //         k = event.keyCode;  (Both can be used)
     return((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || (k >= 48 && k <= 57)); 
    }

  omit_special_char_Let(event)
  {   
   var k;  
   k = event.charCode;  //         k = event.keyCode;  (Both can be used)
   return( (k >= 48 && k <= 57)); 
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

  //=================================================================================================
  onSelectedFile(event){
    
    const reader = new FileReader();
    
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
    
      reader.onload = () => {
   
        this.imageSrc = reader.result as string;
     
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
      
      
       const filePath = `${this.basePath}/${this.NewStaff.Staff_ID}`;  // path at which image will be stored in the firebase storage
       this.task =  this.fireStorage.upload(filePath, this.file);    // upload task
 
       // this.progress = this.snapTask.percentageChanges();
 
       this.progressValue = this.task.percentageChanges();
       (await this.task).ref.getDownloadURL().then(url => 
        {
          this.downloadableURL = url;// <<< url is found here
          this.addNewStaff()
        });  
     } else {  
       this.downloadableURL = ''; 
       this.addNewStaff();
      }
 
 
       
   }

   submit1:boolean=false;
  checkExist(){
    
    this.http.post("http://localhost:52620/api/Staff/StaffExists/" +localStorage.getItem("currentFarm").toString(), this.NewStaff.Staff_ID).subscribe(  //  <<< Post for Skill exists check
      success => {
        this.submit1 = true; // <<< Button shows if ID not found
      },

      error =>{
        alert("This ID number is already in use!");
        this.NewStaff.Staff_ID = null;
        this.submit1 = false;   // <<< Button hides when ID found
      }
      
    );
    }

    ConfirmAddStaff() { 
      const options = {
        title: 'Are you sure you want to add this staff member?',
        message: 'By confirming the staff member details will be added to your farm.',
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

    CancelAddStaff() { 
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
