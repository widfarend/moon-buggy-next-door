import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

// App Components
import { MoonMapComponent } from './components/moon-map/moon-map.component';
import { LatlongLocateComponent } from './components/latlong-locate/latlong-locate.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PowerBarComponent } from './components/power-bar/power-bar.component';

// Services
import { VehicleService } from './services/vehicle';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MoonMapComponent,
        LatlongLocateComponent,
        SidebarComponent,
        PowerBarComponent
      ],
      providers: [ VehicleService ],
      imports: [
            HttpClientModule
        ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'MOON BUGGY NEXT DOOR'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('MOON BUGGY NEXT DOOR');
  }));

  it('should get a distance between two points in km', async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;

      const expected = 3708.8021195972046;

      const commandCentre = {
          'lat': 0.6814,
          'long': 23.46055,
          'icon': 'http://cdn2.iconfinder.com/data/icons/space-flat/512/space_house-01-64.png'
      };

      const vehicle = {
          'vehicle_id': 0,
          'lat': 55.103903349543785,
          'long': -138.7333326580172,
          'name': 'Heuvos Rancheros',
          'model': 'Rover TX 5',
          'power_level_percent': 31,
          'icon': 'http://cdn1.iconfinder.com/data/icons/astronomy-filled-line/614/4262_-_Vehicle-64.png',
      };

      const km = app.calculateDistance(vehicle, commandCentre);
      expect(km).toEqual(expected);
  }));
});
