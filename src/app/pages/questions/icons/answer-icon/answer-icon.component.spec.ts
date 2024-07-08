import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerIconComponent } from './answer-icon.component';

describe('AnswerIconComponent', () => {
  let component: AnswerIconComponent;
  let fixture: ComponentFixture<AnswerIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnswerIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnswerIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
