import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedAnswerIconComponent } from './selected-answer-icon.component';

describe('SelectedAnswerIconComponent', () => {
  let component: SelectedAnswerIconComponent;
  let fixture: ComponentFixture<SelectedAnswerIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectedAnswerIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectedAnswerIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
