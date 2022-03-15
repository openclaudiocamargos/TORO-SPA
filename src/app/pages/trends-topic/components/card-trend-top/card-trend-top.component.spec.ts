import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTrendTopComponent } from './card-trend-top.component';

describe('CardTrendTopComponent', () => {
  let component: CardTrendTopComponent;
  let fixture: ComponentFixture<CardTrendTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardTrendTopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTrendTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
