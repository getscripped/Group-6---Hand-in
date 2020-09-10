import { Routes, RouterModule, PreloadAllModules  } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { PagesComponent } from './pages/pages.component';
import { BlankComponent } from './pages/blank/blank.component';
import { SearchComponent } from './pages/search/search.component';
import { NotFoundComponent } from './pages/errors/not-found/not-found.component';
import { ErrorComponent } from './pages/errors/error/error.component';

import { VehicleComponent } from './vehicle/vehicle.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { FarmHealthComponent } from './farm-health/farm-health.component';
import { FarmComponent } from './farm/farm.component';
import { InsurnaceProviderComponent } from './insurnace-provider/insurnace-provider.component';
import { VehicleServiceComponent } from './vehicle-service/vehicle-service.component';
import { VehicleTypesComponent } from './vehicle-types/vehicle-types.component';
import { EquipmentTypesComponent } from './equipment-types/equipment-types.component';
import { ScheduledtasksComponent } from './scheduledtasks/scheduledtasks.component';
import { RepairLogComponent } from './repair-log/repair-log.component';
import { InfrastructureComponent } from './infrastructure/infrastructure.component';
import { ActiveListComponent } from './active-list/active-list.component';
import { FaultLogComponent } from './fault-log/fault-log.component';
import { FmMainComponent } from './fm-main/fm-main.component';
import { MaintenanceLogComponent } from './maintenance-log/maintenance-log.component';
import { FaultreportComponent } from './faultreport/faultreport.component';
import { SectionComponent } from './section/section.component';
import { SectionTypeComponent } from './section-type/section-type.component';
import { SrProviderComponent } from './sr-provider/sr-provider.component';
import { AuditLogComponent } from './audit-log/audit-log.component';
import { EmailSentComponent } from './email-sent/email-sent.component';
import { NewPasswordComponent } from './new-password/new-password.component';
import { RequestEmailComponent } from './request-email/request-email.component';
import { SkillComponent } from './skill/skill.component';
import { StaffComponent } from './staff/staff.component';
import { TaskComponent } from './task/task.component';
import { TaskTypeComponent } from './task-type/task-type.component';
import { SectionReportComponent } from './section-report/section-report.component';
import { MaintenanceReportComponent } from './maintenance-report/maintenance-report.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LogoutComponent } from './logout/logout.component';

export const routes: Routes = [
    { 
        path: '', 
        component: PagesComponent, children: [
            { path: '', component: HomeComponent },
            { path: 'users', loadChildren: () => import('./pages/users/users.module').then(m => m.UsersModule), data: { breadcrumb: 'Users' } },
            { path: 'ui', loadChildren: () => import('./pages/ui/ui.module').then(m => m.UiModule), data: { breadcrumb: 'UI' } },
            { path: 'form-controls', loadChildren: () => import('./pages/form-controls/form-controls.module').then(m => m.FormControlsModule), data: { breadcrumb: 'Form Controls' } },
            { path: 'tables', loadChildren: () => import('./pages/tables/tables.module').then(m => m.TablesModule), data: { breadcrumb: 'Tables' } },
            { path: 'icons', loadChildren: () => import('./pages/icons/icons.module').then(m => m.IconsModule), data: { breadcrumb: 'Material Icons' } },
            { path: 'drag-drop', loadChildren: () => import('./pages/drag-drop/drag-drop.module').then(m => m.DragDropModule), data: { breadcrumb: 'Drag & Drop' } },

            { path: 'mailbox', loadChildren: () => import('./pages/mailbox/mailbox.module').then(m => m.MailboxModule), data: { breadcrumb: 'Mailbox' } },
            { path: 'chat', loadChildren: () => import('./pages/chat/chat.module').then(m => m.ChatModule), data: { breadcrumb: 'Chat' } },
            { path: 'maps', loadChildren: () => import('./pages/maps/maps.module').then(m => m.MapsModule), data: { breadcrumb: 'Maps' } },
            { path: 'charts', loadChildren: () => import('./pages/charts/charts.module').then(m => m.ChartsModule), data: { breadcrumb: 'Charts' } },
            { path: 'dynamic-menu', loadChildren: () => import('./pages/dynamic-menu/dynamic-menu.module').then(m => m.DynamicMenuModule), data: { breadcrumb: 'Dynamic Menu' }  },          
            { path: 'profile', loadChildren: () => import ('./pages/profile/profile.module').then(m => m.ProfileModule), data: { breadcrumb: 'Profile' } }, 
            { path: 'blank', component: BlankComponent, data: { breadcrumb: 'Blank page' } },
            { path: 'search', component: SearchComponent, data: { breadcrumb: 'Search' } },
            { path: 'vehicles', component: VehicleComponent },
            { path: 'equipment', component: EquipmentComponent },
            { path: 'health', component: FarmHealthComponent },
            { path: 'farm', component: FarmComponent },

            { path: 'service', component: VehicleServiceComponent },
            { path: 'eqTypes', component: EquipmentTypesComponent },
            { path: 'veTypes', component: VehicleTypesComponent },

            { path: 'schedule', component: ScheduledtasksComponent },
            { path: 'repairlog', component: RepairLogComponent },
            { path: 'infrastructure', component: InfrastructureComponent },




            { path: 'active-list', component: ActiveListComponent },
            { path: 'fault-log', component: FaultLogComponent },
            { path: 'fm-main', component: FmMainComponent },
            { path: 'maintenance', component: MaintenanceLogComponent },
            { path: 'report', component: FaultreportComponent },
            { path: 'sec-report', component: SectionReportComponent },
            { path: 'section', component: SectionComponent },
            { path: 'sec-type', component: SectionTypeComponent },
            { path: 'sr-prov', component: SrProviderComponent },
            { path: 'audit-log', component: AuditLogComponent },
            { path: 'emailsent', component: EmailSentComponent },
            { path: 'newPass', component: NewPasswordComponent },
            { path: 'reqEmail', component: RequestEmailComponent },
            { path: 'insure', component: InsurnaceProviderComponent },
            { path: 'skill', component: SkillComponent },
            { path: 'staff', component: StaffComponent },
            { path: 'task', component: TaskComponent },
            { path: 'task-type', component: TaskTypeComponent },
            { path: 'maintenance-report', component: MaintenanceReportComponent },
            { path: 'about', component: AboutComponent },
            { path: 'logout', component: LogoutComponent },
        ]
    },
    { path: 'landing', loadChildren: () => import('./pages/landing/landing.module').then(m => m.LandingModule) },
    { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
    { path: 'register', loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule) },
    { path: 'error', component: ErrorComponent, data: { breadcrumb: 'Error' } },
    { path: '**', component: NotFoundComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,  // <- comment this line for enable lazy load
    // useHash: true
});