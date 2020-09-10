import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import { Sections, PostSection } from '../Models/Section';
import { SectionTypes } from '../Models/SectionType';

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  constructor(private http: HttpClient) { }

  baseURL = "https://localhost:44329/api/";           //http://35.178.156.37/api/ http://localhost:49895/api/

  //===================================Get all=========================
  getSections(): any{
    const ops = {     // <<<<<< Initialize header with token
        headers: new HttpHeaders({
          
          'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
        })
      };
    return this.http.get<Sections>(this.baseURL + "Section/" + localStorage.getItem("currentFarm"),ops);
}


//==================================Get all types=====================
getSectionTypes(): any{
    const ops = {     // <<<<<< Initialize header with token
        headers: new HttpHeaders({
          
          'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
        })
      };
    return this.http.get<SectionTypes>(this.baseURL + "SectionType/" + localStorage.getItem("currentFarm"),ops)
}


//=====================================Get specific detail=============
getSectionDetails(Id: number): any{
    const ops = {     // <<<<<< Initialize header with token
        headers: new HttpHeaders({
          
          'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
        })
      };
    return this.http.get<PostSection>(this.baseURL+ "SectionDetails/" + Id.toString(),ops);
}


//======================================Post new Section==============
postSection(section: PostSection): any{
    const ops = {     // <<<<<< Initialize header with token
        headers: new HttpHeaders({
          
          'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
        })
      };
      section.Farm_ID = localStorage.getItem("currentFarm");
   return this.http.post(this.baseURL + "Section/Add",section,ops);
}


//================================Put details======================
putSection(section: PostSection, Id: number){
  const ops = {     // <<<<<< Initialize header with token
    headers: new HttpHeaders({
      
      'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
    })
  };
  section.Farm_ID = localStorage.getItem("currentFarm");
  return this.http.put(this.baseURL + "Section/put/" + Id.toString(),section,ops);
}
//==

//==================================Delete========================
deleteSection(Id: number){
  console.debug(Id)
  const ops = {     // <<<<<< Initialize header with token
    headers: new HttpHeaders({
      
      'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
    })
  };
  
  return this.http.delete(this.baseURL + "Section/Delete/" + Id.toString(),ops);
}
}
