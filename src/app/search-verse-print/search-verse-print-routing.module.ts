import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchVersePrintPage } from './search-verse-print.page';

const routes: Routes = [
  {
    path: '',
    component: SearchVersePrintPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchVersePrintPageRoutingModule {}
