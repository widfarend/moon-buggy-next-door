import {Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'cnd-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, OnChanges {
    @Input('vehicles') vehicles: any = [];
    @Output('locateVehicle') locateVehicle: EventEmitter<any> = new EventEmitter();
    constructor() {
    }

    ngOnInit() {
    }

    ngOnChanges(changes: SimpleChanges) {
        // console.log(changes.dataPoints);

        if (changes['vehicles']) {
            console.log(changes['vehicles'].currentValue);
        }

    }

    selectVehicle(event) {
        console.log(event);
        this.locateVehicle.emit(`${event.lat},${event.long}`);
    }

}
