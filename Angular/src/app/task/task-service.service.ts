import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import {HttpParams} from '@angular/common/http';
import {HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import {throwError} from 'rxjs';
import {catchError,tap} from 'rxjs/operators';
import {Task, TaskSkill,Skill} from '../Models/Task'

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  constructor(private http: HttpClient) { }
  apiURL:string="https://localhost:44329/api/" //44329

  getTask(): any{
    const ops = {     // <<<<<< Initialize header with token
        headers: new HttpHeaders({
          
          'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
        })
      };
    return this.http.get(this.apiURL+"Task/" + localStorage.getItem("currentFarm"),ops);
}

getTaskDetails(id: number): any{
  const ops = {     // <<<<<< Initialize header with token
      headers: new HttpHeaders({
        
        'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
      })
    };
  return this.http.get<TaskSkill>(this.apiURL+"TaskDetails/" + id.toString(),ops);
}

//=================================add staff==================================
postTask(newTask: TaskSkill): any{
  const ops = {     // <<<<<< Initialize header with token
      headers: new HttpHeaders({
        
        'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
      })
    };
 return this.http.post(this.apiURL+"Task/AddTask",newTask,ops);
}

 //================================Put details======================
 putTask(id:number,updateTask: TaskSkill):any{
  const ops = {     // <<<<<< Initialize header with token
    headers: new HttpHeaders({
      
      'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
    })
  };

return this.http.put(this.apiURL + "Task/UpdateTask/"+ id.toString(),updateTask,ops);
}


//==================================Delete========================
deleteTask(id: number){
  const ops = {     // <<<<<< Initialize header with token
    headers: new HttpHeaders({
      
      'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
    })
  };
return this.http.delete(this.apiURL+"Task/DeleteTask/"+id.toString(),ops);

}

getSkill(): any{
  const ops = {     // <<<<<< Initialize header with token
      headers: new HttpHeaders({
        
        'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
      })
    };
  return this.http.get<Skill>(this.apiURL+"Skill/" + localStorage.getItem("currentFarm"),ops);
}

getSection(): any{
  const ops = {     // <<<<<< Initialize header with token
      headers: new HttpHeaders({
        
        'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
      })
    };
  return this.http.get(this.apiURL+"Task/Section/" + localStorage.getItem("currentFarm"),ops);
}

getInfrastructure(sectionID:number): any{
  const ops = {     // <<<<<< Initialize header with token
      headers: new HttpHeaders({
        
        'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
      })
    };
  return this.http.get(this.apiURL+"Task/Infrastructure/" + sectionID.toString(),ops);
}

getEquipmentSection(sectionID:number): any{
  const ops = {     // <<<<<< Initialize header with token
      headers: new HttpHeaders({
        
        'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
      })
    };
  return this.http.get(this.apiURL+"Task/EquipmentSection/" + sectionID.toString(),ops);
}

getEquipmentInfrastructure(infraID:number): any{
  const ops = {     // <<<<<< Initialize header with token
      headers: new HttpHeaders({
        
        'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
      })
    };
  return this.http.get(this.apiURL+"Task/EquipmentInfrastructure/" + infraID.toString(),ops);
}

getImportance(): any{
  const ops = {     // <<<<<< Initialize header with token
      headers: new HttpHeaders({
        
        'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
      })
    };
  return this.http.get(this.apiURL+"Task/Importance",ops);
}

getTaskType(): any{
  const ops = {     // <<<<<< Initialize header with token
      headers: new HttpHeaders({
        
        'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
      })
    };
  return this.http.get(this.apiURL+"Task/TaskType",ops);
}
}
