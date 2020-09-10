import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ClockInComponent } from './clock-in/clock-in.component';
import { ClockOutComponent } from './clock-out/clock-out.component';
import { TaskComponent } from './task/task.component';
import { LoginComponent } from './login/login.component';
import { TaskSelectPage } from './task/task-select/task-select.page';

const routes: Routes = [
 
  {
    path: "",
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },  //dit moet redirect na login toe..... maar die folder/inbox is die home page en ek weet nie hoe om dit te rout nie want folder/inbox in n component nie
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  { path: 'clock', component: ClockInComponent },
  { path: 'clockout', component: ClockOutComponent },
  { path: 'task', component: TaskComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'task-select',
    loadChildren: () => import('./task/task-select/task-select.module').then( m => m.TaskSelectPageModule)
  },
  {
    path: 'task-details',
    loadChildren: () => import('./task/task-details/task-details.module').then( m => m.TaskDetailsPageModule)
  },
  {
    path: 'maintenance-select',
    loadChildren: () => import('./task/maintenance-select/maintenance-select.module').then( m => m.MaintenanceSelectPageModule)
  },
  {
    path: 'maintenance-details',
    loadChildren: () => import('./task/maintenance-details/maintenance-details.module').then( m => m.MaintenanceDetailsPageModule)
  },
  {
    path: 'fault-details',
    loadChildren: () => import('./task/fault-details/fault-details.module').then( m => m.FaultDetailsPageModule)
  },
  {
    path: 'fault-select',
    loadChildren: () => import('./task/fault-select/fault-select.module').then( m => m.FaultSelectPageModule)
  },
  {
    path: 'select',
    loadChildren: () => import('./login/select/select.module').then( m => m.SelectPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
