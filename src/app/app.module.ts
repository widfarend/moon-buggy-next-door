import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule } from '@angular/common/http';


import { VehicleService } from './services/vehicle';

import { AppComponent } from './app.component';
import {AgmCoreModule} from '@agm/core';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
        apiKey: 'AIzaSyAP6BWd4tyVbX1AZAbAsOZ8PXuvKO7mLU8'
    })
  ],
  providers: [ VehicleService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
