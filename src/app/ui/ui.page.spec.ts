import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiPage } from './ui.page';

describe('UiPage', () => {
  let component: UiPage;
  let fixture: ComponentFixture<UiPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
