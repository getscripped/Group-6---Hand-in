import { Component, OnInit } from '@angular/core';
import { Settings } from '../app.settings.model';
import { AppSettings } from '../app.settings';
import { Router } from '@angular/router';
import { FarmHealthService } from './farmhealthservice';
import { analytics } from 'firebase';




export const multi = [
  {
    name: 'Total score',
    series: [
      {
        name: 'January',
        value: 62
      },
      {
        name: 'February',
        value: 62
      },
      {
        name: 'March',
        value: 62
      },
      {
        name: 'April',
        value: 62
      }
    ]
  },
  {
    name: 'Vehicle score',
    series: [
      {
        name: 'January',
        value: 50
      },
      {
        name: 'February',
        value: 50
      },
      {
        name: 'March',
        value: 50
      },
      {
        name: 'April',
        value: 50
      }
    ]
  },
  {
    name: 'Fault score',
    series: [
      {
        name: 'January',
        value: 50
      },
      {
        name: 'February',
        value: 50
      },
      {
        name: 'March',
        value: 50
      },
      {
        name: 'April',
        value: 50
      }
    ]
  },
  {
    name: 'Maintenance score',
    series: [
      {
        name: 'January',
        value: 50
      },
      {
        name: 'February',
        value: 50
      },
      {
        name: 'March',
        value: 50
      },
      {
        name: 'April',
        value: 50
      }
    ]
  },
  {
    name: 'Vehicle score',
    series: [
      {
        name: 'January',
        value: 50
      },
      {
        name: 'February',
        value: 50
      },
      {
        name: 'March',
        value: 50
      },
      {
        name: 'April',
        value: 100 
      }
    ]
  }
];

@Component({
  selector: 'app-farm-health',
  templateUrl: './farm-health.component.html',
  styleUrls: ['./farm-health.component.scss']
})

export class FarmHealthComponent implements OnInit {
  gaugeType = "arch";
  gaugeValue = 28.3;
  gaugeLabel = "Overall Health";
  gaugeAppendText = "/100";

  customColors = (value) => {
    console.log(value);
    return "#ff0000";
  }
  vehicleLabel = "Vehicle Score";
  taskLabel = "Equipment Score";
  maintLabel = "Maintenance Score";
  vehicleValue = 50;
  VehicleColor: any;
  faultLabel = "Fault Score";
  public single: any[];
  public multi: any[];
  public showXAxis = true;
  public showYAxis = true;
  public gradient = false;
  public showLegend = false;
  public showXAxisLabel = true;
  public xAxisLabel = 'Last 4 months';
  public showYAxisLabel = true;
  public yAxisLabel = 'Scores';
  public colorScheme = {
    domain: ['#7CFC00', '#D22E2E', '#378D3B', '#0096A6', '#F47B00', '#606060']
  }; 
  public autoScale = true;
  public settings: Settings;
  faultScore:number;
  maintenanceScore:number;
  averageScore:number;
  equipmentScore:number;
  vehicleScore: number;
  constructor(public appSettings:AppSettings,private router: Router,private farmHealthService: FarmHealthService) {
    this.settings = this.appSettings.settings; 
    Object.assign(this, {multi})   
  }
  data:any;
  ngOnInit(): void {
    if(localStorage.getItem("jwtToken") == null){
      this.router.navigateByUrl("login");
    }
    
    this.farmHealthService.getHealth().subscribe(
      success=>{
        this.data = success;
        this.vehicleScore = this.data.VehicleScore;
        this.equipmentScore = this.data.EquipmentScore;
        this.maintenanceScore = this.data.MaintnanceScore;
        this.faultScore = this.data.FaultScore;
        this.averageScore = this.data.Average;
      },
      error=>{

      }
    );

  }

  Download(selected: number){
    alert("Download started");
  }

}
