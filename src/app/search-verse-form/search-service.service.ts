import { Injectable } from '@angular/core';
import { HttpClient, HttpClientJsonpModule, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs'
import { catchError, retry} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {
  public throwError = throwError

  constructor(public http: HttpClient) { }

  public errorHandler(error: HttpErrorResponse){
    console.error(error.error)
    return  throwError(error.error)
  }
  getVerse(book:string , chapter: number, verse: number): Observable<any>{
    return this.http.get<any>("https://bible-api.com/"+book+"+"+chapter+":"+verse)
    .pipe(
      retry(5),
      catchError(this.errorHandler))
  }
}
