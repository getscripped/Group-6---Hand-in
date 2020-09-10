import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { MreportService } from '../maintenance-report/mreport.service';
import { mergeMap, groupBy, map, reduce } from 'rxjs/operators';
import 'jspdf-autotable';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Maintenance, Parameters } from '../Models/maintenanceReport';
import { Params } from '@angular/router';

declare var jsPDF: any;

@Component({
  selector: 'app-maintenance-report',
  templateUrl: './maintenance-report.component.html',
  styleUrls: ['./maintenance-report.component.scss']
})
export class MaintenanceReportComponent implements OnInit {
  form: FormGroup;
  constructor(private mReportService : MreportService, private formbuilder: FormBuilder) { 
  this.form = this.formbuilder.group({
    'Start': ['',Validators.compose([Validators.required])],
    'End': ['',Validators.compose([Validators.required])],
  })
  }
  ngOnInit(): void {
    
  }

  title = 'Maintenance report';
  //startDate: string;
  //endDate: string;
  param: Parameters = new Parameters;
  tableData: any;

  getMaintenanceReport(){
    console.log(this.param)
    this.mReportService.getReportInfo(this.param).subscribe(response => {
      console.log(response);
      
      this.tableData = response['Maintenances'];
      console.log(this.tableData);

    })
  }
}
