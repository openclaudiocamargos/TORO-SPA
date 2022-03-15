import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardUserPositionComponent } from './card-user-position.component';

describe('CardPositionComponent', () => {
  let component: CardUserPositionComponent;
  let fixture: ComponentFixture<CardUserPositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardUserPositionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardUserPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
