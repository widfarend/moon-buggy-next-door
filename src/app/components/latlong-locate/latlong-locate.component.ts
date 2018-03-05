import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cnd-latlong-locate',
  templateUrl: './latlong-locate.component.html',
  styleUrls: ['./latlong-locate.component.css']
})
export class LatlongLocateComponent implements OnInit {
  @Output('latlongLocate') latlongLocate: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

    /**
     * Emits an event whenever a user enters a latlong string into the search box and hits enter
     * or clicks the locate button
     * @param value
     */
  findLocation(value) {
    this.latlongLocate.emit(value);
  }
}
