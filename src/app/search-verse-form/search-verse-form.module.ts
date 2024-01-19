import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchVerseFormPageRoutingModule } from './search-verse-form-routing.module';

import { SearchVerseFormPage } from './search-verse-form.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchVerseFormPageRoutingModule
  ],
  declarations: [SearchVerseFormPage]
})
export class SearchVerseFormPageModule {}
