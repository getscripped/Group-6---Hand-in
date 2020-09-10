import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import * as jwt_decode from "jwt-decode";
import { SectionTypes, PostSectionType } from '../Models/SectionType';


@Injectable({
  providedIn: 'root'
})
export class SectionTypeService {

  constructor(private http: HttpClient) { }

  baseURL = "https://localhost:44329/api/";           //http://35.178.156.37/api/ http://localhost:49895/api/


putSectionType(sectionType: SectionTypes, Id: number): any{
  const ops = {     // <<<<<< Initialize header with token
      headers: new HttpHeaders({
        
        'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
      })
    };
  return this.http.put(this.baseURL + "SectionType/put/" + Id.toString(),sectionType,ops);
}

getSectionTypeDetails(Id: number): any{
  const ops = {     // <<<<<< Initialize header with token
      headers: new HttpHeaders({
        
        'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
      })
    };
  return this.http.get<SectionTypes>(this.baseURL + "SectionTypeDetails/" + Id.toString(),ops);
}

getSectionTypes(): any{
  const ops = {     // <<<<<< Initialize header with token
      headers: new HttpHeaders({
        
        'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
      })
    };
  return this.http.get<SectionTypes>(this.baseURL + "SectionType/" + localStorage.getItem("currentFarm"),ops)
}

postSectionType(sectionType: PostSectionType): any{
  const ops = {     // <<<<<< Initialize header with token
      headers: new HttpHeaders({
        
        'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
      })
    };
 return this.http.post(this.baseURL + "SectionType/Add",sectionType,ops);
}

deleteSectionType(id: number){
  const ops = {     // <<<<<< Initialize header with token
    headers: new HttpHeaders({
      
      'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
    })
  };
  return this.http.put(this.baseURL + "SectionType/Delete/" + id.toString(),ops);
}

}