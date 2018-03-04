/* tslint:disable:no-unused-variable */

import { TestBed, async, inject, getTestBed } from '@angular/core/testing';
import { VehicleService } from './vehicle';

describe('HelperService', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [VehicleService]
        });
    });

    describe('Construct', () => {
        it('should create the vehicle service', inject([VehicleService], (vehicleService: VehicleService) => {
            expect(vehicleService).toBeTruthy();
        }));
    });

    // Testing GET
    describe('GET()', () => {
        it('should retrieve a vehicle (get)', async(() => {
            const mockResponse = {
                'vehicle_id': 0,
                'lat': 6.312901439820531,
                'long': -100.20081893866667,
                'name': 'Heuvos Rancheros',
                'model': 'Rover TX 5',
                'power_level_percent': 69
            };

        }));
    });

});