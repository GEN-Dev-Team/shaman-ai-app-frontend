import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarsIconComponent } from './bars-icon.component';

describe('BarsIconComponent', () => {
  let component: BarsIconComponent;
  let fixture: ComponentFixture<BarsIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarsIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BarsIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
