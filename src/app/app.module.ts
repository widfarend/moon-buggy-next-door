import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule } from '@angular/common/http';


import { VehicleService } from './services/vehicle';

import { AppComponent } from './app.component';
import { MoonMapComponent } from './components/moon-map/moon-map.component';
import { LatlongLocateComponent } from './components/latlong-locate/latlong-locate.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';


@NgModule({
  declarations: [
    AppComponent,
    MoonMapComponent,
    LatlongLocateComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ VehicleService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
