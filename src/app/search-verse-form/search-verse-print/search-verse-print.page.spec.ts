import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchVersePrintPage } from './search-verse-print.page';

describe('SearchVersePrintPage', () => {
  let component: SearchVersePrintPage;
  let fixture: ComponentFixture<SearchVersePrintPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SearchVersePrintPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
