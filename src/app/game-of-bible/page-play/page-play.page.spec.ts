import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PagePlayPage } from './page-play.page';

describe('PagePlayPage', () => {
  let component: PagePlayPage;
  let fixture: ComponentFixture<PagePlayPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PagePlayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
