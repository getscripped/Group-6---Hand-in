import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import {HttpParams} from '@angular/common/http';
import {HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import {throwError} from 'rxjs';
import {catchError,tap} from 'rxjs/operators';
import {Skill, PostSkill} from '../Models/Skill'

@Injectable({
  providedIn: 'root'
})
export class SkillServiceService {

  constructor(private http: HttpClient) { }
  apiURL:string="https://localhost:44329/api/"

  getSkill(): any{
    const ops = {     // <<<<<< Initialize header with token
        headers: new HttpHeaders({
          
          'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
        })
      };
    return this.http.get<Skill>(this.apiURL+"Skill/" + localStorage.getItem("currentFarm"),ops);
}

//=========================== get a skill's details============================
getSkillDetails(id: number): any{
  const ops = {     // <<<<<< Initialize header with token
      headers: new HttpHeaders({
        
        'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
      })
    };
  return this.http.get<Skill>(this.apiURL+"SkillDetails/" + id.toString(),ops);
}

//=================================add skill==================================
postSkill(skill: PostSkill): any{
  const ops = {     // <<<<<< Initialize header with token
      headers: new HttpHeaders({
        
        'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
      })
    };
 return this.http.post(this.apiURL+"Skill/AddSkill",skill,ops);
}

 //================================Put details======================
 putSkill(id:number,skill: PostSkill):any{
  const ops = {     // <<<<<< Initialize header with token
    headers: new HttpHeaders({
      
      'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
    })
  };

return this.http.put(this.apiURL + "Skill/UpdateSkill/"+ id.toString(),skill,ops);
}


//==================================Delete========================
deleteSkill(id: number){
  const ops = {     // <<<<<< Initialize header with token
    headers: new HttpHeaders({
      
      'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
    })
  };
return this.http.delete(this.apiURL+"Skill/DeleteSkill/"+id.toString(),ops);

}
}
