import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class VehicleService {
    constructor(private http: HttpClient) {

    }

    get(vehicleId: number) {
        return this.http.get(`${environment.VEHICLE_API_BASE_URL}${vehicleId}/locate.json`);
    }
}
