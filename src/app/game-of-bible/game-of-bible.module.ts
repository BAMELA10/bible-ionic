import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GameOfBiblePageRoutingModule } from './game-of-bible-routing.module';

import { GameOfBiblePage } from './game-of-bible.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GameOfBiblePageRoutingModule
  ],
  declarations: [GameOfBiblePage]
})
export class GameOfBiblePageModule {}
