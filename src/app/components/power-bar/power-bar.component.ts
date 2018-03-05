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

    // UI specific functions for altering battery bar colours

    /**
     * Returns true if power level is 20 or below
     * @param level
     * @returns {boolean}
     */
    getRed(level) {
        return Number(level) <= 20;
    }

    /**
     * Returns true if power level is between 21 and 70
     * @param level
     * @returns {boolean}
     */
    getAmber(level) {
        return (Number(level) > 20 && Number(level) <= 70);
    }

    /**
     * Returns true if power level is above 70
     * @param level
     * @returns {boolean}
     */
    getGreen(level) {
        return Number(level) > 70;
    }

}
