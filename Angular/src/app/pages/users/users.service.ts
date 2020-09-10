import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import {HttpParams} from '@angular/common/http';
import {HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import {throwError} from 'rxjs';
import {catchError,tap} from 'rxjs/operators';
import { User } from './user.model';
import{ StaffSkill } from '../../Models/Staff';

@Injectable()
export class UsersService {
    public url = "api/users";
    constructor(public http:HttpClient) { }
    apiURL:string="http://localhost:52620/api/"

    getStaff(): any{
        const ops = {     // <<<<<< Initialize header with token
            headers: new HttpHeaders({
              
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            })
          };
        return this.http.get(this.apiURL+"Staff/" + localStorage.getItem("currentFarm"),ops);
    }
    
    
    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.url);
    }

    addUser(user:User){	    
        return this.http.post(this.url, user);
    }

    updateUser(user:User){
        return this.http.put(this.url, user);
    }

    deleteUser(id: number) {
        return this.http.delete(this.url + "/" + id);
    } 
} 