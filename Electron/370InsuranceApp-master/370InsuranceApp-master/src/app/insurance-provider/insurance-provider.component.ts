import { Component, OnInit,ViewChild } from '@angular/core';
import { Settings } from '../app.settings.model';
import { AppSettings } from '../app.settings';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import {Farm} from '../Models/Farm';
import {autoTable} from 'jspdf-autotable'; 
import 'jspdf-autotable';
import  { Chart } from 'chart.js';
declare var jsPDF:any;

export interface Element {
  Farm_ID:string;
  Farm_Type:string;
  Farm_Size:number;
  Farm_Email:string;
  Farm_Address:string;
  Farm_Name:string;
  Province:string;
  Farm_Number:string;
  is_Active: string;
}

@Component({
  selector: 'app-insurance-provider',
  templateUrl: './insurance-provider.component.html',
  styleUrls: ['./insurance-provider.component.scss']
})
export class InsuranceProviderComponent implements OnInit {

  public displayedColumns =['Farm ID','Farm Type','Farm Name','Farm Size','Farm Address','Province','Farm Email','Farm Number','Active','Actions'];
  public dataSource: any;
  public settings: Settings;
  show: boolean = false;
  showAdd: boolean = false;
  showFadd: boolean = false;
  showFedit: boolean = false;
  @ViewChild(MatPaginator,{static:false}) paginator: MatPaginator;

  data: Element[]=[
    {Farm_ID:"1",Farm_Type:"Cattle-Beef",Farm_Name:"Blue Oak",Farm_Address:"ewwefw",Province:"Gauteng",Farm_Size:20000,Farm_Email:"erihbfeh",Farm_Number:"099",is_Active:"Yes"},
    {Farm_ID:"2",Farm_Type:"Field Crops",Farm_Name:"Ridgeback",Farm_Address:"wefwefwe",Province:"KwaZulu Natal",Farm_Size:20000,Farm_Email:"erihbfeh",Farm_Number:"099",is_Active:"Yes"},
    {Farm_ID:"3",Farm_Type:"Fruit",Farm_Name:"Vrede En Rust",Farm_Address:"weqweefc",Province:"Eastern Cape",Farm_Size:20000,Farm_Email:"erihbfeh",Farm_Number:"099",is_Active:"Yes"},
    {Farm_ID:"4",Farm_Type:"Game",Farm_Name:"Mooi Rivier",Farm_Address:"dsfgc",Province:"Free State",Farm_Size:20000,Farm_Email:"erihbfeh",Farm_Number:"099",is_Active:"Yes"},
    {Farm_ID:"5",Farm_Type:"Gardening",Farm_Name:"Tafelburg",Farm_Address:"sfwef",Province:"Western Cape",Farm_Size:20000,Farm_Email:"erihbfeh",Farm_Number:"099",is_Active:"Yes"},
    {Farm_ID:"6",Farm_Type:"Poultry",Farm_Name:"Red Mountain",Farm_Address:"wewer",Province:"North West",Farm_Size:20000,Farm_Email:"erihbfeh",Farm_Number:"099",is_Active:"Yes"}
  ];
  constructor(public appSettings:AppSettings) {
    this.settings = this.appSettings.settings;
    this.dataSource = new MatTableDataSource<Element>(this.data);
  }

  AdminPriv: string;
  showtable: boolean = true;

  ngOnInit(): void {
    this.AdminPriv = localStorage.getItem("PrivelageLevel");
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  showTable(){
    this.showtable = true;
    this.showAdd = false;
    this.show = false;
    this.showFadd = false;
    this.showFedit = false;
  }

  viewFarm(){

  }

  Download(){

  }

}
