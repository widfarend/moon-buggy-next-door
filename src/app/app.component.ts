import { Component, OnInit } from '@angular/core';

import { VehicleService} from './services/vehicle';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'cnd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Moon Buggy Next Door';
  vehicles = [];
  lat = 51.678418;
  lng = 7.809007;
  constructor(private vehicleService: VehicleService) {
    console.log('AppComponent');
    // this.vehicleService.getAll();
    for (let i = 0; i <= 5; i++) {
        this.vehicleService.get(i)
            .subscribe(vehicle => this.vehicles.push(vehicle));
    }
  }

  ngOnInit() {


  }


}
