import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WelcomeAppPage } from './welcome-app.page';

describe('WelcomeAppPage', () => {
  let component: WelcomeAppPage;
  let fixture: ComponentFixture<WelcomeAppPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(WelcomeAppPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
