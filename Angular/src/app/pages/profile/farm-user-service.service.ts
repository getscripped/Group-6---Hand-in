import { Injectable } from '@angular/core';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';
import { Register,FarmUser } from '../../Models/register'
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
export class FarmUserServiceService {

  constructor(public http:HttpClient) { }
  apiURL:string="https://localhost:44329/api/"

  getUserDetails(): any{
    const ops = {     // <<<<<< Initialize header with token
        headers: new HttpHeaders({
          
          'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
        })
      };
    return this.http.get<Register>(this.apiURL+"FarmUserDetails/" + localStorage.getItem("currentUser"),ops);
  }

   //================================Put details======================
 putFarmUser(farmUser: FarmUser):any{
  const ops = {     // <<<<<< Initialize header with token
    headers: new HttpHeaders({
      
      'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
    })
  };

return this.http.put(this.apiURL + "FarmUser/UpdateFarmUser/"+ localStorage.getItem("currentUser"),farmUser,ops);
}


//==================================Delete========================
removeFarmUser(){
  const ops = {     // <<<<<< Initialize header with token
    headers: new HttpHeaders({
      
      'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
    })
  };
return this.http.put(this.apiURL+"FarmUser/RemoveFarmUser/"+localStorage.getItem("currentUser"),ops);

}
}
