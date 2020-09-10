import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';
import { User, UserProfile, UserWork, UserContacts, UserSocial, UserSettings } from './user.model';
import { UsersService } from './users.service';
import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { StaffSkill, Staff, Skill, PostStaff } from '../../Models/Staff'
import { DataSource } from '@angular/cdk/table';
import { MatTableDataSource } from '@angular/material/table';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import {Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormBuilder,Validators,FormControl } from '@angular/forms';
import { StaffServiceService } from './staff-service.service';
import { EditStaffDialogComponent } from './edit-staff-dialog/edit-staff-dialog.component';
import { formatDate } from '@angular/common';
import { ConfirmDialogService } from '../../shared/Dialogs/ConfirmDialog/confirm-dialog.service';
import { SuccessDialogService } from '../../shared/Dialogs/SuccessDialog/success-dialog.service';
import { isSuccess } from 'angular-in-memory-web-api';

declare var jsPDF: any; 
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [ UsersService ]  
})


export class UsersComponent implements OnInit {
    
    public staff:Staff[];
    public skill: Skill[];
    public dataSource:any;
    public ops:any;
    
    @ViewChild(MatPaginator) paginator: MatPaginator;

    public users: User[];
    public searchText: string;
    public page:any;
    public settings: Settings;
    constructor(public appSettings:AppSettings, 
                public dialog: MatDialog,
                public usersService:UsersService,
                private router:Router,
                private http:HttpClient, 
                private formBuilder:FormBuilder,
                private dialogService: ConfirmDialogService, 
                private DialogService: SuccessDialogService,
                //private datePipe: DatePipe,
            public staffService:StaffServiceService){
        this.settings = this.appSettings.settings; 
    }

    

    ngOnInit() {
        this.getUsers();         
    }
    
    //=============================== get data ====================================
    data1:any 
    tempStaff:Staff;
    tempSkill:any; 
    data2:StaffSkill; 
    tableData:Staff[]=[];
    getUsers(){
        
    this.staffService.getStaff().subscribe( //get all staff
        (success)=>{
        this.data1=success;
        this.tableData=this.data1['staff'];
        this.tempStaff = this.data1['staff'];
        this.tempSkill = this.data1['skills'];
            //this.data1=response;
        console.log(this.tempStaff);
        console.log(this.tempSkill);
        
        },
        error=>{
            console.log(error);
        }
    )
    }
    editStaffID:any
    getStaffDetails(id: number){
        //Implement function to pupulate edit field and populate skill edit\
        this.editStaffID = id;
        console.log(this.editStaffID);
        //this.changeform();
       // localStorage.setItem("currentFarm","6");
        this.ops = {     // <<<<<< Initialize header with token
          headers: new HttpHeaders({
            
            'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
          })
        };
        this.staffService.getStaffDetails(id).subscribe( // <<<< get specific skill
          success => {
            this.data2 = success;

            //this.PutSkill();
            const dialogRef = this.dialog.open(EditStaffDialogComponent,{
              data:this.data2
            });
            console.log(this.data2)
          }
        );
        
      }

      deleteStaff(id:number){
        if(confirm("Are you sure to delete?")) {
          this.ops = {     // <<<<<< Initialize header with token
            headers: new HttpHeaders({
              
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            })
          };
          this.staffService.deleteStaff(id).subscribe( //<<<<<<<< delete staff
            (response) =>  {
                console.log(response);
                
            }
          ); 
      }
      window.location.reload();
      }


    public onPageChanged(event){
        this.page = event;
        this.getUsers();
        if(this.settings.fixedHeader){      
            document.getElementById('main-content').scrollTop = 0;
        }
        else{
            document.getElementsByClassName('mat-drawer-content')[0].scrollTop = 0;
        }
    }

    public openUserDialog(user){
        let dialogRef = this.dialog.open(UserDialogComponent, {
            data: user
        });

        // dialogRef.afterClosed().subscribe(user => {
        //     if(user){
        //         (user.id) ? this.updateUser(user) : this.addUser(user);
        //     }
        // });

        
    }
    public staffSearch;
    applyFilter(filterValue: string) {
        this.staffSearch.filter = filterValue.trim().toLowerCase();
      }


      //========================================Download PDF=============
  rows = []; //<<< For JSON parsing
  temp: Staff; //<< To add to list
  myDate = new Date();
  test:string;
  download(){
    const doc = new jsPDF('portrait','px','a4'); //<<<<<Declare pdf
    console.log(this.tableData);
    

    for(let i = 0;  i< this.tableData.length; i++){   //<<< get all rows in JSOn and convert to object list
        this.temp =  this.tableData[i];
        //this.test = this.datePipe.transform(this.temp.Staff_DoB, 'yyyy-MM-dd');
        this.test=formatDate(this.temp.Staff_DoB,'yyyy/MM/dd','en');
        this.rows.push([this.temp.Staff_ID,this.temp.Staff_Name,this.temp.Staff_Surname, this.test,this.temp.Staff_Phone_Number,this.temp.Staff_Address ]);
        
    }
     console.log(this.rows);
    
    doc.autoTable({ //<<<<< Add list to table, order is important here
      head: [['ID Number', 'Name','Surname', 'Date of Birth', 'Phone Number','Home Address']],
      body: this.rows
    }); 
    doc.save("StaffList"); //<<<< save doc


  }

  DownloadSubmission() { 
    const options = { //the information you want the dialog to display 
      title: 'Download Staff List',
      message: 'Do you want to download a list of all staff members on your farm?',
      cancelText: 'CANCEL',
      confirmText: 'YES'
    };
    
    this.dialogService.open(options);
        
    this.dialogService.confirmed().subscribe(confirmed => {
       if (confirmed) {
            this.download(); // your post/add function 
          }
        });
  }
}