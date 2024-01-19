import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrintDayPage } from './print-day.page';
import { RandomVerseDayPage } from '../random-verse-day.page';

const routes: Routes = [
  {
    path: '',
    component: PrintDayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrintDayPageRoutingModule {}
