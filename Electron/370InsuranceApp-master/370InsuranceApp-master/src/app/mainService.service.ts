import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import * as jwt_decode from "jwt-decode";
import { Insurance, PostInsurance } from './Models/InsuranceProviders';
import { User } from './login/login.component';
import { Farm } from './Models/Farm';

@Injectable({
    providedIn: 'root'
})

export class MainService{
  
  constructor(private http: HttpClient) { }
  baseURL = "https://localhost:44329/api/";

  getInsuranceProviders():any{
    const ops = {    
        headers: new HttpHeaders({
          'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
        })
      };
    return this.http.get<Insurance>(this.baseURL + "InsuranceProviders/" + localStorage.getItem("currentUser"),ops);
}

getInsuranceProviderDetails(id:number):any{
    const ops = {     
        headers: new HttpHeaders({
          'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
        })
      };
    return this.http.get<Insurance>(this.baseURL+ "InsuranceProviderDetails/" + localStorage.getItem("currentUser"),ops);
}

postInsuranceProvider(PostInsurance:PostInsurance):any{
    const ops = {   
        headers: new HttpHeaders({
          'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
        })
      };
   return this.http.post(this.baseURL + "User/InsuranceRegister",PostInsurance,ops);
}

putInsuranceProvider(Insurance:PostInsurance){
    const ops = {     
        headers: new HttpHeaders({
          'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
        })
      };
      return this.http.put(this.baseURL + "InsuranceProviders/put/" + localStorage.getItem("currentUser"),Insurance,ops);
}

deleteInsuranceProvider(id:string){
    const ops = {   
        headers: new HttpHeaders({
          
          'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
        })
      };
      return this.http.delete(this.baseURL + "InsuranceProviders/delete/"  + localStorage.getItem("currentUser"),ops);
}

getUsers(){
      const ops = {
        headers: new HttpHeaders({
          'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
        })
      };
      return this.http.get<User>(this.baseURL+ "User/" ,ops);
    }

getUserDetails(id:number):any{
    const ops = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
             })
    };
      return this.http.get<User>(this.baseURL+ "UserDetails/" + localStorage.getItem("currentUser"),ops);
    }

    getFarm():any{
      const ops = {     
        headers: new HttpHeaders({
          'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
         })
      };
        return this.http.get<Farm>(this.baseURL + "Farm/" + localStorage.getItem("currentUser"),ops);
    }

    getFarmDetails(id:number):any{
        const ops = {
            headers: new HttpHeaders({
                'Authorization':'Bearer' + localStorage.getItem("jwtToken")
            })
        };
        return this.http.get<Farm>(this.baseURL + "FarmDetails/" + id.toString(),ops)
    }
}
