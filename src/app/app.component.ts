import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { environment} from '../environments/environment';
import { VehicleService} from './services/vehicle';

@Component({
  selector: 'cnd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges {

  title = 'Moon Buggy Next Door';
  vehicles = [];
  icons = {
    vehicle: 'http://cdn1.iconfinder.com/data/icons/astronomy-filled-line/614/4262_-_Vehicle-64.png',
    base: 'https://cdn2.iconfinder.com/data/icons/space-flat/512/space_house-01-64.png'
  };
  commandCentre: { lat: number, long: number, icon: string} = {
      lat: environment.COMMAND_CENTRE_LAT,
      long: environment.COMMAND_CENTRE_LONG,
      icon: this.icons['base']
  };
  constructor(private vehicleService: VehicleService) {
    console.log('AppComponent');

    for (let i = 0; i <= 5; i++) {
        this.vehicleService.get(i)
            .subscribe(vehicle => {
              return this.vehicles = [].concat({...vehicle, icon: this.icons['vehicle']});
            });
    }

  }

  ngOnInit() {


  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }


}
