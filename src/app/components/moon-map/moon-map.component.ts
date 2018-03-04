import {Component, OnInit, ElementRef, ViewChild, Input, OnChanges, SimpleChanges } from '@angular/core';

declare const google: any;

@Component({
    selector: 'cnd-moon-map',
    templateUrl: './moon-map.component.html',
    styleUrls: ['./moon-map.component.css']
})
export class MoonMapComponent implements OnInit, OnChanges {
    @ViewChild('gmap') gmap: ElementRef;
    @Input('dataPoints') dataPoints: any = [];
    @Input('commandCentre') commandCentre: any = [];
    private map: any;

    constructor() {

    }

    ngOnInit() {
        this.initMap();
        console.log(JSON.stringify(this.commandCentre));
        this.addBase(this.commandCentre);
    }

    ngOnChanges(changes: SimpleChanges) {
        // console.log(changes.dataPoints);

        if (changes['dataPoints']) {
            this.addDataPoints(changes.dataPoints.currentValue);
        }

    }

    initMap() {
        // console.log(google);

        this.map = new google.maps.Map(this.gmap.nativeElement, {
            center: {lat: 0, lng: 0},
            zoom: 2,
            streetViewControl: false,
            mapTypeControlOptions: {
                mapTypeIds: ['moon']
            }
        });

        const getNormalizedCoord = this.getNormalizedCoord;
        const moonMapType = new google.maps.ImageMapType({
            getTileUrl: function (coord, zoom) {
                const normalizedCoord = getNormalizedCoord(coord, zoom);
                if (!normalizedCoord) {
                    return null;
                }
                const bound = Math.pow(2, zoom);
                return '//mw1.google.com/mw-planetary/lunar/lunarmaps_v1/clem_bw' +
                    '/' + zoom + '/' + normalizedCoord.x + '/' +
                    (bound - normalizedCoord.y - 1) + '.jpg';
            },
            tileSize: new google.maps.Size(256, 256),
            maxZoom: 9,
            minZoom: 0,
            radius: 1738000,
            name: 'Moon'
        });

        this.map.mapTypes.set('moon', moonMapType);
        this.map.setMapTypeId('moon');
    }

    getNormalizedCoord(coord, zoom) {
        const y = coord.y;
        let x = coord.x;

        // tile range in one direction range is dependent on zoom level
        // 0 = 1 tile, 1 = 2 tiles, 2 = 4 tiles, 3 = 8 tiles, etc
        const tileRange = 1 << zoom;

        // don't repeat across y-axis (vertically)
        if (y < 0 || y >= tileRange) {
            return null;
        }

        // repeat across x-axis
        if (x < 0 || x >= tileRange) {
            x = (x % tileRange + tileRange) % tileRange;
        }

        return {x: x, y: y};
    }

    addDataPoints(dataPoints: any) {
        console.log(dataPoints);

        dataPoints.forEach((dataPoint) => {
            const point = {lat: dataPoint.lat, lng: dataPoint.long};
            const marker = new google.maps.Marker({
                position: point,
                map: this.map,
                icon: dataPoint.icon
            });
        });
    }

    addBase(base: any) {
        this.addDataPoints([].concat(base));
    }

}
