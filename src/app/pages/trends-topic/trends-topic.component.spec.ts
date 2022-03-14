import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendsTopicComponent } from './trends-topic.component';

describe('TrendsTopicComponent', () => {
  let component: TrendsTopicComponent;
  let fixture: ComponentFixture<TrendsTopicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendsTopicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendsTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
