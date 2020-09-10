import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders }   from '@angular/common/http';
import { fromEvent }   from 'rxjs';
import { map, filter, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Log, Parameters } from '../Models/auditLog';

@Injectable({
  providedIn: 'root'
})
export class AuditServiceService {

  constructor(private http: HttpClient) { }

  baseURL = "http://localhost:49895/api/";  //http://35.178.156.37/api/ http://localhost:49895/api/

  //===================================Get all=========================
  getReportInfo(param: Parameters): any{
    const ops = {     // <<<<<< Initialize header with token
        headers: new HttpHeaders({
          
          'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
        })
      };
    return this.http.post(this.baseURL + "AuditReport/" + localStorage.getItem("currentFarm"),param,ops).pipe(map(result => result));
}
}
