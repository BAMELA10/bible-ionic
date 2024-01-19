import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchVerseFormPage } from './search-verse-form.page';

describe('SearchVerseFormPage', () => {
  let component: SearchVerseFormPage;
  let fixture: ComponentFixture<SearchVerseFormPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SearchVerseFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
