import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterGuessComponent } from './letter-guess.component';

describe('LetterGuessComponent', () => {
  let component: LetterGuessComponent;
  let fixture: ComponentFixture<LetterGuessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetterGuessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetterGuessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
