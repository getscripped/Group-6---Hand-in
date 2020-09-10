import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import * as jwt_decode from "jwt-decode";
import { Infrastructure, PostInfrastructure } from '../Models/Infrastructures';
import { types } from '../Models/infType';

@Injectable({
  providedIn: 'root'
})
export class InfrastructureService {

  constructor(private http: HttpClient) { }

  baseURL = "https://localhost:44329/api/";
  //baseURL = "http://35.178.156.37/api/";

  //===================================Get all=========================
  getInfrastructure(): any{
      const ops = {     // <<<<<< Initialize header with token
          headers: new HttpHeaders({
            
            'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
          })
        };
      return this.http.get<Infrastructure>(this.baseURL + "Infrastructures/" + localStorage.getItem("currentFarm"),ops);
  }


  //==================================Get all types=====================
   getInfrastructureTypes(): any{
       const ops = {     // <<<<<< Initialize header with token
           headers: new HttpHeaders({
            
             'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
          })
        };
       return this.http.get<types>(this.baseURL + "InfrastructureTypes",ops)
   }


  //=====================================Get specific detail=============
  getInfrastructureDetails(Id: number): any{
      const ops = {     // <<<<<< Initialize header with token
          headers: new HttpHeaders({
            
            'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
          })
        };
      return this.http.get<PostInfrastructure>(this.baseURL + "InfrastructureDetails/" + Id.toString(),ops);
  }


  //======================================Post new Equipment==============
  postInfrastructure(infrastructure: PostInfrastructure): any{
      const ops = {     // <<<<<< Initialize header with token
          headers: new HttpHeaders({
            
            'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
          })
        };
        infrastructure.Farm_ID = localStorage.getItem("currentFarm");
     return this.http.post(this.baseURL + "Infrastructures/Add", infrastructure, ops);
  }


  //================================Put details======================
  putInfrastructure(infrastructure: PostInfrastructure, Id: number){
    const ops = {     // <<<<<< Initialize header with token
      headers: new HttpHeaders({
        
        'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
      })
    };
    return this.http.put(this.baseURL + "Infrastructures/put/" + Id.toString(), infrastructure, ops);
  }


  //==================================Delete========================
  deleteinfrastructure(id: number){
    const ops = {     // <<<<<< Initialize header with token
      headers: new HttpHeaders({
        
        'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
      })
    };
    return this.http.delete(this.baseURL + "Infrastructures/Delete/" + id.toString(),ops);
  }

  getSec(){
    const ops = {     // <<<<<< Initialize header with token
      headers: new HttpHeaders({
        
        'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
      })
    };
    return this.http.get(this.baseURL + "Infrastructures/getSec/" + localStorage.getItem("currentFarm"),ops);
  }





}
