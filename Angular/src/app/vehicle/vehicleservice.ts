import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import * as jwt_decode from "jwt-decode";
import { Vehicles, postVehicle } from '../Models/Vehicles'
@Injectable({  //=============You need this in your service!!!
    providedIn: 'root'
  })
export class VehicleService{
    constructor(private http: HttpClient) { }
    baseURL = "https://localhost:44329/";
    getVehicle(): any{
        const ops = {     // <<<<<< Initialize header with token
            headers: new HttpHeaders({
              
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            })
          };
        return this.http.get(this.baseURL + "api/Vehicle/"+ localStorage.getItem("currentFarm"),ops);
    }

    getVehicleDetails(id: number): any{
      const ops = {     // <<<<<< Initialize header with token
        headers: new HttpHeaders({
          
          'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
        })
      };
        return this.http.get(this.baseURL + "api/VehicleDetails/" + id.toString(),ops);
    }

    postVehicle(vehicle : postVehicle): any{
      const ops = {     // <<<<<< Initialize header with token
        headers: new HttpHeaders({
          
          'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
        })
      };
      
      return this.http.post(this.baseURL + "api/Vehicle/Add/" + localStorage.getItem("currentFarm"),vehicle,ops); //================IMPLEMENT!!!
    }

    putVehicle(vehicle: postVehicle,id: number): any{
      const ops = {     // <<<<<< Initialize header with token
        headers: new HttpHeaders({
          
          'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
        })
      };

      return this.http.put(this.baseURL + "api/Vehicle/put/" + id,vehicle,ops);

    }

    deleteVehicle(id: number): any{
      const ops = {     // <<<<<< Initialize header with token
        headers: new HttpHeaders({
          
          'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
        })
      };
        return this.http.delete(this.baseURL + "api/Vehicle/Delete/"+ id.toString(),ops);
    }

    getInfras() : any{
      const ops = {     // <<<<<< Initialize header with token
        headers: new HttpHeaders({
          
          'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
        })
      };
      return this.http.get(this.baseURL + "api/Vehicle/getInfras/" + localStorage.getItem("currentFarm"),ops);
        
    }

    getSections(): any{
      const ops = {     // <<<<<< Initialize header with token
        headers: new HttpHeaders({
          
          'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
        })
      };
      return this.http.get(this.baseURL + "api/Vehicle/getSections/" + localStorage.getItem("currentFarm"),ops);
    }

    getBrands(): any{
      const ops = {     // <<<<<< Initialize header with token
        headers: new HttpHeaders({
          
          'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
        })
      };
      return this.http.get(this.baseURL + "api/Vehicle/getBrands",ops);
    }

    getTypes():any{
      const ops = {     // <<<<<< Initialize header with token
        headers: new HttpHeaders({
          
          'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
        })

      };
      return this.http.get(this.baseURL + "api/VehicleType/" + localStorage.getItem("currentFarm"),ops);
    }

    updateKM(km : string,  ID: string): any{
      const ops = {     // <<<<<< Initialize header with token
        headers: new HttpHeaders({
          
          'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
        })

      };
      return this.http.get(this.baseURL + "/api/Vehicle/updateKM/"+km+"/"+ID,ops);
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