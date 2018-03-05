import {Component, OnInit, ViewChild } from '@angular/core';
import {environment} from '../environments/environment';
import {VehicleService} from './services/vehicle';

import { CommandCentre } from './models/command-centre.model';

@Component({
    selector: 'cnd-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    // Reference to the moon-map component
    @ViewChild('cndMoonMap') cndMoonMap;
    title = 'MOON BUGGY NEXT DOOR';

    // TODO: Both are the same list of vehicles and need swapping to an observable
    // which may fix the rendering vs component viewing issue
    vehicles = [];
    vehiclesRender = [];

    // List of icons could be component that retrieves components from a remote/local source
    icons = {
        vehicle: 'http://cdn1.iconfinder.com/data/icons/astronomy-filled-line/614/4262_-_Vehicle-64.png',
        base: 'http://cdn2.iconfinder.com/data/icons/space-flat/512/space_house-01-64.png'
    };

    // Construct the CND command centre from the environment config
    commandCentre: CommandCentre = {
        lat: environment.COMMAND_CENTRE_LAT,
        long: environment.COMMAND_CENTRE_LONG,
        icon: this.icons['base']
    };

    constructor(private vehicleService: VehicleService) {
        console.log('AppComponent');

        // Subscribe to the VehicleService and pull down all the vehicles (this could either be changed keep retrieving
        // vehicles until it 404s, or a separate endpoint that returns all vehicles could serve the app instead
        for (let i = 0; i <= 5; i++) {
            this.vehicleService.get(i)
                .subscribe(data => {
                    // Create a new vehicle object to include the icon and distance to the CND Command centre
                    const vehicle = {
                        ...data,
                        icon: this.icons['vehicle'],
                        distanceToCNDCC: Math.floor(this.calculateDistance(data, this.commandCentre))
                    };

                    // TODO: Use an observable (push method works for HTML rendering / concat enables components to receive
                    // each vehicle as it arrives from the http request
                    this.vehiclesRender.push(vehicle);
                    return this.vehicles = [].concat(vehicle);
                });
        }

    }

    ngOnInit() {
    }

    /**
     * Jumps to a location on a map after being supplied with a latlong string from an emitted event
     * (either from clicking on a vehicle or from entering a string into the search box)
     * @param event
     */
    onLatLongLocate(event) {
        this.cndMoonMap.locate(event);
    }

    /**
     * Gets the distance between two latlong points by supplying a vehicle and commandcentre object
     * @param vehicle
     * @param commandCentre
     * @returns {number}
     */
    calculateDistance(vehicle, commandCentre) {
        const latlong1 = { lat1: vehicle.lat, lon1: vehicle.long };
        const latlong2 = { lat2: commandCentre.lat, lon2: commandCentre.long };

        return this.cndMoonMap.getDistanceFromLatLonInKm(latlong1, latlong2);
    }


}
