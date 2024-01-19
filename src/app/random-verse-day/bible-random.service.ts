import { Injectable } from '@angular/core';
import { HttpClient, HttpClientJsonpModule, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs'
import { catchError, retry} from 'rxjs/operators'



@Injectable({
  providedIn: 'root'
})


export class BibleRandomService {
  public throwError = throwError
  
  constructor(public http:HttpClient) {}
  
  public errorHandler(error: HttpErrorResponse){
    console.error(error.error)
    return  throwError(error.error)
  }

  
  getdata(): Observable<any> {
      return this.http.get<any>('https://bible-api.com/?random=verse')
      .pipe(retry(5),catchError(this.errorHandler))
  }

}