/* tslint:disable:no-unused-variable */

import {TestBed, async, inject, getTestBed} from '@angular/core/testing';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

import {VehicleService} from './vehicle';


describe('VehicleService', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [VehicleService],
            imports: [
                HttpClientModule,
                HttpClientTestingModule
            ]
        });
    });

    afterEach(inject([HttpTestingController], (backend: HttpTestingController) => {
        backend.verify();
    }));

    it('should create the vehicle service', inject([VehicleService], (vehicleService: VehicleService) => {
        expect(vehicleService).toBeTruthy();
    }));

    it(`should emit 'true' for 200 Ok`, async(inject([VehicleService, HttpTestingController],
        (service: VehicleService, backend: HttpTestingController) => {
            service.get(0).subscribe((next) => {
                expect(next).toBeTruthy();
            });

            backend.expectOne('http://cndlunarlocator.herokuapp.com/vehicles/0/locate.json').flush({
                'vehicle_id': 0,
                'lat': 10.665965995524271,
                'long': -77.82476276245926,
                'name': 'Heuvos Rancheros',
                'model': 'Rover TX 5',
                'power_level_percent': 53
            }, {status: 200, statusText: 'Ok'});
        })));


});
