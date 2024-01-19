import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrintDayPageRoutingModule } from './print-day-routing.module';

import { PrintDayPage } from './print-day.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrintDayPageRoutingModule
  ],
  declarations: [PrintDayPage]
})
export class PrintDayPageModule {}
