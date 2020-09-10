import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import * as jwt_decode from "jwt-decode";
import { Farm, PostFarm, PostForeman } from '../Models/Farm';
import { farmTypes } from '../Models/FarmTypes';
import { provinces } from '../Models/Provinces';

@Injectable({
    providedIn: 'root'
})

export class farmService{
    
    constructor(private http: HttpClient) { }

     //baseURL= "http://35.178.156.37/api/";

    baseURL = "https://localhost:44329/api/";


    getFarm():any{
      const ops = {     
        headers: new HttpHeaders({
          'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
         })
      };
        return this.http.get<Farm>(this.baseURL + "Farm/" + localStorage.getItem("currentUser"),ops);
    }

    getFarmDetails(id:number):any{
        const ops = {
            headers: new HttpHeaders({
                'Authorization':'Bearer' + localStorage.getItem("jwtToken")
            })
        };
        return this.http.get<Farm>(this.baseURL + "FarmDetails/" + id.toString(),ops)
    }

    putFarm(farm:PostFarm, id:number){
        const ops = {    
            headers: new HttpHeaders({
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            })
          };
       return this.http.put(this.baseURL + "Farm/put/" + id.toString(),farm,ops);
    }

    postFarm(farm: PostFarm){
        const ops = {    
            headers: new HttpHeaders({
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            })
          };
       return this.http.post(this.baseURL + "Farm/add/"+ localStorage.getItem("currentUser"),farm,ops);
    }

    deleteFarm(id:number):any{
        const ops = {     
            headers: new HttpHeaders({
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            })
          };
          return this.http.delete(this.baseURL + "Farm/delete/" + id.toString(),ops);
    }

    getFarmTypes():any{
      const ops = {     
        headers: new HttpHeaders({
          'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
         })
      };

      return this.http.get(this.baseURL+ "FarmTypes" ,ops);

    }


    getProvinces():any{
      const ops = {     
         headers: new HttpHeaders({
           'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
        })          
      };

       return this.http.get<Farm>(this.baseURL+ "Provinces" ,ops);
    }

    getProvinceDetails(id:number):any{
      const ops = {   
        headers: new HttpHeaders({
          'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
        })
      };
      return this.http.get<Farm>(this.baseURL+ "Farms/ProvinceDetails/" + id.toString() ,ops);

    }

    getForeman():any{
     return this.http.get(this.baseURL + "Farm/Foreman/" + localStorage.getItem("currentFarm"));
    }

    postForeman(EmailAddress:string):any{
     
     return this.http.post(this.baseURL + "Contacts/Foreman/" + localStorage.getItem("currentFarm"),EmailAddress);     
    }

    deleteForeman():any{
      this.http.delete(this.baseURL + "Farm/Foreman/delete/" + localStorage.getItem("currentFarm"));
    }

}