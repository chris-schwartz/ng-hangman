import { TestBed, inject } from '@angular/core/testing';

import { HangmanGameService } from './hangman-game.service';

describe('HangmanGameService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HangmanGameService]
    });
  });

  it('should be created', inject([HangmanGameService], (service: HangmanGameService) => {
    expect(service).toBeTruthy();
  }));

  it('should track wrong guesses', inject([HangmanGameService], (service: HangmanGameService) => {
    service.setSolution("ANGULAR");

    service.processGuess("a");
    service.processGuess("N");
    service.processGuess("Z");
    service.processGuess("Q")
    service.processGuess("t");

    expect(service.wrongGuesses).toContain("Z", "Q");
    expect(service.wrongGuesses).not.toContain("A","N");

  }));

  it('should track correct guesses', inject([HangmanGameService], (service: HangmanGameService) => {
    service.setSolution("ANGULAR");

    service.processGuess("Z");
    service.processGuess("a");
    service.processGuess("N");
    service.processGuess("Q")

    expect(service.correctGuesses).not.toContain("Z", "Q");
    expect(service.correctGuesses).toContain("A","N");

  }));

  it('should detect when game is won', inject([HangmanGameService], (service: HangmanGameService) => {
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

  it('should detect when game is lost', inject([HangmanGameService], (service: HangmanGameService) => {
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

  it('should reset game state', inject([HangmanGameService], (service: HangmanGameService) => {
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
