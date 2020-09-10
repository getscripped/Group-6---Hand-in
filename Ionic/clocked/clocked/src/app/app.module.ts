import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { CommonModule } from '@angular/common';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FormControl, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { LogoutComponent } from './logout/logout.component';
import { LoginComponent } from './login/login.component';
import { TaskComponent } from './task/task.component';
import { MaintenanceSelectPage } from './task/maintenance-select/maintenance-select.page';
import { MaintenanceDetailsPage } from './task/maintenance-details/maintenance-details.page';
import { TaskDetailsPage } from './task/task-details/task-details.page';
import { TaskSelectPage } from './task/task-select/task-select.page';
import { FaultDetailsPage } from './task/fault-details/fault-details.page';
import { FaultSelectPage } from './task/fault-select/fault-select.page';
import { SelectPage } from './login/select/select.page';
import { ClockInComponent } from './clock-in/clock-in.component';
import { ClockOutComponent } from './clock-out/clock-out.component';

import { AngularFireModule } from '@angular/fire';                      // For setup
import { AngularFireDatabaseModule } from '@angular/fire/database';   // For database
import { AngularFirestore } from '@angular/fire/firestore';          // For database --> firestore

import { AngularFireStorageModule } from '@angular/fire/storage';


@NgModule({
  declarations: [AppComponent, 
    LogoutComponent,
    LoginComponent,
    TaskComponent,
    MaintenanceSelectPage,
    MaintenanceDetailsPage,
    TaskDetailsPage,
    TaskSelectPage,
    FaultDetailsPage,
    FaultSelectPage,
    SelectPage,
    ClockInComponent,
    ClockOutComponent
    ],
  entryComponents: [],
  imports: [
    AngularFireModule.initializeApp({
    apiKey: "AIzaSyCqkWTeMLdmWaF6quvPZulOz4jxvVtnmgE",
    authDomain: "agrilogphotoservice.firebaseapp.com",
    databaseURL: "https://agrilogphotoservice.firebaseio.com",
    projectId: "agrilogphotoservice",
    storageBucket: "agrilogphotoservice.appspot.com",
    messagingSenderId: "240406745743",
    appId: "1:240406745743:web:34f47cb1646c237c11d6fa",
    measurementId: "G-P6XQ0VE3X7"
   }),
    AngularFireDatabaseModule  ,                

    AngularFireStorageModule ,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    CommonModule, FormsModule, AppRoutingModule, ReactiveFormsModule,HttpClientModule
  ],
  providers: [
    StatusBar,
    SplashScreen,FormControl,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  exports: [CommonModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
