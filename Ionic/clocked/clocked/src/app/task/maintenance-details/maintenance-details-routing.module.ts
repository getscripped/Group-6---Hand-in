import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaintenanceDetailsPage } from './maintenance-details.page';

const routes: Routes = [
  {
    path: '',
    component: MaintenanceDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaintenanceDetailsPageRoutingModule {}
