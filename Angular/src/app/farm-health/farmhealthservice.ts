import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import * as jwt_decode from "jwt-decode";
@Injectable({  //=============You need this in your service!!!
    providedIn: 'root'
  })
export class FarmHealthService{
    constructor(private httpclient : HttpClient){}

    getHealth():any{
        const ops = {     // <<<<<< Initialize header with token
            headers: new HttpHeaders({
              
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            })
          };

         return this.httpclient.get("https://localhost:44329/api/Health/" + localStorage.getItem("currentFarm"),ops);
    }
}