import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Settings } from '../app.settings.model';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  public settings: Settings;
  ops:any;
  AdminPriv: string;
  currentEdit:number;   

  constructor(private router : Router) { }
  //===============Logout user and route to Login========================
   ngOnInit(): void {
     localStorage.removeItem("currentUser"); //<<< delete JWT token
     localStorage.removeItem("jwtToken");
     this.router.navigateByUrl("");  //<<< ReRoute
   }
}



