import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoonMapComponent } from './moon-map.component';

describe('MoonMapComponent', () => {
  let component: MoonMapComponent;
  let fixture: ComponentFixture<MoonMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoonMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoonMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get a distance between two points in km', () => {
    const expected = 3708.8021195972046;
    const latLong1 = { lat1: 55.103903349543785, lon1: -138.7333326580172 };
    const latLong2 = { lat2: 0.681400, lon2: 23.460550 };

    const km = component.getDistanceFromLatLonInKm(latLong1, latLong2);
    expect(km).toEqual(expected);
  });
});
