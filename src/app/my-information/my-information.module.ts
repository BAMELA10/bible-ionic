import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyInformationPageRoutingModule } from './my-information-routing.module';

import { MyInformationPage } from './my-information.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyInformationPageRoutingModule
  ],
  declarations: [MyInformationPage]
})
export class MyInformationPageModule {}
