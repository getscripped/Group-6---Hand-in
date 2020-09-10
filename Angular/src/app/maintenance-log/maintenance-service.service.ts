import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import { Maintenance, PostMaintenance,MaintenanceStaff} from '../Models/Maintenance';
import {MaintenanceTypes} from '../Models/MaintenanceType';

@Injectable({
  providedIn: 'root'
})
export class MaintenanceService {

  constructor(private http: HttpClient) { }

  baseURL = "https://localhost:44329/api/";           //http://35.178.156.37/api/ http://localhost:49895/api/

  //===================================Get all=========================
  getMaintenance(): any{
    const ops = {     // <<<<<< Initialize header with token
        headers: new HttpHeaders({
          
          'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
        })
      };
    return this.http.get<Maintenance>(this.baseURL + "Maintenances/" + localStorage.getItem("currentFarm"),ops);
}


//==================================Get all types=====================
getMaintenanceTypes(): any{
    const ops = {     // <<<<<< Initialize header with token
        headers: new HttpHeaders({
          
          'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
        })
      };
    return this.http.get<MaintenanceTypes>(this.baseURL + "Maintenance/MaintenanceTypes",ops);
}

//==================================Get Staff=====================
getStaff(): any{
  const ops = {     // <<<<<< Initialize header with token
      headers: new HttpHeaders({
        
        'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
      })
    };
  return this.http.get<MaintenanceTypes>(this.baseURL + "Maintenance/Staff/" + localStorage.getItem("currentFarm"),ops);
}

//=====================================Get specific detail=============
getMaintenanceDetails(Id: number): any{
    const ops = {     // <<<<<< Initialize header with token
        headers: new HttpHeaders({
          
          'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
        })
      };
    return this.http.get<PostMaintenance>(this.baseURL+ "MaintenanceDetails/" + Id.toString(),ops);
}

//==

//======================================Post new Maintenance==============
postMaintenance(maintenanceStaff: MaintenanceStaff): any{
    const ops = {     // <<<<<< Initialize header with token
        headers: new HttpHeaders({
          
          'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
        })
      };
   return this.http.post(this.baseURL + "Maintenance/Add",maintenanceStaff,ops);
}


//================================Put details======================
putMaintenance(ID:number,putMaintenance: MaintenanceStaff):any{
  const ops = {     // <<<<<< Initialize header with token
    headers: new HttpHeaders({
      
      'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
    })
  };

return this.http.put(this.baseURL + "Maintenance/put/"+ ID.toString(),putMaintenance,ops);
}


//==================================Delete========================
deleteMaintenance(id: number){
  const ops = {     // <<<<<< Initialize header with token
    headers: new HttpHeaders({
      
      'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
    })
  };
  return this.http.delete(this.baseURL + "Maintenance/Delete/"+ localStorage.getItem("currentFarm") + id.toString(),ops);
}

getSection(): any{
  const ops = {     // <<<<<< Initialize header with token
      headers: new HttpHeaders({
        
        'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
      })
    };
  return this.http.get(this.baseURL+"Maintenance/Section/" + localStorage.getItem("currentFarm"),ops);
}

getInfrastructure(sectionID:number): any{
  const ops = {     // <<<<<< Initialize header with token
      headers: new HttpHeaders({
        
        'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
      })
    };
  return this.http.get(this.baseURL+"Maintenance/Infrastructure/" + sectionID.toString(),ops);
}

getEquipmentSection(sectionID:number): any{
  const ops = {     // <<<<<< Initialize header with token
      headers: new HttpHeaders({
        
        'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
      })
    };
  return this.http.get(this.baseURL+"Maintenance/EquipmentSection/" + sectionID.toString(),ops);
}

getEquipmentInfrastructure(infraID:number): any{
  const ops = {     // <<<<<< Initialize header with token
      headers: new HttpHeaders({
        
        'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
      })
    };
  return this.http.get(this.baseURL+"Maintenance/EquipmentInfrastructure/" + infraID.toString(),ops);
}

getImportance(): any{
  const ops = {     // <<<<<< Initialize header with token
      headers: new HttpHeaders({
        
        'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
      })
    };
  return this.http.get(this.baseURL+"Maintenance/Importance",ops);
}

}
