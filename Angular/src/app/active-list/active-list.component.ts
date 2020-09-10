import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-active-list',
  templateUrl: './active-list.component.html',
  styleUrls: ['./active-list.component.scss']
})
export class ActiveListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // downloadReport(){
  //   this..getReportInfo(this.selection).subscribe((res) =>
  //   {
  //     var doc = new jsPDF();


  //     var pageHeight = doc.internal.pageSize.height || doc.internal.pageSize.getHeight();
  //     var pageWidth = doc.internal.pageSize.width || doc.internal.pageSize.getWidth();

  //     let length = res['Suppliers'].length;
  //     let titles = res['Suppliers'].map(a => a.CompanyName);
  //     let Averages = res['Suppliers'].map(b => b.AveragePrice);

  //     let finalY = 160;
  //     var newCanvas = <HTMLCanvasElement>document.querySelector('#canvas');

  //     var newCanvasImage = newCanvas.toDataURL("image/png", 1.0);

  //     doc.setFontSize(28)

  //     doc.text("Product Report", (pageWidth / 2) - 15, 15)
  //     doc.addImage(newCanvasImage, 'PNG', 25,25,160,150);
  //     doc.setFontSize(12);
  //     for (let c = 0; c < length; c++)
  //     {
  //       doc.text(titles[c] + " (Average:  R" + Averages[c] + ")", (pageWidth/2)-25, finalY + 23)
  //       doc.autoTable({startY: finalY + 25, html: '#testing' + c, useCss: true, head:
  //       [[
  //         'Product', 'Price'
  //       ]]
  //     })
  //     finalY = doc.autoTable.previous.finalY
  //     }
  //     console.log("Saved")
  //     doc.save('report.pdf');

  //   }
  //   )
  // }

NewFunc(){
  
}

Cancel(){

}

back(){

}
}
