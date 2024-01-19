import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RandomVerseDayPage } from './random-verse-day.page';

describe('RandomVerseDayPage', () => {
  let component: RandomVerseDayPage;
  let fixture: ComponentFixture<RandomVerseDayPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RandomVerseDayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
