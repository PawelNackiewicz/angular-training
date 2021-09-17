import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { DashboardComponent } from './cars/dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { CarItemComponent } from './cars/car-item/car-item.component';
import { AddCarComponent } from './cars/add-car/add-car.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DashboardComponent,
    CarItemComponent,
    AddCarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, CommonModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
