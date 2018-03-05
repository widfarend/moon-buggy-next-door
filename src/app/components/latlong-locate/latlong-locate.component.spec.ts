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
});
