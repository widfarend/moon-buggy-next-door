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
});
