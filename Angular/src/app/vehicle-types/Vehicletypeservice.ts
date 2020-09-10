import { VehicleTypes } from "../Models/veTypes";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import * as jwt_decode from "jwt-decode";

@Injectable({
    providedIn: 'root'
})

export class VehicleTypeService{
    baseURL = "https://localhost:44329/api/";
    constructor(private http: HttpClient) { }
    getVehicleTypes(): any{
        const ops = {     // <<<<<< Initialize header with token
            headers: new HttpHeaders({
              
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            })
    
          };
          return this.http.get(this.baseURL + "VehicleType/" + localStorage.getItem("currentFarm"),ops);
    }

    //=========================================================
    getVehicleTypeDetails(Id: number): any{
        const ops = {     // <<<<<< Initialize header with token
            headers: new HttpHeaders({
              
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            })
          };
        return this.http.get<VehicleTypes>(this.baseURL + "VehicleTypeDetails/" + Id.toString(),ops);
    }

    //=========================================================
    postVehicleType(id: string,newData:string){
      const ops = {     // <<<<<< Initialize header with token
        headers: new HttpHeaders({
          
          'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
        })
      };
      return this.http.post(this.baseURL + "VehicleType/Add/"  + id,newData,ops );
    }

    //=========================================================
    putVehicleType(veType: string, Id: number): any{
        const ops = {     // <<<<<< Initialize header with token
            headers: new HttpHeaders({
              
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            })
          };
          console.log(veType);
       return this.http.put( this.baseURL + "VehicleType/put/" + Id.toString(),veType,ops);
    }
}