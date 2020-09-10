import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import * as jwt_decode from "jwt-decode";
import { ScheduledTask, PostScheduledTasks } from '../Models/ScheduledTasks';

@Injectable({
  providedIn: 'root'
})
export class ScheduledtasksService {

  constructor(private http: HttpClient) { }

  baseURL = "https://localhost:44329/api/";
  //baseURL = "http://35.178.156.37/api/";

  //===================================Get all=========================
  getScheduledTasks(): any{
      const ops = {     // <<<<<< Initialize header with token
          headers: new HttpHeaders({
            
            'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
          })
        };
      return this.http.get<ScheduledTask>(this.baseURL + "ScheduledTask/" + localStorage.getItem("currentFarm") ,ops);
  }

  //=====================================Get specific detail=============
  getScheduledTaskDetails(Id: number): any{
      const ops = {     // <<<<<< Initialize header with token
          headers: new HttpHeaders({
            
            'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
          })
        };
      return this.http.get<ScheduledTask>(this.baseURL+ "ScheduledTaskDetails/" + Id.toString(),ops);
  }


  //======================================Post new Equipment==============
  postScheduledTask(scheduledTask: PostScheduledTasks): any{
      const ops = {     // <<<<<< Initialize header with token
          headers: new HttpHeaders({
            
            'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
          })
        };
     return this.http.post( this.baseURL + "ScheduledTask/Add", scheduledTask, ops );
  }


  //================================Put details======================
  putScheduledTask(scheduledTask: PostScheduledTasks, Id: number){
    const ops = {     // <<<<<< Initialize header with token
      headers: new HttpHeaders({
        
        'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
      })
    };
    return this.http.put(this.baseURL + "ScheduledTask/put/" + Id.toString(), scheduledTask, ops);
  }


  //==================================Delete========================
  deleteScheduledTask(id: number){
    const ops = {     // <<<<<< Initialize header with token
      headers: new HttpHeaders({
        
        'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
      })
    };
    return this.http.delete(this.baseURL + "ScheduledTask/Delete/" + id.toString(),ops);
  }

  getStf(){
    const ops = {     // <<<<<< Initialize header with token
      headers: new HttpHeaders({
        
        'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
      })
    };
    return this.http.get(this.baseURL + "ScheduledTask/getStf/" + localStorage.getItem("selectedTask") + "/" + localStorage.getItem("currentFarm") ,ops);
  }

  getTsk(){
    const ops = {     // <<<<<< Initialize header with token
      headers: new HttpHeaders({
        
        'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
      })
    };
    return this.http.get(this.baseURL + "ScheduledTask/getTsk/" + localStorage.getItem("currentFarm"),ops);
  }

  getDay(){
    const ops = {     // <<<<<< Initialize header with token
      headers: new HttpHeaders({
        
        'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
      })
    };
    return this.http.get(this.baseURL + "ScheduledTask/getDay/" + localStorage.getItem("currentFarm"),ops);
  }

  getStat(){
    const ops = {     // <<<<<< Initialize header with token
      headers: new HttpHeaders({
        
        'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
      })
    };
    return this.http.get(this.baseURL + "ScheduledTask/getStat/" + localStorage.getItem("currentFarm"),ops);
  }

  sendSchedules(){
    const ops = {     // <<<<<< Initialize header with token
        headers: new HttpHeaders({
          
          'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
        })
      };
    return this.http.post<ScheduledTask>(this.baseURL + "SendSMS/" + localStorage.getItem("currentFarm") ,ops);
}

}
