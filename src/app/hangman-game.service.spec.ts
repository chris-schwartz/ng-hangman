import { TestBed, inject } from '@angular/core/testing';

import { HangmanGameServiceService } from './hangman-game-service.service';
import { empty } from '../../node_modules/rxjs';

describe('HangmanGameServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HangmanGameServiceService]
    });
  });

  it('should be created', inject([HangmanGameServiceService], (service: HangmanGameServiceService) => {
    expect(service).toBeTruthy();
  }));

  it('should track wrong guesses', inject([HangmanGameServiceService], (service: HangmanGameServiceService) => {
    service.setSolution("ANGULAR");

    service.processGuess("a");
    service.processGuess("N");
    service.processGuess("Z");
    service.processGuess("Q")
    service.processGuess("t");

    expect(service.wrongGuesses).toContain("Z", "Q");
    expect(service.wrongGuesses).not.toContain("A","N");

  }));

  it('should track correct guesses', inject([HangmanGameServiceService], (service: HangmanGameServiceService) => {
    service.setSolution("ANGULAR");

    service.processGuess("Z");
    service.processGuess("a");
    service.processGuess("N");
    service.processGuess("Q")

    expect(service.correctGuesses).not.toContain("Z", "Q");
    expect(service.correctGuesses).toContain("A","N");

  }));

  it('should detect when game is won', inject([HangmanGameServiceService], (service: HangmanGameServiceService) => {
    service.setSolution("ANGULAR");

    service.processGuess("A");
    service.processGuess("n");
    service.processGuess("g");
    service.processGuess("u")
    service.processGuess("l")
    service.processGuess("r")

    expect(service.gameWon).toBeTruthy()
    expect(service.gameOver).toBeTruthy()
  }));

  it('should detect when game is lost', inject([HangmanGameServiceService], (service: HangmanGameServiceService) => {
    service.setSolution("ANGULAR");

    service.processGuess("z");
    service.processGuess("X");
    service.processGuess("Y");
    service.processGuess("q")
    service.processGuess("w")
    service.processGuess("a")
    service.processGuess("v")

    expect(service.gameWon).toBeFalsy()
    expect(service.gameOver).toBeTruthy()
  }));

  it('should reset game state', inject([HangmanGameServiceService], (service: HangmanGameServiceService) => {
    service.setSolution("ANGULAR");

    service.processGuess("z");
    service.processGuess("X");
    service.processGuess("Y");
    service.processGuess("q")
    service.processGuess("w")
    service.processGuess("a")
    service.processGuess("v")

    expect(service.gameWon).toBeFalsy()
    expect(service.gameOver).toBeTruthy()

    service.resetGame();

    expect(service.gameWon).toBeFalsy()
    expect(service.gameOver).toBeFalsy()
    expect(service.wrongGuesses).toEqual([])
    expect(service.correctGuesses).toEqual([])
  }));

});
