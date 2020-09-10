import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  farmName:any;
  constructor(private activatedRoute: ActivatedRoute, public router:Router) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    
    if(localStorage.getItem("jwtToken") === null){
      this.router.navigate(['login']);
    }
    else{
      this.farmName=localStorage.getItem("farmName");
    }
  }

}
