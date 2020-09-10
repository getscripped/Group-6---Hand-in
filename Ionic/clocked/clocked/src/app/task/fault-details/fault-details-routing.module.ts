import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FaultDetailsPage } from './fault-details.page';

const routes: Routes = [
  {
    path: '',
    component: FaultDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FaultDetailsPageRoutingModule {}
