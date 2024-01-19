import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url:'/welcome', icon: 'home'},
    { title: 'Moment of Verse', url: '/random-verse-day', icon: 'book' },
    { title: 'Search a verse', url: '/search-verse-form', icon: 'search' },
    { title: 'Play Bible', url:'/game-of-bible', icon: 'game-controller'},
    { title: 'About of us', url: '/my-information', icon: 'heart' },
    
  ];
  constructor() {}
}
