import { Component, OnInit } from '@angular/core';
import { SecReportService } from '../section-report/sec-report.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {ReportParameters, Sections} from '../Models/Section';


@Component({
  selector: 'app-section-report',
  templateUrl: './section-report.component.html',
  styleUrls: ['./section-report.component.scss']
})
export class SectionReportComponent implements OnInit {
  form: FormGroup;
  param: ReportParameters = new ReportParameters;
  tableData: any;

  sectionsList:any;
  constructor(private SecReportService : SecReportService, private formbuilder: FormBuilder) {
    this.form = this.formbuilder.group({
      'section':['',Validators.compose([Validators.required])]
    })
   }

  ngOnInit() {
    //localStorage.setItem("currentFarm","5");
    this.getSection();
    
  }

  generateReport(){
    console.log(this.param)
    this.SecReportService.getReportInfo(this.param).subscribe(response => {
      console.log(response);
      
      this.tableData = response['Section'];
      console.log(this.tableData);

  })
}

  
getSection(){
  this.SecReportService.getSection().subscribe( 
    (response)=>{
      this.sectionsList=response;
      console.log(this.sectionsList);
    }
  )
}
}
