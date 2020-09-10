import { Component, OnInit, ViewChild, HostListener, ViewChildren, QueryList } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';
import { AppSettings } from '../app.settings';
import { Settings } from '../app.settings.model';
import { MenuService } from '../theme/components/menu/menu.service';
import { HttpClient } from '@angular/common/http';
import { analytics } from 'firebase';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
  providers: [ MenuService ]
})
export class PagesComponent implements OnInit { 
  @ViewChild('sidenav') sidenav:any;
  @ViewChild('backToTop') backToTop:any;  
  @ViewChildren(PerfectScrollbarDirective) pss: QueryList<PerfectScrollbarDirective>;
  public settings:Settings;
  public menus = ['vertical', 'horizontal'];
  public menuOption:string;
  public menuTypes = ['default', 'compact', 'mini'];
  public menuTypeOption:string;
  public lastScrollTop:number = 0;
  public showBackToTop:boolean = false;
  public toggleSearchBar:boolean = false;
  private defaultMenu:string; //declared for return default menu when window resized 

  constructor(public appSettings:AppSettings, public router:Router, private menuService: MenuService, private http: HttpClient){        
    this.settings = this.appSettings.settings;
  }
  //===================================================================
    selectedValue: string;
    dropselect: string;
    exists:number =  0;
    farmName:string = '';
    data1:any;
  foods = [
    
  ];
  //====================================================================
  ngOnInit() {
    if(window.innerWidth <= 768){
      this.settings.menu = 'vertical';
      this.settings.sidenavIsOpened = false;
      this.settings.sidenavIsPinned = false;
      this.exists = 0;
      console.log("debug23");
    }
    this.menuOption = this.settings.menu; 
    this.menuTypeOption = this.settings.menuType; 
    this.defaultMenu = this.settings.menu;
    
    
    //Comment
    this.http.get("https://localhost:44329/api/access/checkfarms/" + localStorage.getItem("currentUser")).subscribe( 
      success=>{
        this.data1 = success;
        this.foods = this.data1;
        this.data1.forEach(element => {
          if(localStorage.getItem("currentFarm") == element.Farm_ID){
              this.exists = 1;
              this.farmName = element.Farm_Name;
          }
        });

        if(this.exists == 0){
        localStorage.setItem("currentFarm",this.data1[0].Farm_ID); //===Added
        console.log("current farm: " + localStorage.getItem("currentFarm"));
        this.selectedValue= this.data1[0].Farm_ID;
        this.dropselect = this.data1[0].Farm_Name;
        localStorage.setItem("currentRole",this.data1[0].User_Type_Description);
        }else{
          this.selectedValue = localStorage.getItem("currentFarm");
          this.dropselect = this.farmName;
        }
      }
    );
  }

  onchange(){

  }

  ngAfterViewInit(){
    setTimeout(() => { this.settings.loadingSpinner = false }, 300);
    this.backToTop.nativeElement.style.display = 'none';  
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) { 
        if(!this.settings.sidenavIsPinned){
          this.sidenav.close(); 
        }      
        if(window.innerWidth <= 768){
          this.sidenav.close(); 
        } 
      }                
    });
    if(this.settings.menu == "vertical")
      this.menuService.expandActiveSubMenu(this.menuService.getVerticalMenuItems());
  }

  public chooseMenu(){
    this.settings.menu = this.menuOption; 
    this.defaultMenu = this.menuOption;
    this.router.navigate(['/']); 
  }

  public chooseMenuType(){
    this.settings.menuType = this.menuTypeOption;
  }

  public changeTheme(theme){
    this.settings.theme = theme;       
  }
   
  public toggleSidenav(){
    this.sidenav.toggle();
  }

  public onPsScrollY(event){   
    (event.target.scrollTop > 300) ? this.backToTop.nativeElement.style.display = 'flex' : this.backToTop.nativeElement.style.display = 'none';
    if(this.settings.menu == 'horizontal'){
      if(this.settings.fixedHeader){
        var currentScrollTop = (event.target.scrollTop > 56) ? event.target.scrollTop : 0; 
        if(currentScrollTop > this.lastScrollTop){
          document.querySelector('#horizontal-menu').classList.add('sticky');
          event.target.classList.add('horizontal-menu-hidden');
        }
        else{
          document.querySelector('#horizontal-menu').classList.remove('sticky');
          event.target.classList.remove('horizontal-menu-hidden');
        } 
        this.lastScrollTop = currentScrollTop; 
      } 
      else{
        if(event.target.scrollTop > 56){
          document.querySelector('#horizontal-menu').classList.add('sticky');
          event.target.classList.add('horizontal-menu-hidden');
        }
        else{
          document.querySelector('#horizontal-menu').classList.remove('sticky');
          event.target.classList.remove('horizontal-menu-hidden');
        }  
      }
    }
  }

  public scrollToTop() {
    this.pss.forEach(ps => {
      if(ps.elementRef.nativeElement.id == 'main' || ps.elementRef.nativeElement.id == 'main-content'){
        ps.scrollToTop(0,250);
      }
    });
  }

  farmChange(){
    localStorage.setItem("currentFarm", this.selectedValue);
    console.log("currentFarm");
    for(let i = 0; i < this.foods.length; i++){
      if(this.foods[i].Farm_ID == this.selectedValue){
        this.dropselect = this.foods[i].Farm_Name;
        localStorage.setItem("currentRole",this.foods[i].User_Type_Description);
        console.log(localStorage.getItem("currentFarm"));
        
    this.http.get("https://localhost:44329/api/HasSection/" + localStorage.getItem("currentFarm")).subscribe(
      success=>{
        localStorage.setItem("HasSection","yes");
      },
      error=>{
        localStorage.setItem("HasSection","no");
      }
    );

    this.http.get("https://localhost:44329/api/HasInfra/" + localStorage.getItem("currentFarm")).subscribe(
      success=>{
        localStorage.setItem("HasInfra","yes");
      },
      error=>{
        localStorage.setItem("HasInfra","no");
      }
      );


      this.router.navigateByUrl("/farm");
      }
    }
   
  }
  

  @HostListener('window:resize')
  public onWindowResize():void {
    if(window.innerWidth <= 768){
      this.settings.sidenavIsOpened = false;
      this.settings.sidenavIsPinned = false;
      this.settings.menu = 'vertical'
    }
    else{
      (this.defaultMenu == 'horizontal') ? this.settings.menu = 'horizontal' : this.settings.menu = 'vertical'
      this.settings.sidenavIsOpened = true;
      this.settings.sidenavIsPinned = true;
    }
  }

  public closeSubMenus(){
    let menu = document.querySelector(".sidenav-menu-outer");
    if(menu){
      for (let i = 0; i < menu.children[0].children.length; i++) {
        let child = menu.children[0].children[i];
        if(child){
          if(child.children[0].classList.contains('expanded')){
              child.children[0].classList.remove('expanded');
              child.children[1].classList.remove('show');
          }
        }
      }
    }
  }

}