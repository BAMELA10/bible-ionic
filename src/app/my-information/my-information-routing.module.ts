import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyInformationPage } from './my-information.page';

const routes: Routes = [
  {
    path: '',
    component: MyInformationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyInformationPageRoutingModule {}
