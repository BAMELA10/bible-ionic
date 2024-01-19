import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RandomVerseDayPage } from './random-verse-day.page';

const routes: Routes = [
  {
    path: '',
    component: RandomVerseDayPage
  },
  {
    path: 'print-day',
    loadChildren: () => import('./print-day/print-day.module').then( m => m.PrintDayPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RandomVerseDayPageRoutingModule {}
