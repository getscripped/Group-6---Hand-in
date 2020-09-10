import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Clocked, PostClocked } from '../Models/Clocked';
import { Staff } from '../Models/Staff';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  constructor(public http:HttpClient) { }

  apiURL:string="https://localhost:44329/api/"

  getStaff(): any{
    const ops = {     // <<<<<< Initialize header with token
        headers: new HttpHeaders({
          
          'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
        })
      };
    return this.http.get(this.apiURL+"Staff/" + localStorage.getItem("currentFarm"),ops);
}

//=================================clock-in==================================
clockIn(clocked:Clocked): any{
  const ops = {     // <<<<<< Initialize header with token
      headers: new HttpHeaders({
        
        'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
      })
    };
 return this.http.post(this.apiURL+"Staff/ClockIn",clocked,ops);
}

 //================================Put details======================
 clockOut(id:number):any{
  const ops = {     // <<<<<< Initialize header with token
    headers: new HttpHeaders({
      
      'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
    })
  };

return this.http.put(this.apiURL + "Staff/ClockOut/"+ id.toString(),ops);
}

getCheckedInStaff(): any{
  const ops = {     // <<<<<< Initialize header with token
      headers: new HttpHeaders({
        
        'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
      })
    };
  return this.http.get(this.apiURL+"Mobile/CheckedIn/" + localStorage.getItem("currentFarm"),ops);
}

getFarms(): any{
  const ops = {     // <<<<<< Initialize header with token
      headers: new HttpHeaders({
        
        'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
      })
    };
  return this.http.get(this.apiURL+"getFarmsMobile/" + localStorage.getItem("currentUser"),ops);
}
}
