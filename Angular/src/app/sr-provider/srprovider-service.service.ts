import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import { SRProviders, PostSRProvider } from '../Models/SRProvider';

@Injectable({
  providedIn: 'root'
})
export class SRProviderService {
//==
  constructor(private http: HttpClient) { }

  baseURL = "https://localhost:44329/api/";           // http://localhost:49895/api/   http://35.178.156.37/api/

  //===================================Get all=========================
  getProviders(): any{
    const ops = {     // <<<<<< Initialize header with token
        headers: new HttpHeaders({
          
          'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
        })
      };
    return this.http.get<SRProviders>(this.baseURL + "SRProvider/getAllProviders/" + localStorage.getItem("currentFarm"),ops);
}


//=====================================Get specific detail=============
getProviderDetails(Id: number): any{
    const ops = {     // <<<<<< Initialize header with token
        headers: new HttpHeaders({
          
          'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
        })
      };
    return this.http.get<PostSRProvider>(this.baseURL+ "SRProviderDetails/" + Id.toString(),ops);
}


//======================================Post new Section==============
postProvider(srProvider: PostSRProvider): any{
    const ops = {     // <<<<<< Initialize header with token
        headers: new HttpHeaders({
          
          'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
        })
      };
      srProvider.Farm_ID = Number(localStorage.getItem("currentFarm"));
   return this.http.post(this.baseURL + "SRProvider/Add",srProvider,ops);
}


//================================Put details======================
putProvider(srProvider: PostSRProvider, Id: number){
  const ops = {     // <<<<<< Initialize header with token
    headers: new HttpHeaders({
      
      'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
    })
  };
  return this.http.put(this.baseURL + "SRProvider/put/" + Id.toString(),srProvider,ops);
}


//==================================Delete========================
deleteProvider(id: number){
  const ops = {     // <<<<<< Initialize header with token
    headers: new HttpHeaders({
      
      'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
    })
  };
  return this.http.put(this.baseURL + "SRProvider/Delete/" + id.toString(),ops);
}
}
