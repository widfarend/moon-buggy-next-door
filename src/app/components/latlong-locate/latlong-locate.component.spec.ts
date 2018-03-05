import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatlongLocateComponent } from './latlong-locate.component';

describe('LatlongLocateComponent', () => {
  let component: LatlongLocateComponent;
  let fixture: ComponentFixture<LatlongLocateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatlongLocateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatlongLocateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit longlat string value', (done) => {
      const longLat = '0.1617, -12.473';

      component.latlongLocate.subscribe(val => {
          expect(val).toEqual(longLat);
          done();
      });
      component.findLocation(longLat);
  });
});
