import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from '../Models/Task';
import { Faults } from '../Models/Fault';
import { Maintenance } from '../Models/Maintenance';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(public http:HttpClient) { }

  apiURL:string="https://localhost:44329/api/"

  //============================= Task =============================

  getTasks(): any{
    const ops = {     // <<<<<< Initialize header with token
        headers: new HttpHeaders({
          
          'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
        })
      };
    return this.http.get(this.apiURL+"getTasksOfStaff/" + localStorage.getItem("currentStaff"),ops);
}

getTaskDetails(): any{
  const ops = {     // <<<<<< Initialize header with token
      headers: new HttpHeaders({
        
        'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
      })
    };
  return this.http.get(this.apiURL+"Mobile/taskDetails/" +localStorage.getItem("currentTask"),ops);
}

UpdateTaskStatus(id:number):any{
  const ops = {     // <<<<<< Initialize header with token
    headers: new HttpHeaders({
      
      'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
    })
  };
return this.http.put(this.apiURL+"Mobile/UpdateTaskStatus/" +id.toString(),ops);

}


  //============================= Fault =============================
  getFaults(): any{
    const ops = {     // <<<<<< Initialize header with token
        headers: new HttpHeaders({
          
          'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
        })
      };
    return this.http.get(this.apiURL+"getFaultsOfStaff/" + localStorage.getItem("currentStaff"),ops);
}

getFaultDetails(): any{
  const ops = {     // <<<<<< Initialize header with token
      headers: new HttpHeaders({
        
        'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
      })
    };
  return this.http.get(this.apiURL+"Mobile/faultDetails/" + localStorage.getItem("currentFault"),ops);
}

UpdateFaultStatus(id:number):any{
  const ops = {     // <<<<<< Initialize header with token
    headers: new HttpHeaders({
      
      'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
    })
  };
return this.http.put(this.apiURL+"Mobile/UpdateFaultStatus/" +id.toString(),ops);

}

  //============================= Maintenance =============================

  getMaintanances(): any{
    const ops = {     // <<<<<< Initialize header with token
        headers: new HttpHeaders({
          
          'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
        })
      };
    return this.http.get(this.apiURL+"getMaintOfStaff/" + localStorage.getItem("currentStaff"),ops);
}

getMaintDetails(): any{
  const ops = {     // <<<<<< Initialize header with token
      headers: new HttpHeaders({
        
        'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
      })
    };
  return this.http.get(this.apiURL+"Mobile/maintenanceDetails/" + localStorage.getItem("currentMaint"),ops);
}

UpdateMaintStatus(id:number):any{
  const ops = {     // <<<<<< Initialize header with token
    headers: new HttpHeaders({
      
      'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
    })
  };
return this.http.put(this.apiURL+"Mobile/UpdateMaintStatus/" +id.toString(),ops);

}

}
