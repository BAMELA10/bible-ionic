import { Component, OnInit } from '@angular/core';
import { SearchServiceService } from './search-service.service';


@Component({
  selector: 'app-search-verse-form',
  templateUrl: './search-verse-form.page.html',
  styleUrls: ['./search-verse-form.page.scss'],
})



export class SearchVerseFormPage implements OnInit {
  public verse = {
    book : undefined,
    chapter : undefined,
    verse : undefined
  }
  
  noString = ""
  bibleBooks = [
    "Genesis", "Exodus", "Leviticus","Numbers","Deuteronomy","Joshua","Judges","Ruth","1 Samuel",
    "2 Samuel","1 Kings","2 Kings","1 Chronicles","2 Chronicles","Ezra","Nehemiah","Esther","Job",
    "Psalms","Proverbs","Ecclesiastes","Song of Solomon","Isaiah","Jeremiah","Lamentations","Ezekiel",
    "Daniel","Hosea","Joel","Amos","Obadiah","Jonah","Micah","Nahum","Habakkuk","Zephaniah","Haggai",
    "Zechariah","Malachi","Matthew","Mark","Luke","John","Acts","Romans","1 Corinthians","2 Corinthians",
    "Galatians","Ephesians","Philippians","Colossians","1 Thessalonians","2 Thessalonians","1 Timothy",
    "2 Timothy","Titus","Philemon","Hebrews","James","1 Peter","2 Peter","1 John","2 John","3 John",
    "Jude","Revelation"
  ]

  public references: unknown;
  public text : unknown;
  public error :unknown

  constructor(public api:SearchServiceService) {}
  public getbook() {
    return this.verse.book
  }
  public getchapter() {
    return this.verse.chapter
  }
  public getverse() {
    return  this.verse.verse
  }
  

  public getValue() {
    const book = this.getbook()
    const chapter = this.getchapter()
    const verse = this.getverse()

    if (!book || chapter == null || verse == null) {

      this.references = "Error"
      this.text = "Please give all the information for the search"
    } else if (chapter <= 0 || verse <= 0) {

        this.references = "Error"
        this.text = "Chapter and verse must be the positive number"
    } else {

      this.api.getVerse(book, chapter,  verse)
      .subscribe(result => {
        this.error = ""
        console.log(this.error)
        console.log(result)
        this.references = Object.values(result)[0]
        this.text = Object.values(result)[2]
      }, 
      (error)=>{
        console.log(this.error)
        error = "Internet connection failed"
        this.error = error;
        
      })
    }
    
    
  }

  ngOnInit() {
  }

}
