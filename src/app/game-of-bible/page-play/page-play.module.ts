import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagePlayPageRoutingModule } from './page-play-routing.module';

import { PagePlayPage } from './page-play.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagePlayPageRoutingModule
  ],
  declarations: [PagePlayPage]
})
export class PagePlayPageModule {}
