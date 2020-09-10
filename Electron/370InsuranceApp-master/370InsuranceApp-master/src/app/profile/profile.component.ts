import { Component, OnInit } from '@angular/core';
import { PostInsurance, Insurance } from '../Models/InsuranceProviders';
import { Settings } from '../app.settings.model';
import { MainService } from '../mainService.service';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { matchingPasswords } from '../theme/utils/app-validators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { SuccessDialogService } from '../Dialogs/SuccessDialog/success-dialog.service';
import { ConfirmDialogService } from '../Dialogs/ConfirmDialog/confirm-dialog.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  InsuranceEdit: PostInsurance = new PostInsurance;
  ops:any;
  AdminPriv: string;
  currentEdit:number;
  public settings: Settings;
  public form:FormGroup;

 
  constructor(private formBuilder: FormBuilder, private mainservice:MainService,private http: HttpClient,public router:Router, private dialogService: ConfirmDialogService, private DialogService: SuccessDialogService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      'name': [null, Validators.compose([Validators.required, Validators.maxLength(50)])],
      'vat': [null, Validators.compose([Validators.required, Validators.maxLength(11)])],
      'registration': [null, Validators.compose([Validators.required, Validators.minLength(13),Validators.maxLength(13)])],
      'number': [null, Validators.compose([Validators.required, Validators.minLength(10),Validators.maxLength(10)])],
      'email': [null, Validators.compose([Validators.required, emailValidator])],
      'password': ['', Validators.required],
      'confirmPassword': ['', Validators.required]
    },{validator: matchingPasswords('password', 'confirmPassword')});
    
    if(localStorage.getItem("currentUser") != null){
      this.getData("currentUser")
      
    }
    else{
    this.router.navigateByUrl("");
  }
}

  putInsuranceProvider(){
    this.ops = {     // <<<<<< Initialize header with token
      headers: new HttpHeaders({
        
        'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
      })
    };
    this.mainservice.putInsuranceProvider(this.InsuranceEdit).subscribe(
      success=>{
        console.log(success);
      },
      error=>{
        console.log(error)
      }
    );
    this.router.navigateByUrl("home");
  }

  deleteInsuranceProvider(id:string){
    id = localStorage.getItem("currentUser");
        this.ops = {     // <<<<<< Initialize header with token
          headers: new HttpHeaders({
            'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
          })
        };
        this.mainservice.deleteInsuranceProvider(id).subscribe();
        this.router.navigateByUrl("");
      }

  data1:any;
  getData(id:any){
    id = localStorage.getItem("currentUser")
    this.mainservice.getInsuranceProviderDetails(id).subscribe(
      (response) => {
        this.data1=response;
        console.log(this.data1);
        this.InsuranceEdit = this.data1;
      },
      error=>{
      }
    );
  }

 submit2: boolean = false;
 SubmitData = new PostInsurance(); //  <<< Submitted from the form
 PostData = new PostInsurance();  
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


export function emailValidator(control: FormControl): {[key: string]: any} {
  var emailRegexp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;    
  if (control.value && !emailRegexp.test(control.value)) {
      return {invalidEmail: true};
  }

}
