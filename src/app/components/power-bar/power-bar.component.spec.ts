import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerBarComponent } from './power-bar.component';

describe('PowerBarComponent', () => {
  let component: PowerBarComponent;
  let fixture: ComponentFixture<PowerBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowerBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return true when getRed value is less than 21', () => {
    const isRed = 15;

    const result = component.getRed(isRed);
    expect(result).toBeTruthy();
  });

  it('should return false when getRed value is more than 20', () => {
    const moreThanRed = 88;

    const result = component.getRed(moreThanRed);
    expect(result).toBeFalsy();
  });

  it('should return true when getAmber value is more than 20 and less than 71', () => {
    const isYellow = 25;

    const result = component.getAmber(isYellow);
    expect(result).toBeTruthy();
  });

  it('should return false when getAmber value is less than 21', () => {
    const lessThanYellow = 15;

    const result = component.getAmber(lessThanYellow);
    expect(result).toBeFalsy();
  });

  it('should return false when getAmber value is more than 70', () => {
    const moreThanYellow = 88;

    const result = component.getAmber(moreThanYellow);
    expect(result).toBeFalsy();
  });

  it('should return true when getGreen value is more than 70', () => {
      const isGreen = 75;

      const result = component.getGreen(isGreen);
      expect(result).toBeTruthy();
  });

  it('should return false when getGreen value is less than 71', () => {
      const lessThanGreen = 12;

      const result = component.getGreen(lessThanGreen);
      expect(result).toBeFalsy();
  });
});
