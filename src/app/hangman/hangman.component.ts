import { Component, OnInit, Input } from '@angular/core';
import { HangmanGameService } from '../hangman-game.service';

@Component({
  selector: 'app-hangman',
  templateUrl: './hangman.component.html',
  styleUrls: ['./hangman.component.css']
})
export class HangmanComponent implements OnInit {


  constructor(private gameService: HangmanGameService) { }

  ngOnInit() {
  }

  getImagePath() {
    const index = Math.min(this.gameService.wrongGuesses.length, 6);
    return "assets/" + index + ".jpg"
  }

}
