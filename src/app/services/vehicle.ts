import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

/**
 * VehicleService to perform HTTP requests to vehicle backend
 */
@Injectable()
export class VehicleService {
    constructor(private http: HttpClient) {

    }

    /**
     * Makes a GET request to obtain a single vehicle via its ID
     * @param {number} vehicleId
     * @returns {Observable<Object>}
     */
    get(vehicleId: number) {
        // TODO: Add error handling for 404s, etc
        return this.http.get(`${environment.VEHICLE_API_BASE_URL}${vehicleId}/locate.json`);
    }
}
