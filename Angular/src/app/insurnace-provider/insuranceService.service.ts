import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import * as jwt_decode from "jwt-decode";
import { Insurance, PostInsurance } from '../Models/InsuranceProviders';

@Injectable({
    providedIn: 'root'
})

export class insuranceService{
    baseURL = "https://localhost:44329/api/";

    constructor(private http: HttpClient) { }

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
        return this.http.get<Insurance>(this.baseURL+ "InsuranceProviderDetails/" + id.toString(),ops);
    }

    postInsuranceProvider(Insurance:PostInsurance):any{
        const ops = {   
            headers: new HttpHeaders({
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            })
          };
       return this.http.post(this.baseURL + "InsuranceProviders/",Insurance,ops);
    }

    putInsuranceProvider(Insurance:PostInsurance, id:number){
        const ops = {     
            headers: new HttpHeaders({
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            })
          };
          return this.http.put(this.baseURL + "InsuranceProviders" + id.toString(),Insurance,ops);
    }

    deleteInsuranceProvider(id:number){
        const ops = {   
            headers: new HttpHeaders({
              
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            })
          };
          return this.http.delete(this.baseURL + "InsuranceProviders/" + id.toString(),ops);
    }
}