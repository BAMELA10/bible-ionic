import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeAppPage } from './welcome-app.page';

const routes: Routes = [
  {
    path: '',
    component: WelcomeAppPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WelcomeAppPageRoutingModule {}
