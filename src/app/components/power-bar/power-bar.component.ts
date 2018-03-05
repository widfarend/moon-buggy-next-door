import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'cnd-power-bar',
    templateUrl: './power-bar.component.html',
    styleUrls: ['./power-bar.component.css']
})
export class PowerBarComponent implements OnInit {
    @Input('powerLevel') powerLevel: number;

    constructor() {
    }

    ngOnInit() {
        console.log(this.powerLevel);
    }

    getRed(level) {
        return Number(level) <= 20;
    }

    getAmber(level) {
        return (Number(level) > 20 && Number(level) <= 70);
    }

    getGreen(level) {
        return Number(level) > 70;
    }

}
