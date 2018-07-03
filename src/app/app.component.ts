import { Component, Input } from '@angular/core';
import { GuessesComponent } from './guesses/guesses.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  puzzleSolution = ['A', 'N', 'G', 'U', 'L', 'A', 'R']

  incorrectGuesses: string[] = [];
  correctGuesses: string[] = [];

  onGuessMade(newGuess: string) {
    if (this.correctGuesses.includes(newGuess) || this.incorrectGuesses.includes(newGuess)) {
      // do nothing, guess was already made...
      return
    }

    if (this.puzzleSolution.includes(newGuess)) {
      this.correctGuesses.push(newGuess)
    } else {
      this.incorrectGuesses.push(newGuess)
    }
  }

}
