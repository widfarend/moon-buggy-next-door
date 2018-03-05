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
    @ViewChild('cndMoonMap') cndMoonMap;
    title = 'MOON BUGGY NEXT DOOR';
    vehicles = [];
    vehiclesRender = [];
    icons = {
        vehicle: 'http://cdn1.iconfinder.com/data/icons/astronomy-filled-line/614/4262_-_Vehicle-64.png',
        base: 'http://cdn2.iconfinder.com/data/icons/space-flat/512/space_house-01-64.png'
    };
    commandCentre: CommandCentre = {
        lat: environment.COMMAND_CENTRE_LAT,
        long: environment.COMMAND_CENTRE_LONG,
        icon: this.icons['base']
    };

    constructor(private vehicleService: VehicleService) {
        console.log('AppComponent');

        for (let i = 0; i <= 5; i++) {
            this.vehicleService.get(i)
                .subscribe(vehicle => {
                    this.vehiclesRender.push({...vehicle, icon: this.icons['vehicle']});
                    return this.vehicles = [].concat({...vehicle, icon: this.icons['vehicle']});
                });
        }

    }

    ngOnInit() {


    }

    onLatLongLocate(event) {
        this.cndMoonMap.locate(event);
    }


}
