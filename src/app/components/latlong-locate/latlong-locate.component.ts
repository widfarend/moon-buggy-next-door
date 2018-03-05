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

  findLocation(value) {
    console.log('Clicked', value);
    this.latlongLocate.emit(value);
  }
}
