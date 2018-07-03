import { Component, OnInit, Input } from '@angular/core';
import { LetterGuessComponent } from '../letter-guess/letter-guess.component';

@Component({
  selector: 'app-puzzle',
  templateUrl: './puzzle.component.html',
  styleUrls: ['./puzzle.component.css']
})
export class PuzzleComponent implements OnInit {

  @Input() puzzle : string[] = [];
  @Input() solvedLetters : string[] = [];

  constructor() { }

  ngOnInit() {
  }

  displayPuzzle() {
    let display = []

    for (let puzzleLetter of this.puzzle) {
      if(this.solvedLetters.includes(puzzleLetter)) {
        display.push(puzzleLetter)
      } else {
        display.push("_ ")
      }
    }
    return display.join(" ");
  }

}
