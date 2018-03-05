import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SidebarComponent} from './sidebar.component';
import {PowerBarComponent} from '../power-bar/power-bar.component';

describe('SidebarComponent', () => {
    let component: SidebarComponent;
    let fixture: ComponentFixture<SidebarComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SidebarComponent, PowerBarComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SidebarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should emit longlat string value from a vehicle object', (done) => {
        const vehicle = {
            istanceToCNDCC: 3708,
            icon: 'http://cdn1.iconfinder.com/data/icons/astronomy-filled-line/614/4262_-_Vehicle-64.png',
            lat: 55.103903349543785,
            long: -138.7333326580172,
            model: 'Rover TX 5',
            name: 'Heuvos Rancheros',
            power_level_percent: 38,
            vehicle_id: 0
        };

        const longLat = `${vehicle.lat},${vehicle.long}`;

        component.locateVehicle.subscribe(val => {
            expect(val).toEqual(longLat);
            done();
        });
        component.selectVehicle(vehicle);
    });
});
