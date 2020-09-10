import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { AuditServiceService } from '../audit-log/audit-service.service';
import { mergeMap, groupBy, map, reduce } from 'rxjs/operators';
import 'jspdf-autotable';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Faults, Parameters } from '../Models/faultReport';
import { Params } from '@angular/router';

declare var jsPDF: any;

@Component({
  selector: 'app-faultreport',
  templateUrl: './faultreport.component.html',
  styleUrls: ['./faultreport.component.scss']
})
export class FaultreportComponent implements OnInit {
  form: FormGroup;
  constructor(private logService : AuditServiceService, private formbuilder: FormBuilder) { 
  this.form = this.formbuilder.group({
    'Start': ['',Validators.compose([Validators.required])],
    'End': ['',Validators.compose([Validators.required])],
  })
  }
  ngOnInit(): void {
    
  }

  title = 'Fault report';
  //startDate: string;
  //endDate: string;
  param: Parameters = new Parameters;
  tableData: any;

  getFaultReport(){
    console.log(this.param)
    this.logService.getReportInfo(this.param).subscribe(response => {
      console.log(response);
      
      this.tableData = response['Faults'];
      console.log(this.tableData);

    })
  }
}
