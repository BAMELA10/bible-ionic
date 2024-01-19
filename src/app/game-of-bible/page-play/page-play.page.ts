import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BibleService } from 'src/app/bible.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-page-play',
  templateUrl: './page-play.page.html',
  styleUrls: ['./page-play.page.scss'],
})



export class PagePlayPage implements OnInit {
  list: any[] = []
  constructor(public bibleSservice:BibleService, public router: Router) { }
  public point = -1
  public question = "" 
  public response = ""
  public losed = false 
  public listQuestion: string | any[] = []
  public user = {
    responseUser:""
  }

  public alertButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        this.router.navigateByUrl('/game-of-bible')
      },
    },
  ]


  ngOnInit(): void{
    this.bibleSservice.getDataQuestion()
    .subscribe(result=>{
        this.list = result.question_response
        let number = Math.random()
        let randomN = number * this.list.length
        let randomIndex = Math.floor(randomN)
        let previous_choice = this.list[randomIndex]
        let current_choice = previous_choice
        this.question = current_choice.question
        this.response = current_choice.answer
        console.log(this.response)
    })
  }
  
  game():void {
      let number = Math.random()
      let randomN = number * this.list.length
      let randomIndex = Math.floor(randomN)
      let previous_choice = this.list[randomIndex]
      let current_choice = previous_choice
      this.question = current_choice.question
      this.response = current_choice.answer
      this.point++
      console.log(this.response.toLowerCase())
  }
  retygame(){
    let reponse = this.response.toUpperCase() 
    let user_response = this.user.responseUser.toUpperCase()
    console.log(reponse, user_response)
    this.game()
    if (reponse !== user_response){
      this.losed=true;
    }
  }
}