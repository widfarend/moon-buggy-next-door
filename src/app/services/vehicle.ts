import { Injectable } from '@angular/core';
// import {Http, Headers, RequestOptions} from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class VehicleService {
    constructor(private http: HttpClient) {

    }

    getAll() {
        // while (!complete) {
            this.http.get(`${environment.VEHICLE_API_BASE_URL}/0/locate.json`)
                .subscribe(results => console.log(results));
        // }

    }

    get(vehicleId: number) {
        return this.http.get(`${environment.VEHICLE_API_BASE_URL}/${vehicleId}/locate.json`);
    }
}
