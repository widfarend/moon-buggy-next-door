import {Component, OnInit, ElementRef, ViewChild, Input, OnChanges, SimpleChanges } from '@angular/core';
import {environment} from '../../../environments/environment';

declare const google: any;

import { CommandCentre } from '../../models/command-centre.model';

@Component({
    selector: 'cnd-moon-map',
    templateUrl: './moon-map.component.html',
    styleUrls: ['./moon-map.component.css']
})
export class MoonMapComponent implements OnInit, OnChanges {
    // Reference to the google map element
    @ViewChild('gmap') gmap: ElementRef;

    // Vehicle datapoints
    @Input('dataPoints') dataPoints: any = [];

    // The CND Command Centre
    @Input('commandCentre') commandCentre: CommandCentre = { lat: 0, long: 0, icon: '' };

    // The map!
    private map: any;

    constructor() {

    }

    ngOnInit() {
        try {
            // Intialise the map so it appears on screen
            this.initMap();

            // Add the command centre as a datapoint on the map
            this.addBase(this.commandCentre);
        } catch (error) {
            console.log(error);
        }

    }

    ngOnChanges(changes: SimpleChanges) {
        // Add a new vehicle to the map as it is added
        if (changes['dataPoints']) {
            this.addDataPoints(changes.dataPoints.currentValue);
        }

    }

    /**
     * Sets up the map as per google maps api docs
     * https://developers.google.com/maps/documentation/javascript/examples/maptype-image
     */
    initMap() {
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

    /**
     *
     * @param coord
     * @param zoom
     * @returns {any}
     */
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

    /**
     * Adds any type of data point to the map with an icon (if supplied)
     * @param dataPoints
     */
    addDataPoints(dataPoints: any) {
        // console.log(dataPoints);

        dataPoints.forEach((dataPoint) => {
            const point = {lat: dataPoint.lat, lng: dataPoint.long};
            const marker = new google.maps.Marker({
                position: point,
                map: this.map,
                icon: dataPoint.icon
            });
        });
    }

    /**
     * Adds the command centre as a datapoint on the map
     * @param base
     */
    addBase(base: any) {
        this.addDataPoints([].concat(base));
    }

    /**
     * Pans and zooms to a specific lat long
     * @param latlong
     */
    locate(latlong) {
        const [ lat, long ] = latlong.split(',');
        if (!isNaN(lat) && !isNaN(long)) {
            this.map.panTo(new google.maps.LatLng( Number(lat), Number(long) ));
            this.map.setZoom(12);

        }
    }

    /**
     * Uses the Haversine formula to calculate distance from here:
     * https://en.wikipedia.org/wiki/Haversine_formula
     * @param latlong1
     * @param latlong2
     * @returns {number}
     */
    getDistanceFromLatLonInKm(latlong1, latlong2) {
        const { lat1, lon1 } = latlong1;
        const { lat2, lon2 } = latlong2;

        const R = environment.MOON_RADIUS; // Radius of the moon in km
        const dLat = this.deg2rad(lat2 - lat1);  // deg2rad below
        const dLon = this.deg2rad(lon2 - lon1);
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2)
        ;
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c; // Distance in km
    }

    /**
     * Converts degrees to radius
     * @param deg
     * @returns {number}
     */
    deg2rad(deg) {
        return deg * (Math.PI / 180);
    }

}
