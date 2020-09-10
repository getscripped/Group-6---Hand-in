import { Component, OnInit } from '@angular/core';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { StaffService } from '../../Services/staff.service';
import { Farm } from '../../Models/Farms';

@Component({
  selector: 'app-select',
  templateUrl: './select.page.html',
  styleUrls: ['./select.page.scss'],
})
export class SelectPage implements OnInit {

  constructor(public router:Router, public service:StaffService) { }

  FarmSelect:Farm=new Farm;
  ngOnInit() {

    if(localStorage.getItem("jwtToken") === null){
      this.router.navigate(['login']);
    }
    else{
      this.getFarms();
    }
    
  }
  farmID:any;
  farmName:any;
  home(){
    //console.log(this.farmID);
    console.log(this.FarmSelect.Farm_ID);
    localStorage.setItem("currentFarm",this.FarmSelect.Farm_ID.toString())
    this.farmList.forEach(x=>{
      if(x.Farm_ID==this.FarmSelect.Farm_ID){
        this.farmName=x.Farm_Name;
      }
    })
    console.log(this.farmName)
    localStorage.setItem("farmName",this.farmName)
    console.log(localStorage.getItem("farmName"))
    this.router.navigate(['']);
  }

  farmList:Farm[]=[];
  getFarms(){
    this.service.getFarms().subscribe(success=>{
      this.farmList=success;
      console.log(this.farmList);
    })
  }
}
