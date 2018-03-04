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
});
