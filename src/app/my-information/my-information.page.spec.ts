import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyInformationPage } from './my-information.page';

describe('MyInformationPage', () => {
  let component: MyInformationPage;
  let fixture: ComponentFixture<MyInformationPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MyInformationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
