import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hangman',
  templateUrl: './hangman.component.html',
  styleUrls: ['./hangman.component.css']
})
export class HangmanComponent implements OnInit {
  @Input("failedAttempts") failures: any;

  constructor() { }

  ngOnInit() {
  }

  getImagePath() {
    const index = Math.min(this.failures, 6);
    return "assets/" + index + ".jpg"
  }

}
