import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipContainerComponent } from './tip-container.component';

describe('TipContainerComponent', () => {
  let component: TipContainerComponent;
  let fixture: ComponentFixture<TipContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TipContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
