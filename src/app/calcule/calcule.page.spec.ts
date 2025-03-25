import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalculePage } from './calcule.page';

describe('CalculePage', () => {
  let component: CalculePage;
  let fixture: ComponentFixture<CalculePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
