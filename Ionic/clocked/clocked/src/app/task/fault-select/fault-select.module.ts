import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FaultSelectPageRoutingModule } from './fault-select-routing.module';

import { FaultSelectPage } from './fault-select.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FaultSelectPageRoutingModule
  ],
  declarations: [FaultSelectPage]
})
export class FaultSelectPageModule {}
