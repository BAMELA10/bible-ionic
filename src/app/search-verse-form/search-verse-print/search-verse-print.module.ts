import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchVersePrintPageRoutingModule } from './search-verse-print-routing.module';

import { SearchVersePrintPage } from './search-verse-print.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchVersePrintPageRoutingModule
  ],
  declarations: [SearchVersePrintPage]
})
export class SearchVersePrintPageModule {}
