import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaintenanceSelectPage } from './maintenance-select.page';

const routes: Routes = [
  {
    path: '',
    component: MaintenanceSelectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaintenanceSelectPageRoutingModule {}
