import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HangmanComponent } from './hangman/hangman.component';
import { PuzzleComponent } from './puzzle/puzzle.component';
import { GuessesComponent } from './guesses/guesses.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HangmanComponent,
    PuzzleComponent,
    GuessesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
