import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PuzzleComponent } from './puzzle/puzzle.component';
import { HangmanComponent } from './hangman/hangman.component';
import { LetterGuessComponent } from './letter-guess/letter-guess.component';
import { GuessesComponent } from './guesses/guesses.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        PuzzleComponent,
        HangmanComponent,
        LetterGuessComponent,
        GuessesComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
