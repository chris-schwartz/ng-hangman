import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HangmanGameService {

  solution: string;

  wrongGuesses = []
  correctGuesses = [];
  gameWon = false;
  gameOver = false;

  constructor() { }

  setSolution(solution: string) {
    this.solution = solution.toUpperCase();
  }

  processGuess(guessString: string) {
    let guess = guessString.charAt(0).toUpperCase();
    if(this.solution.includes(guess)) {
      this.correctGuesses.push(guess);
    } else {
      this.wrongGuesses.push(guess);
    }

    this.gameWon = new Set(this.solution).size == this.correctGuesses.length;
    this.gameOver = this.gameWon || this.wrongGuesses.length >= 6;
  }

  resetGame() {
    this.gameWon = false;
    this.gameOver = false;
    this.wrongGuesses = []
    this.correctGuesses = []
  }

}
