import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { DashboardComponent } from './cars/dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { CarItemComponent } from './cars/car-item/car-item.component';
import { AddCarComponent } from './cars/add-car/add-car.component';
import { ApiComponent } from './api/api/api.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DashboardComponent,
    CarItemComponent,
    AddCarComponent,
    ApiComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
