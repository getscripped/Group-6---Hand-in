import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from '../login/login.component';

import { FolderPage } from './folder.page';
import { LogoutComponent } from '../logout/logout.component';

const routes: Routes = [
  {
    path: '',
    component: FolderPage
  },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
