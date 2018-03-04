import {Component, OnInit} from '@angular/core';

declare const google: any;

@Component({
    selector: 'cnd-moon-map',
    templateUrl: './moon-map.component.html',
    styleUrls: ['./moon-map.component.css']
})
export class MoonMapComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
        this.initMap();
    }

    initMap() {
        console.log(google);
        const map = new google.maps.Map(document.getElementById('gmap'), {
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

        map.mapTypes.set('moon', moonMapType);
        map.setMapTypeId('moon');
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

}
