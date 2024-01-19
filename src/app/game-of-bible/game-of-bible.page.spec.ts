import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GameOfBiblePage } from './game-of-bible.page';

describe('GameOfBiblePage', () => {
  let component: GameOfBiblePage;
  let fixture: ComponentFixture<GameOfBiblePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GameOfBiblePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
