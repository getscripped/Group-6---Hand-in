import { Injectable } from '@angular/core';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';
import { User, UserProfile, UserWork, UserContacts, UserSocial, UserSettings } from './user.model';
import { UsersService } from './users.service';
import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { StaffSkill, Staff, Skill, PostStaff } from '../../Models/Staff'
import { DataSource } from '@angular/cdk/table';
import { MatTableDataSource } from '@angular/material/table';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import {Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormBuilder,Validators,FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class StaffServiceService {

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

getStaffDetails(id: number): any{
  const ops = {     // <<<<<< Initialize header with token
      headers: new HttpHeaders({
        
        'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
      })
    };
  return this.http.get<StaffSkill>(this.apiURL+"StaffDetails/" + id.toString(),ops);
}

//=================================add staff==================================
postStaff(skill: StaffSkill): any{
  const ops = {     // <<<<<< Initialize header with token
      headers: new HttpHeaders({
        
        'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
      })
    };
 return this.http.post(this.apiURL+"Staff/AddStaff",skill,ops);
}

 //================================Put details======================
 putStaff(id:number,skill: StaffSkill):any{
  const ops = {     // <<<<<< Initialize header with token
    headers: new HttpHeaders({
      
      'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
    })
  };

return this.http.put(this.apiURL + "Staff/UpdateStaff/"+ id.toString(),skill,ops);
}


//==================================Delete========================
deleteStaff(id: number){
  const ops = {     // <<<<<< Initialize header with token
    headers: new HttpHeaders({
      
      'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
    })
  };
return this.http.put(this.apiURL+"Staff/DeleteStaff/"+id.toString(),ops);

}

getSkill(): any{
  const ops = {     // <<<<<< Initialize header with token
      headers: new HttpHeaders({
        
        'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
      })
    };
  return this.http.get<Skill>(this.apiURL+"Skill/" + localStorage.getItem("currentFarm"),ops);
}

getCheckedInStaff(): any{
  const ops = {     // <<<<<< Initialize header with token
      headers: new HttpHeaders({
        
        'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
      })
    };
  return this.http.get(this.apiURL+"Staff/CheckedIn/" + localStorage.getItem("currentFarm"),ops);
}

}
