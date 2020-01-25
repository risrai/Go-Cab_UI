import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarsComponent } from './navbars/navbars.component';
import { RiderComponent } from './rider/rider.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarsComponent,
    RiderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
