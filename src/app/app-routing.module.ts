import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full' 
  },
  /* {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  }, */
  {
    path: 'random-verse-day',
    loadChildren: () => import('./random-verse-day/random-verse-day.module').then( m => m.RandomVerseDayPageModule)
  },
  {
    path: 'search-verse-form',
    loadChildren: () => import('./search-verse-form/search-verse-form.module').then( m => m.SearchVerseFormPageModule)
  },
  {
    path: 'search-verse-print',
    loadChildren: () => import('./search-verse-print/search-verse-print.module').then( m => m.SearchVersePrintPageModule)
  },
  {
    path: 'my-information',
    loadChildren: () => import('./my-information/my-information.module').then( m => m.MyInformationPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome-app/welcome-app.module').then( m => m.WelcomeAppPageModule)
  },
  {
    path: 'game-of-bible',
    loadChildren: () => import('./game-of-bible/game-of-bible.module').then( m => m.GameOfBiblePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
