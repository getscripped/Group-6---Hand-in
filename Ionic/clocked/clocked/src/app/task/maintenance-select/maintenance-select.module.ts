import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaintenanceSelectPageRoutingModule } from './maintenance-select-routing.module';

import { MaintenanceSelectPage } from './maintenance-select.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaintenanceSelectPageRoutingModule
  ],
  declarations: [MaintenanceSelectPage]
})
export class MaintenanceSelectPageModule {}
