import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [ 
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],

  declarations: [
    AppComponent,
    NavbarComponent,
    routingComponents
  ],

  bootstrap: [ AppComponent ]
})
export class AppModule { }
