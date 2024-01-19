import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RandomVerseDayPageRoutingModule } from './random-verse-day-routing.module';

import { RandomVerseDayPage } from './random-verse-day.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RandomVerseDayPageRoutingModule
  ],
  declarations: [RandomVerseDayPage]
})
export class RandomVerseDayPageModule {}
