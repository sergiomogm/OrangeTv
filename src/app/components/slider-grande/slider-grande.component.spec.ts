import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderGrandeComponent } from './slider-grande.component';

describe('SliderGrandeComponent', () => {
  let component: SliderGrandeComponent;
  let fixture: ComponentFixture<SliderGrandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderGrandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderGrandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
