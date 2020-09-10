import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FaultSelectPage } from './fault-select.page';

const routes: Routes = [
  {
    path: '',
    component: FaultSelectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FaultSelectPageRoutingModule {}
