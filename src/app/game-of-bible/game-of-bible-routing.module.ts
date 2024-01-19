import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GameOfBiblePage } from './game-of-bible.page';

const routes: Routes = [
  {
    path: '',
    component: GameOfBiblePage
  },
  {
    path: 'page-play',
    loadChildren: () => import('./page-play/page-play.module').then( m => m.PagePlayPageModule)
  },
  {
    path: 'best-score',
    loadChildren: () => import('./best-score/best-score.module').then( m => m.BestScorePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GameOfBiblePageRoutingModule {}
