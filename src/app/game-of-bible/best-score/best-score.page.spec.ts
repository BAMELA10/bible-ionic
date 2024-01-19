import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BestScorePage } from './best-score.page';

describe('BestScorePage', () => {
  let component: BestScorePage;
  let fixture: ComponentFixture<BestScorePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BestScorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
