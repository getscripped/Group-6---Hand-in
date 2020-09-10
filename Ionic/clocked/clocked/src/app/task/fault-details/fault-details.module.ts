import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FaultDetailsPageRoutingModule } from './fault-details-routing.module';

import { FaultDetailsPage } from './fault-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FaultDetailsPageRoutingModule
  ],
  declarations: [FaultDetailsPage]
})
export class FaultDetailsPageModule {}
