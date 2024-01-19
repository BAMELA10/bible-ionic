import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BestScorePageRoutingModule } from './best-score-routing.module';

import { BestScorePage } from './best-score.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BestScorePageRoutingModule
  ],
  declarations: [BestScorePage]
})
export class BestScorePageModule {}
