import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import * as jwt_decode from "jwt-decode";
import { Equipment, PostEquipment } from '../Models/equipment';
import { types } from '../Models/eqType';


//======================================================================REMEMBER TO ADD YOUR SERVICE TO PROVIDERS IN APP.MODULE.TS======================================================
@Injectable({  //=============You need this in your service!!!
    providedIn: 'root'
  })

export class EquipmentService{

    constructor(private http: HttpClient) { }

    baseURL = "https://localhost:44329/api/";

    //===================================Get all=========================
    getEquipment(): any{

      console.log(localStorage.getItem("jwtToken"));
      const ops = {     // <<<<<< Initialize header with token
        headers: new HttpHeaders({
          
          'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
        })
      };
        return this.http.get<Equipment>(this.baseURL + "Equipment/" + localStorage.getItem("currentFarm"),ops);
    }


    //==================================Get all types=====================
    getEquipmentTypes(): any{
      const ops = {     // <<<<<< Initialize header with token
        headers: new HttpHeaders({
          
          'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
        })
      };
        return this.http.get<types>(this.baseURL + "EquipmentTypes/" + localStorage.getItem("currentFarm"),ops);
    }


    //=====================================Get specific detail=============
    getEquipmentDetails(Id: number): any{
      const ops = {     // <<<<<< Initialize header with token
        headers: new HttpHeaders({
          
          'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
        })
      };
        return this.http.get<PostEquipment>(this.baseURL + "EquipmentDetails/" + Id.toString(),ops);
    }


    //======================================Post new Equipment==============
    postEquipment(equipment: PostEquipment): any{
      const ops = {     // <<<<<< Initialize header with token
        headers: new HttpHeaders({
          
          'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
        })
      };
       return this.http.post(this.baseURL + "Equipment/Add",equipment,ops);
    }


    //================================Put details======================
    putEquipment(equipment: PostEquipment, Id: number){
      const ops = {     // <<<<<< Initialize header with token
        headers: new HttpHeaders({
          
          'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
        })
      };
      equipment.Farm_ID = Number(localStorage.getItem("currentFarm"));
      return this.http.put(this.baseURL + "Equipment/put/" + Id.toString(),equipment,ops);
    }


    //==================================Delete========================
    deleteEquipment(id: number){
      const ops = {     // <<<<<< Initialize header with token
        headers: new HttpHeaders({
          
          'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
        })
      };
      return this.http.delete(this.baseURL + "Equipment/Delete/" + id.toString(),ops);
    }



    getInfras(){
      const ops = {     // <<<<<< Initialize header with token
        headers: new HttpHeaders({
          
          'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
        })
      };
      return this.http.get(this.baseURL + "Equipment/getInfras/" + localStorage.getItem("currentFarm"),ops);
    }

    getSections(): any{
      const ops = {     // <<<<<< Initialize header with token
        headers: new HttpHeaders({
          
          'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
        })
      };
      return this.http.get(this.baseURL + "Vehicle/getSections/" + localStorage.getItem("currentFarm"),ops);
    }

    getSection(): any{
      const ops = {     // <<<<<< Initialize header with token
          headers: new HttpHeaders({
            
            'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
          })
        };
      return this.http.get(this.baseURL+"Task/Section/" + localStorage.getItem("currentFarm"),ops);
    }
   
    getInfrastructure(sectionID:number): any{
      const ops = {     // <<<<<< Initialize header with token
          headers: new HttpHeaders({
            
            'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
          })
        };
      return this.http.get(this.baseURL+"Task/Infrastructure/" + sectionID.toString(),ops);
    }
}