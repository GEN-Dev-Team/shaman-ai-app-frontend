import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipIconComponent } from './tip-icon.component';

describe('TipIconComponent', () => {
  let component: TipIconComponent;
  let fixture: ComponentFixture<TipIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TipIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
