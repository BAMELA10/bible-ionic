import { Component, OnInit } from '@angular/core';
//import { BibleRandomService } from '../bible-random.service';
import { catchError } from 'rxjs';
import { HttpClientModule} from '@angular/common/http';
import { CapacitorHttp, HttpOptions, HttpResponse } from '@capacitor/core';
import { BibleRandomService } from '../bible-random.service';



@Component({
  selector: 'app-print-day',
  templateUrl: './print-day.page.html',
  styleUrls: ['./print-day.page.scss'],
})
export class PrintDayPage implements OnInit {
  public references : unknown
  public text :unknown
  public error = ''

  constructor(public api:BibleRandomService) { }
  
  /* public checkLastExecution() {
    const lastExecutionDate = localStorage.getItem('lastExecutionDate');
    if (lastExecutionDate) {
        const today = new Date().toLocaleDateString();
        if (lastExecutionDate === today) {
            return false;
        }
    }
    return true;
  }
  public saveExecutionDate() {
    const today = new Date().toLocaleDateString();
    localStorage.setItem('lastExecutionDate', today);
  } *//**/
  /* async gatRandomVerse() {
    const options:HttpOptions = {
      url: 'https://bible-api.com/?random=verse',
      headers: { 'Content-Type': 'application/json','Connection':'keep-alive','Accept':''},
      params: {},
    };
    const response = await CapacitorHttp.get(options)
    .then((response:HttpResponse) => {
      this.references = response.data
    })
    .catch((error)=> {
      error = "Internet connection failed"
      this.error = error;
    }) 
  }*/
  gatRandomVerse(){
   this.api.getdata()
    .subscribe(result=>{
      this.references = Object.values(result)[0]
      this.text = Object.values(result)[2]
  }, (error) => {
      error = "Internet connection failed"
      this.error = error;
    }) 
  }
  ngOnInit() {
    this.gatRandomVerse()
  }
}

