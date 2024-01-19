import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchVerseFormPage } from './search-verse-form.page';

const routes: Routes = [
  {
    path: '',
    component: SearchVerseFormPage
  },
  {
    path: 'search-verse-print',
    loadChildren: () => import('./search-verse-print/search-verse-print.module').then( m => m.SearchVersePrintPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchVerseFormPageRoutingModule {}
