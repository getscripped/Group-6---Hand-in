import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import * as jwt_decode from "jwt-decode";
import { RepairLog, PostRepairLog, PostNotification } from '../Models/RepairLogs';

@Injectable({
  providedIn: 'root'
})
export class RepairlogService {
  constructor(private http: HttpClient) { }

  baseURL = "https://localhost:44329/api/";
  //baseURL = "http://35.178.156.37/api/";

  //===================================Get all=========================
  getRepairLogs(): any{
      const ops = {     // <<<<<< Initialize header with token
          headers: new HttpHeaders({
            
            'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
          })
        };
      return this.http.get<RepairLog>(this.baseURL + "Vehicle_Repair/" + localStorage.getItem("currentFarm"),ops);
  }

  //=====================================Get specific detail=============
  getRepairLogDetails(Id: number): any{
      const ops = {     // <<<<<< Initialize header with token
          headers: new HttpHeaders({
            
            'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
          })
        };
      return this.http.get<RepairLog>(this.baseURL+ "Vehicle_RepairDetails/" + Id.toString(),ops);
  }


  //======================================Post new Equipment==============
  postRepairLog(repairLog: PostRepairLog): any{
      const ops = {     // <<<<<< Initialize header with token
          headers: new HttpHeaders({
            
            'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
          })
        };
        console.log(repairLog);
     return this.http.post( this.baseURL + "Vehicle_Repair/Add", repairLog, ops );
  }

  sendNotification(notification: PostNotification): any{
    const ops = {     // <<<<<< Initialize header with token
        headers: new HttpHeaders({
          
          'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
        })
      };
   return this.http.post( this.baseURL + "Vehicle_Repair/SendNotification", notification, ops );
}
  //================================Put details======================
  putRepairLog(repairLog: PostRepairLog, Id: number){
    const ops = {     // <<<<<< Initialize header with token
      headers: new HttpHeaders({
        
        'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
      })
    };
    return this.http.put(this.baseURL + "Vehicle_Repair/put/" + Id.toString(), repairLog, ops);
  }


  //==================================Delete========================
  deleteRepairLog(id: number){
    const ops = {     // <<<<<< Initialize header with token
      headers: new HttpHeaders({
        
        'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
      })
    };
    return this.http.delete(this.baseURL + "Vehicle_Repair/Delete/" + id.toString(),ops);
  }

  getProv(){
    const ops = {     // <<<<<< Initialize header with token
      headers: new HttpHeaders({
        
        'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
      })
    };
    return this.http.get(this.baseURL + "Vehicle_Repair/getProv/" + localStorage.getItem("currentFarm"),ops);
  }

  getVeh(){
    const ops = {     // <<<<<< Initialize header with token
      headers: new HttpHeaders({
        
        'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
      })
    };
    return this.http.get(this.baseURL + "Vehicle_Repair/getVeh/",ops);
  }

  getStat(){
    const ops = {     // <<<<<< Initialize header with token
      headers: new HttpHeaders({
        
        'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
      })
    };
    return this.http.get(this.baseURL + "Vehicle_Repair/getStat/" + localStorage.getItem("currentFarm"),ops);
  }

  postRepairRequest(Provider_ID:number, Vehicle_ID:string):any{
    const ops = { 
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
      })
    };
    return this.http.post(this.baseURL + "Vehicle_Repair/RepairRequest/" + Provider_ID +"/" + Vehicle_ID   ,ops);
  }

  getVehicles(){
    const ops = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
      })
    };
  return this.http.get(this.baseURL + "Vehicles", ops)
  }

}

