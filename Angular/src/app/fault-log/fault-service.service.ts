import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import { Faults, PostFault,FaultStaff, MessageClass} from '../Models/Fault';
import {FaultTypes} from '../Models/FaultType';

@Injectable({
  providedIn: 'root'
})
export class FaultService {

  constructor(private http: HttpClient) { }

  baseURL = "https://localhost:44329/api/";           //http://35.178.156.37/api/ http://localhost:49895/api/

  //===================================Get all=========================
  getFaults(): any{
    const ops = {     // <<<<<< Initialize header with token
        headers: new HttpHeaders({
          
          'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
        })
      };
    return this.http.get<Faults>(this.baseURL + "Faults/" + localStorage.getItem("currentFarm"),ops);
}


//==================================Get all types=====================
getFaultTypes(): any{
    const ops = {     // <<<<<< Initialize header with token
        headers: new HttpHeaders({
          
          'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
        })
      };
    return this.http.get<FaultTypes>(this.baseURL + "Fault/FaultTypes",ops);
}

//==================================Get Staff=====================
getStaff(): any{
  const ops = {     // <<<<<< Initialize header with token
      headers: new HttpHeaders({
        
        'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
      })
    };
  return this.http.get<FaultTypes>(this.baseURL + "Fault/Staff/" + localStorage.getItem("currentFarm"),ops);
}

//=====================================Get specific detail=============
getFaultDetails(Id: number): any{
    const ops = {     // <<<<<< Initialize header with token
        headers: new HttpHeaders({
          
          'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
        })
      };
    return this.http.get<PostFault>(this.baseURL+ "FaultDetails/" + Id.toString(),ops);
}

//==

//======================================Post new Fault==============
postFault(faultStaff: FaultStaff): any{
    const ops = {     // <<<<<< Initialize header with token
        headers: new HttpHeaders({
          
          'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
        })
      };
   return this.http.post(this.baseURL + "Fault/Add",faultStaff,ops);
}


//================================Put details======================
putFault(ID:number,putFault: FaultStaff):any{
  const ops = {     // <<<<<< Initialize header with token
    headers: new HttpHeaders({
      
      'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
    })
  };

return this.http.put(this.baseURL + "Fault/put/"+ ID.toString(),putFault,ops);
}


//==================================Delete========================
deleteFault(id: number){
  const ops = {     // <<<<<< Initialize header with token
    headers: new HttpHeaders({
      
      'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
    })
  };
  return this.http.delete(this.baseURL + "Fault/Delete/" + id.toString(),ops);
}

getSection(): any{
  const ops = {     // <<<<<< Initialize header with token
      headers: new HttpHeaders({
        
        'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
      })
    };
  return this.http.get(this.baseURL+"Fault/Section/" + localStorage.getItem("currentFarm"),ops);
}

getInfrastructure(sectionID:number): any{
  const ops = {     // <<<<<< Initialize header with token
      headers: new HttpHeaders({
        
        'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
      })
    };
  return this.http.get(this.baseURL+"Fault/Infrastructure/" + sectionID.toString(),ops);
}

getEquipmentSection(sectionID:number): any{
  const ops = {     // <<<<<< Initialize header with token
      headers: new HttpHeaders({
        
        'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
      })
    };
  return this.http.get(this.baseURL+"Fault/EquipmentSection/" + sectionID.toString(),ops);
}

getEquipmentInfrastructure(infraID:number): any{
  const ops = {     // <<<<<< Initialize header with token
      headers: new HttpHeaders({
        
        'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
      })
    };
  return this.http.get(this.baseURL+"Fault/EquipmentInfrastructure/" + infraID.toString(),ops);
}

getImportance(): any{
  const ops = {     // <<<<<< Initialize header with token
      headers: new HttpHeaders({
        
        'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
      })
    };
  return this.http.get(this.baseURL+"Fault/Importance",ops);
}

getStaffNumber(staffIDArray : Array<number>): any{
  const ops = {     // <<<<<< Initialize header with token
      headers: new HttpHeaders({
        
        'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
      })
    };
  return this.http.post(this.baseURL+"Fault/getStaffNumber/"+ localStorage.getItem("currentFarm"),staffIDArray,ops);
}
sendSMS(sms: MessageClass): any{
  const ops = {     // <<<<<< Initialize header with token
      headers: new HttpHeaders({
        
        'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
      })
    };
 return this.http.post(this.baseURL + "SendSMS",sms,ops);
}

}
