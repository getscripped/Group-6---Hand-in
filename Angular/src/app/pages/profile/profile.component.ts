import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';
import { DataSource } from '@angular/cdk/table';
import { MatTableDataSource } from '@angular/material/table';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import {Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormBuilder,Validators,FormControl } from '@angular/forms';
import { formatDate } from '@angular/common';
import { FarmUserServiceService } from './farm-user-service.service';
import { Register, FarmUser } from '../../Models/register';
import { Farm } from '../../Models/Farm';
import { AngularFireStorage, AngularFireUploadTask  } from '@angular/fire/storage';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public personalForm:FormGroup;
 
 
  constructor(private formBuilder: FormBuilder,
    public appSettings:AppSettings, 
    private router:Router,
    private http:HttpClient, 
    public farmUserService:FarmUserServiceService,
    private fireStorage: AngularFireStorage) { }


    public settings: Settings;
  imageSrc: string;
  basePath = '/images';                       //  <<<<<<< Image base path
  downloadableURL = '';                      //  <<<<<<<   URL for firebase image view
  task: AngularFireUploadTask;  
  file: any;
  progressValue: Observable<number>;
  AdminPriv:string;
  ngOnInit() {
    this.personalForm = this.formBuilder.group({
      'firstname': [null, Validators.compose([Validators.required, Validators.maxLength(30)])],
      'lastname': [null, Validators.compose([Validators.required, Validators.maxLength(30)])],
      'id': [null, Validators.compose([Validators.required, Validators.minLength(13),Validators.maxLength(13)])],
      'number': [null, Validators.compose([Validators.required, Validators.minLength(10),Validators.maxLength(10)])],
      //'city': [null, Validators.compose([Validators.required, Validators.maxLength(20)])],
      'address': [null, Validators.compose([Validators.required, Validators.maxLength(100)])],
      //'postalCode': [null, Validators.compose([Validators.required, Validators.minLength(4),Validators.maxLength(4)])],
      'email': [null, Validators.compose([Validators.required, emailValidator])],
      'dateofbirth':[null, Validators.compose([Validators.required])],
      'image':[null]
    }
  )

  if(localStorage.getItem("jwtToken") === null){
    this.router.navigateByUrl("login");
 }else{
  this.AdminPriv = localStorage.getItem("PrivelageLevel");
 // localStorage.setItem("currentUser","1"); //<<<<<< Remove when done!!!!!!!!!!!!!!!!!!!!
  this.getFarmUserDetails();
}
  }

  // public onSubmit(values:Object):void {
  //     if (this.personalForm.valid) {
  //         // this.router.navigate(['pages/dashboard']);
  //     }
  // }
  
  UserEdit:FarmUser=new FarmUser;
  ops:any;

  data2:any;
  getFarmUserDetails(){
    
    //Implement function to pupulate edit field and populate edit\
    this.ops = {     // <<<<<< Initialize header with token
      headers: new HttpHeaders({
        
        'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
      })
    };
    this.farmUserService.getUserDetails().subscribe( // <<<< get specific skill
      success => {
        this.data2 = success;
        console.log(this.data2);
        this.UserEdit=this.data2;
      }
    );
    
  }

  PutFarmUser(){
    
    
    this.UserEdit.Farm_User_Image=this.downloadableURL;
    this.ops = {     // <<<<<< Initialize header with token
      headers: new HttpHeaders({
        
        'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
      })
    };
    this.farmUserService.putFarmUser(this.UserEdit).subscribe( //<<<<<<<< update skill
      (response) =>  {
          console.log(response);
          window.location.reload();
      }
    );
  }

   //=================================================================================================
   onSelectedFile(event){
    
    const reader = new FileReader();
    
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
    
      reader.onload = () => {
   
        this.imageSrc = reader.result as string;
        this.UserEdit.Farm_User_Image=this.imageSrc;
     
        this.personalForm.patchValue({
          fileSource: reader.result
        });
   
      };
   
    }
    
       this.file = event.target.files[0];
       //this.file.name = this.StaffAdd;
     
    
  }

  public async onSubmit() {

     
    if (this.file) {
      
      
       const filePath = `${this.basePath}/${this.UserEdit.Farm_User_ID}`;  // path at which image will be stored in the firebase storage
       this.task =  this.fireStorage.upload(filePath, this.file);    // upload task
 
       // this.progress = this.snapTask.percentageChanges();
 
       this.progressValue = this.task.percentageChanges();
       (await this.task).ref.getDownloadURL().then(url => 
        {
          this.downloadableURL = url;// <<< url is found here
          this.PutFarmUser()
        });  
     } else {  
       this.downloadableURL = ''; 
       this.PutFarmUser();
      }
 
 
       
   }

}

export function emailValidator(control: FormControl): {[key: string]: any} {
  var emailRegexp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;    
  if (control.value && !emailRegexp.test(control.value)) {
      return {invalidEmail: true};
  }

 
}



