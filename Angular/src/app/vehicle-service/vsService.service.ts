import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import * as jwt_decode from "jwt-decode";
import { VehicleService, PostVehicleService, PostNotification } from '../Models/VehicleService';
import { SRProviders } from '../Models/SRProvider';
import { VehicleTypes } from '../Models/veTypes';
import { Vehicles } from '../Models/Vehicles';

@Injectable({
    providedIn: 'root'
})

export class vsService{
    baseURL= "https://localhost:44329/api/";
    //baseURL = "http://35.178.156.37/api/";

    constructor(private http: HttpClient) { }

    getVehicleService():any{
        const ops = {   
            headers: new HttpHeaders({
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            })
          };
        return this.http.get<VehicleService>(this.baseURL + "VehicleService/" + localStorage.getItem("currentFarm"),ops);
    }

    getServiceProviders(){
        const ops = {
            headers: new HttpHeaders({
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            })
          };
        return this.http.get(this.baseURL + "ServiceProviders",ops)
    }

    getVehicleServiceDetails(id:number):any{
        const ops = { 
            headers: new HttpHeaders({
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            })
          };
        return this.http.get<VehicleService>(this.baseURL+ "VehicleServiceDetails/" + id.toString(),ops);
    }

    getVehicles(){
      const ops = {
        headers: new HttpHeaders({
          'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
        })
      };
    return this.http.get(this.baseURL + "Vehicles", ops)
    }

    putVehicleService(VehicleService: PostVehicleService, id:number){
        const ops = { 
            headers: new HttpHeaders({
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            })
          };
          return this.http.put(this.baseURL + "VehicleService/put/" + id.toString(),VehicleService,ops);
    }

    postVehicleService(VehicleService: PostVehicleService ):any{
        const ops = { 
            headers: new HttpHeaders({
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            })
          };

       return this.http.post(this.baseURL + "VehicleService/add/",VehicleService,ops);
    }

    deleteVehicleService(id:string){
        const ops = { 
            headers: new HttpHeaders({
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            })
          };
          return this.http.delete(this.baseURL + "VehicleService/delete/" + id.toString() ,ops);
    }

    postServiceRequest(Provider_ID:number, Vehicle_ID:string):any{
      const ops = { 
        headers: new HttpHeaders({
          'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
        })
      };
      return this.http.post(this.baseURL + "VehicleService/ServiceRequest/" + Provider_ID +"/" + Vehicle_ID   ,ops);
    }

    // getServiceNotification(){
    //   const ops = { 
    //     headers: new HttpHeaders({
    //       'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
    //     })
    //   };
    //   return this.http.get(this.baseURL + "VehicleService/ServiceNotification", ops);
    // }
}