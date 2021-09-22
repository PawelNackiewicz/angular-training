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
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { reducer } from './cars/+cars/cars.reducer';
import { simpleReducer } from './simple.reducer';

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
    // StoreModule.forRoot({message: simpleReducer}),
    StoreModule.forRoot({cars: reducer}),
    // Instrumentation must be imported after importing StoreModule (config is optional)
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
