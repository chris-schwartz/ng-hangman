import { Component, Input, OnInit } from '@angular/core';
import { GuessesComponent } from './guesses/guesses.component';
import { HangmanGameService } from './hangman-game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HangmanGameService]
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private gameService : HangmanGameService) {
  }

  ngOnInit() {
    this.gameService.setSolution("ANGULAR");
  }

}
