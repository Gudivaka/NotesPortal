import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';

// Importing Custom Components
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule  } from "./material.module";

import 'hammerjs';
import { ContactDashboardComponent } from './components/contact-dashboard/contact-dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactDashboardComponent
  ],
  imports: [
    BrowserModule,    
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
