import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { emailValidator, matchingPasswords } from '../theme/utils/app-validators';
import { AppSettings } from '../app.settings';
import { Settings } from '../app.settings.model';
import { Register } from '../Models/register';
import { AngularFireStorage, AngularFireUploadTask  } from '@angular/fire/storage';   //   import <<<<
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Insurance, PostInsurance } from '../Models/InsuranceProviders';
import { MainService } from '../mainService.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  public form:FormGroup;
  public settings: Settings;
  ops:any;
  imageSrc: string;
  basePath = '/images';                       //  <<<<<<< Image base path
  downloadableURL = '';                      //  <<<<<<<   URL for firebase image view
  task: AngularFireUploadTask; 
  AdminPriv: string;
  currentEdit:number;            //  <<<<<<< Task for firebase upload

  submit1: boolean = false;
  submit2: boolean = false;
  submit3: boolean=false;


  constructor(public appSettings:AppSettings, public fb: FormBuilder, public router:Router,private fireStorage: AngularFireStorage,private http: HttpClient, private mainservice:MainService){
    this.settings = this.appSettings.settings; 
    this.form = this.fb.group({
      'name': [null, Validators.compose([Validators.required, Validators.minLength(3)])],
      'registration': [Validators, Validators.compose([Validators.required, Validators.maxLength(13)])],
      'vat': [null, Validators.compose([Validators.required, Validators.maxLength(11)])],
      'number': [null, Validators.compose([Validators.required, Validators.maxLength(10)])],
      'email': [null, Validators.compose([Validators.required, emailValidator])],
      'password': ['', Validators.required],
      'confirmPassword': ['', Validators.required]
    },{validator: matchingPasswords('password', 'confirmPassword')});
  }
  


 SubmitData = new PostInsurance(); //  <<< Submitted from the form
 PostData = new PostInsurance();   //  <<< To be Submitted to the API
 InsuranceAdd: PostInsurance = new PostInsurance;
  

file: any; // <<< Photo placeholder to be sent to firebase
progressValue: Observable<number>; //   <<<  Progress bar for image upload

  postInsuranceProvider(){   
    this.ops = {   
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
      })
    };
    this.mainservice.postInsuranceProvider(this.InsuranceAdd).subscribe( 
      (response) =>  {
          console.log(response);
          this.router.navigateByUrl("");
      }
    );
  }
//=================================================================================================

//==================================Post to api to see if email exists=============================
  CheckEmail(){
    this.http.post("http://localhost:44329/api/InsuranceUserExists", this.SubmitData.User_Email).subscribe( //  <<< Post for Email exists check
      success => {
        this.submit2 = true; // <<< Button shows if ID not found
        if (this.SubmitData.User_Email.length == 0){
          this.submit2 = false; // <<< Button hides 
        }
      },

      error =>{
        alert("Email is already in use");
        this.SubmitData.User_Email = null;
        console.log(error);
        this.submit2 = false; // <<< Button hides when ID found
      }
    );
  }

  // checkVAT(){

  //   if(this.SubmitData.IP_VAT_Number == 11){
  //   this.http.post("https://localhost:44329/api/UserExists", this.SubmitData.IP_VAT_Number).subscribe(  //  <<< Post for ID exists check
  //     success => {
  //       this.submit1 = true; // <<< Button shows if ID not found
  //     },

  //     error =>{
  //       alert("Id number is already in use");
  //       this.SubmitData.IP_VAT_Number = null;
  //       this.submit1 = false;   // <<< Button hides when ID found
  //     }
      
  //   );
  //   }else{
  //     this.submit1 = false;   // <<< Button hide
  //   }
  // }

  // checkReg(){

  //   if(this.SubmitData.IP_Reg_Number.length == 13){
  //   this.http.post("https://localhost:44329/api/UserExists", this.SubmitData.IP_Reg_Number).subscribe(  //  <<< Post for ID exists check
  //     success => {
  //       this.submit3 = true; // <<< Button shows if ID not found
  //     },

  //     error =>{
  //       alert("Id number is already in use");
  //       this.SubmitData.IP_Reg_Number = null;
  //       this.submit3 = false;   // <<< Button hides when ID found
  //     }
      
  //   );
  //   }else{
  //     this.submit3 = false;   // <<< Button hide
  //   }
  // }


  //====================================Loading bar for file upload===============================
  ngAfterViewInit(){
    this.settings.loadingSpinner = false; 
  }
  //===========================================REGEX to avoid SQL injection=======================
  omit_special_char(event)
  {   
   var k;  
   k = event.charCode;  //         k = event.keyCode;  (Both can be used)
   return((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || (k >= 48 && k <= 57)); 
  }

  //============================================REGEX only to allow numbers=======================
  omit_special_char_Let(event)
  {   
   var k;  
   k = event.charCode;  //         k = event.keyCode;  (Both can be used)
   return( (k >= 48 && k <= 57)); 
  }
}