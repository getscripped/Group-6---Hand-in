import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskSelectPage } from './task-select.page';

const routes: Routes = [
  {
    path: '',
    component: TaskSelectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskSelectPageRoutingModule {}
