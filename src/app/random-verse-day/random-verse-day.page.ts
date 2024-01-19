import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientJsonpModule, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs'
import { catchError, retry} from 'rxjs/operators'

@Component({
  selector: 'app-random-verse-day',
  templateUrl: './random-verse-day.page.html',
  styleUrls: ['./random-verse-day.page.scss'],
})
export class RandomVerseDayPage {
  constructor() { }
  
  ngOnInit() {
  }
  
}
