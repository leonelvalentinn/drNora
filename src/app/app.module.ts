import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { NgFor } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { TratamientosComponent } from './tratamientos/tratamientos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    ServiciosComponent,
    TratamientosComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgFor],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
