import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaskSelectPageRoutingModule } from './task-select-routing.module';

import { TaskSelectPage } from './task-select.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaskSelectPageRoutingModule
  ],
  declarations: [TaskSelectPage]
})
export class TaskSelectPageModule {}
