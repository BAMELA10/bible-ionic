import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrintDayPage } from './print-day.page';

describe('PrintDayPage', () => {
  let component: PrintDayPage;
  let fixture: ComponentFixture<PrintDayPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PrintDayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
