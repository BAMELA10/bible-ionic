import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BestScorePage } from './best-score.page';

const routes: Routes = [
  {
    path: '',
    component: BestScorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BestScorePageRoutingModule {}
