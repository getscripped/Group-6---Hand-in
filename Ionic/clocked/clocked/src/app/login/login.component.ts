import { Component, OnInit } from '@angular/core';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators, EmailValidator } from '@angular/forms';
import{CommonModule} from '@angular/common';
import { emailValidator } from '../../theme/app-validators';
import * as CryptoJS from 'crypto-js';
import { HttpClient } from '@angular/common/http';
import { stringToKeyValue } from '@angular/flex-layout/extended/typings/style/style-transforms';
import * as jwt_decode from 'jwt-decode';

export class User{
  User_Email: string;
  User_Password: string;

}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
form:FormGroup;
  constructor(private router:Router, private formBuilder:FormBuilder,private httpserv: HttpClient) { 
    this.form=this.formBuilder.group({
      'email':['',Validators.compose([Validators.required,emailValidator])],
      'password':['',Validators.compose([Validators.required,Validators.minLength(6)])]
    })
  }

  username: string = "";
  password: string = ""; 
  newPass: string;
  UserSubmit =  new User;

  ngOnInit() {}
  // login(){
  //   this.router.navigate(['select']);
  //}

    //=========================================API login POST===================================
    public Login():void {
      this.newPass = this.password;  //<<<< front end encryption(first layer)
      this.UserSubmit.User_Email = this.username;
      console.log(this.UserSubmit.User_Email);
      this.UserSubmit.User_Password = this.newPass;
      console.log(this.UserSubmit.User_Password);  //<<<< set new password to post
       this.httpserv.post<User>("https://localhost:44329/api/User/Login",this.UserSubmit).subscribe(   // <<< Post to LOGIN API endpoint //44329
         (data:any) => {
           localStorage.setItem("jwtToken", data.Token);   // <<< fetch and save JWT token
   
           var decoded = jwt_decode(data.Token);
           console.log(decoded);
           var name = <string>decoded["unique_name"];
           console.log(name);           
           localStorage.setItem("currentUser",name);  //=========================REMOVE ON LIVE
   
   
           localStorage.setItem("loggedIn", "Yes");       // <<< set global logged in attribute
           //=======JWT DECODE FOR USER ID HERE localstorage = currentUser======
           
           this.router.navigateByUrl("/select");
           console.log("logged in");
           
         },
         error =>{ // <<<<<< Login failed
           alert("Login failed");
         }
         
       );
      }
}
