import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BibleService {

  constructor(public http:HttpClient) { }

  getDataQuestion():Observable<any>{
    return this.http.get<any>('../assets/interrogation.json')
    }
  }

  
