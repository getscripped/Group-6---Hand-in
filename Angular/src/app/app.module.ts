import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OverlayContainer } from '@angular/cdk/overlay';
import { CustomOverlayContainer } from './theme/utils/custom-overlay-container';
import { NgxGaugeModule } from 'ngx-gauge';
import { AgmCoreModule } from '@agm/core';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  wheelPropagation: true,
  suppressScrollX: true               
};
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { SharedModule } from './shared/shared.module';
import { PipesModule } from './theme/pipes/pipes.module';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { BlankComponent } from './pages/blank/blank.component';
import { SearchComponent } from './pages/search/search.component';
import { NotFoundComponent } from './pages/errors/not-found/not-found.component';
import { ErrorComponent } from './pages/errors/error/error.component';
import { AppSettings } from './app.settings';

import { SidenavComponent } from './theme/components/sidenav/sidenav.component';
import { VerticalMenuComponent } from './theme/components/menu/vertical-menu/vertical-menu.component';
import { HorizontalMenuComponent } from './theme/components/menu/horizontal-menu/horizontal-menu.component';
import { BreadcrumbComponent } from './theme/components/breadcrumb/breadcrumb.component';
import { FlagsMenuComponent } from './theme/components/flags-menu/flags-menu.component';
import { FullScreenComponent } from './theme/components/fullscreen/fullscreen.component';
import { ApplicationsComponent } from './theme/components/applications/applications.component';
import { MessagesComponent } from './theme/components/messages/messages.component';
import { UserMenuComponent } from './theme/components/user-menu/user-menu.component';

import { VehicleComponent } from './vehicle/vehicle.component';

import { CommonModule } from '@angular/common';
import { EquipmentComponent } from './equipment/equipment.component';
import { FarmHealthComponent } from './farm-health/farm-health.component';  
import { InsurnaceProviderComponent } from './insurnace-provider/insurnace-provider.component';
import { VehicleServiceComponent } from './vehicle-service/vehicle-service.component';
import { FarmComponent } from './farm/farm.component';
import { EquipmentTypesComponent } from './equipment-types/equipment-types.component';
import { VehicleTypesComponent } from './vehicle-types/vehicle-types.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { InfrastructureComponent } from './infrastructure/infrastructure.component';
import { ScheduledtasksComponent } from './scheduledtasks/scheduledtasks.component';
import { RepairLogComponent } from './repair-log/repair-log.component';
import { SrProviderComponent } from './sr-provider/sr-provider.component';
import { ActiveListComponent } from './active-list/active-list.component';
import { FaultLogComponent } from './fault-log/fault-log.component';
import { MaintenanceLogComponent } from './maintenance-log/maintenance-log.component';
import { FaultreportComponent } from './faultreport/faultreport.component';
import { FmMainComponent } from './fm-main/fm-main.component';
import { SectionReportComponent } from './section-report/section-report.component';
import { SectionComponent } from './section/section.component';
import { SectionTypeComponent } from './section-type/section-type.component';
import { AuditLogComponent } from './audit-log/audit-log.component';
import { EmailSentComponent } from './email-sent/email-sent.component';
import { NewPasswordComponent } from './new-password/new-password.component';
import { RequestEmailComponent } from './request-email/request-email.component';
import { SkillComponent } from './skill/skill.component';
import { StaffComponent } from './staff/staff.component';
import { TaskComponent } from './task/task.component';
import { TaskTypeComponent } from './task-type/task-type.component';
import { MaintenanceReportComponent } from './maintenance-report/maintenance-report.component';
import { StaffScheduleComponent } from './staff-schedule/staff-schedule.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';


import { AngularFireModule } from '@angular/fire';                      // For setup
import { AngularFireDatabaseModule } from '@angular/fire/database';   // For database
import { AngularFirestore } from '@angular/fire/firestore';          // For database --> firestore

import { AngularFireStorageModule } from '@angular/fire/storage';
import { LogoutComponent } from './logout/logout.component';    // For Storage    <<<<<<

//==================================Add all service here=============================
import {EquipmentService} from '../app/equipment/equipmentservice';
import { EquipmentTypeService } from '../app/equipment-types/equipmenttypeservice';
import {VehicleService} from '../app/vehicle/vehicleservice';
import { SkillDialogComponent } from './skill/skill-dialog/skill-dialog.component';
import { EditskillDialogComponent } from './skill/editskill-dialog/editskill-dialog.component'
import { ConfirmDialogService } from './shared/Dialogs/ConfirmDialog/confirm-dialog.service';
import { SuccessDialogService } from './shared/Dialogs/SuccessDialog/success-dialog.service';
import { DuplicateDialogService } from './shared/Dialogs/DuplicateDialog/duplicate-dialog.service';
import { ErrorDialogService } from './shared/Dialogs/ErrorDialog/error-dialog.service';
import { StaffSelectionDialogComponent } from './fault-log/staff-selection-dialog/staff-selection-dialog.component';
import { AddtypeDialogComponent } from './vehicle-types/addtype-dialog/addtype-dialog.component';
import { EdittypeDialogComponent } from './vehicle-types/edittype-dialog/edittype-dialog.component';
import { AddequipDialogComponent } from './equipment-types/addequip-dialog/addequip-dialog.component';
import { EditequipDialogComponent } from './equipment-types/editequip-dialog/editequip-dialog.component';
import { AddsectionDialogComponent } from './section-type/addsection-dialog/addsection-dialog.component';
import { EditsectionDialogComponent } from './section-type/editsection-dialog/editsection-dialog.component';


@NgModule({
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
    BrowserAnimationsModule,     
    FormsModule, 
    ReactiveFormsModule,
    CommonModule,
    NgxGaugeModule,
    NgxChartsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAir4tXhx3X-wcdZnhe8TLlo9J2m_AKx6w'
    }), 
    PerfectScrollbarModule, 
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    SharedModule,
    PipesModule,
    routing
  ],
  declarations: [
    AppComponent,
    PagesComponent,
    BlankComponent,
    SearchComponent,
    NotFoundComponent,
    ErrorComponent,
    SidenavComponent,
    VerticalMenuComponent,
    HorizontalMenuComponent,
    BreadcrumbComponent,
    FlagsMenuComponent,
    FullScreenComponent,
    ApplicationsComponent,
    MessagesComponent,
    UserMenuComponent,

    VehicleComponent,
    EquipmentComponent,
    FarmHealthComponent,
    FarmComponent,
    VehicleServiceComponent,
    InsurnaceProviderComponent,
    EquipmentTypesComponent,
    VehicleTypesComponent,
    InfrastructureComponent,
    ScheduledtasksComponent,
    RepairLogComponent,
    SrProviderComponent,
    ActiveListComponent,
    FaultLogComponent,
    MaintenanceLogComponent,
    FaultreportComponent,
    FmMainComponent,
    SectionReportComponent,
    SectionComponent,
    SectionTypeComponent,
    AuditLogComponent,
    EmailSentComponent,
    NewPasswordComponent,
    RequestEmailComponent,
    SkillComponent,
    StaffComponent,
    TaskComponent,
    TaskTypeComponent,
    MaintenanceReportComponent,
    StaffScheduleComponent,
    HomeComponent,
    AboutComponent,
    LogoutComponent,
    SkillDialogComponent,
    EditskillDialogComponent,
    StaffSelectionDialogComponent,
    AddtypeDialogComponent,
    EdittypeDialogComponent,
    AddequipDialogComponent,
    EditequipDialogComponent,
    AddsectionDialogComponent,
    EditsectionDialogComponent
  ],
  entryComponents:[
    VerticalMenuComponent
  ],
  providers: [ 
    AppSettings,
    { provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG },
    { provide: OverlayContainer, useClass: CustomOverlayContainer },
    [EquipmentService],
    [EquipmentTypeService],
    [VehicleService],
    [ConfirmDialogService],
    [SuccessDialogService],
    [DuplicateDialogService],
    [ErrorDialogService]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }