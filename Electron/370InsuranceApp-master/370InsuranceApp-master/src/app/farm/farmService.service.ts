import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import * as jwt_decode from "jwt-decode";
import { Farm} from '../Models/Farm';
import { provinces } from '../Models/Provinces';

@Injectable({
  providedIn: 'root'
})

export class farmService{

  //baseURL= "http://35.178.156.37/api/";
  baseURL = "https://localhost:44329/api/";

  constructor(private http: HttpClient) { }

  getFarm():any{
      const ops = {
          headers: new HttpHeaders({
              'Authorization':'Bearer' + localStorage.getItem("jwtToken")
          })
      };
      return this.http.get<Farm>(this.baseURL + "Farm" ,ops)
  }

  getFarmDetails(id:number):any{
      const ops = {
          headers: new HttpHeaders({
              'Authorization':'Bearer' + localStorage.getItem("jwtToken")
          })
      };
      return this.http.get<Farm>(this.baseURL + "FarmDetails/" + id.toString(),ops)
  }

  getFarmTypes():any{
    const ops = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
       })
    };

    return this.http.get(this.baseURL+ "/FarmTypes" ,ops);

  }

  getProvinces():any{
    const ops = {
       headers: new HttpHeaders({
         'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
      })
    };

     return this.http.get<Farm>(this.baseURL+ "Provinces" ,ops);
  }
}
