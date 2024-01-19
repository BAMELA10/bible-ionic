import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-welcome-app',
  templateUrl: './welcome-app.page.html',
  styleUrls: ['./welcome-app.page.scss'],
})
export class WelcomeAppPage implements OnInit {
  public appPages = [
    { title: 'Get the Verse for the moment', url: '/random-verse-day', icon: 'book' },
    { title: 'Find any verse in the Bible', url: '/search-verse-form', icon: 'search' },
    { title: 'Play with us', url:'/game-of-bible', icon: 'game-controller'},
    
  ]
  constructor() { }

  ngOnInit(){
  }
}
