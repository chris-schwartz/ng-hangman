import { Component, OnInit, Input } from '@angular/core';
import { LetterGuessComponent } from '../letter-guess/letter-guess.component';
import { HangmanGameService } from '../hangman-game.service';

@Component({
  selector: 'app-puzzle',
  templateUrl: './puzzle.component.html',
  styleUrls: ['./puzzle.component.css']
})
export class PuzzleComponent implements OnInit {

  // @Input() puzzle : string[] = [];
  // @Input() solvedLetters : string[] = [];

  constructor(private gameService: HangmanGameService) { }

  ngOnInit() {
  }

  displayPuzzle() {
    let display = []
    let letters = this.gameService.solution.split('')
    for (let puzzleLetter of letters) {
      if (this.gameService.correctGuesses.includes(puzzleLetter)) {
        display.push(puzzleLetter)
      } else {
        display.push("_ ")
      }
    }
    return display.join(" ");
  }

}
