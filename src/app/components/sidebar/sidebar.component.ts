import {Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'cnd-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
    // The list of vehicles
    @Input('vehicles') vehicles: any = [];

    // Used to jump to selected vehicle on the map
    @Output('locateVehicle') locateVehicle: EventEmitter<any> = new EventEmitter();
    constructor() {
    }

    ngOnInit() {
    }

    /**
     * Emits an event to allow app to pan and zoom to selected vehicle on the map
     * @param event
     */
    selectVehicle(event) {
        // console.log(event);
        this.locateVehicle.emit(`${event.lat},${event.long}`);
    }

}
