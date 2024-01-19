import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WelcomeAppPageRoutingModule } from './welcome-app-routing.module';

import { WelcomeAppPage } from './welcome-app.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WelcomeAppPageRoutingModule
  ],
  declarations: [WelcomeAppPage]
})
export class WelcomeAppPageModule {}
