import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaintenanceDetailsPageRoutingModule } from './maintenance-details-routing.module';

import { MaintenanceDetailsPage } from './maintenance-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaintenanceDetailsPageRoutingModule
  ],
  declarations: [MaintenanceDetailsPage]
})
export class MaintenanceDetailsPageModule {}
