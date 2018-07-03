import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-guesses',
  templateUrl: './guesses.component.html',
  styleUrls: ['./guesses.component.css']
})
export class GuessesComponent implements OnInit {

  constructor() { }

  @Input("wrongLetters") incorrectGuesses = []

  ngOnInit() {
  }

  formattedGuesses() {
    return this.incorrectGuesses.join(", ")
  }

}
