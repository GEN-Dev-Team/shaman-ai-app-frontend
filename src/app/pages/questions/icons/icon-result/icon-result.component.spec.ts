import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconResultComponent } from './icon-result.component';

describe('IconResultComponent', () => {
  let component: IconResultComponent;
  let fixture: ComponentFixture<IconResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconResultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IconResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
