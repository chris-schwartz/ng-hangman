import { Component, OnInit, Input } from '@angular/core';
import { HangmanGameService } from '../hangman-game.service';

@Component({
  selector: 'app-guesses',
  templateUrl: './guesses.component.html',
  styleUrls: ['./guesses.component.css']
})
export class GuessesComponent implements OnInit {

  constructor(private gameService : HangmanGameService) { }

  ngOnInit() {
  }

  formattedGuesses() {
    return this.gameService.wrongGuesses.join(", ")
  }

}
