import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-letter-guess',
  templateUrl: './letter-guess.component.html',
  styleUrls: ['./letter-guess.component.css']
})
export class LetterGuessComponent implements OnInit {
  currentGuess = ""
  errorMessage = ""

  @Output("guess") guessEmitter = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onGuessChange(event: any) {
    const guess = event.target.value

    if (/^([A-z]{1})$/.test(guess)) {
      this.currentGuess = guess;
      this.errorMessage = ""
    } else if( guess === "") {
      this.currentGuess = "";
    } else {
      this.errorMessage = "Must enter a single letter for the guess"
    }
  }

  onGuessPressed() {
    this.guessEmitter.emit(this.currentGuess.toUpperCase())
    this.currentGuess=""
  }


}
