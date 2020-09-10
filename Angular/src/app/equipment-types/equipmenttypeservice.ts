
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import * as jwt_decode from "jwt-decode";
import { Equipment } from '../Models/equipment';
import { types } from '../Models/eqType';

@Injectable({  //=============You need this in your service!!!
    providedIn: 'root'
  })

export class EquipmentTypeService{
    constructor(private http: HttpClient) { }
    baseURL = "https://localhost:44329/api/";
    //=========================================================
    getEquipmentType(): any{
        const ops = {     // <<<<<< Initialize header with token
            headers: new HttpHeaders({
              
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            })
          };
        return  this.http.get<types>(this.baseURL + "EquipmentTypes/" + localStorage.getItem("currentFarm"),ops);
    }

    //=========================================================
    getEquipmentTypeDetails(Id: number): any{
        const ops = {     // <<<<<< Initialize header with token
            headers: new HttpHeaders({
              
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            })
          };
        return this.http.get<types>(this.baseURL + "EquipmentTypeDetails/" + Id.toString(),ops);
    }

    //=========================================================
    postEquipmentType(id: string,newData:string){
      const ops = {     // <<<<<< Initialize header with token
        headers: new HttpHeaders({
          
          'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
        })
      };
      return this.http.post(this.baseURL + "EquipmentType/Add/"  + id,newData,ops );
    }

    //=========================================================
    putEquipmentType(equipmentT: string, Id: number): any{
        const ops = {     // <<<<<< Initialize header with token
            headers: new HttpHeaders({
              
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            })
          };
          console.log(equipmentT);
       return this.http.put( this.baseURL + "EquipmentType/put/" + Id.toString(),equipmentT,ops);
    }
}