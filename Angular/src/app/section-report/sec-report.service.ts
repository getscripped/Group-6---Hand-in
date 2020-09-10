import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders }   from '@angular/common/http';
import { fromEvent }   from 'rxjs';
import { map, filter, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Sections, ReportParameters } from '../Models/Section';

@Injectable({
  providedIn: 'root'
})
export class SecReportService {

  constructor(private http: HttpClient) { }

  baseURL = "https://localhost:44329/api/";  //http://35.178.156.37/api/ http://localhost:49895/api/

  getSection(): any{
    const ops = {     // <<<<<< Initialize header with token
        headers: new HttpHeaders({
          
          'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
        })
      };
    return this.http.get(this.baseURL+"Task/Section/" + localStorage.getItem("currentFarm"),ops);
  }

  getReportInfo(param: ReportParameters): any{
    const ops = {     // <<<<<< Initialize header with token
        headers: new HttpHeaders({
          
          'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
        })
      };
    return this.http.post(this.baseURL + "SectionReport/" + localStorage.getItem("currentFarm"),param,ops).pipe(map(result => result));
}


}
