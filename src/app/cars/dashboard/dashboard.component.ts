import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { removeCar } from '../+cars/cars.actions';
import { AppState, selectAvailableCars, selectCars } from '../+cars/cars.selector';
import { CarService, ICar } from '../car.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  constructor(private store: Store<AppState>, private carService: CarService) {
    this.cars$ = this.store.select(selectCars);
    this.avCars$ = this.store.select(selectAvailableCars);
  }

  cars$: Observable<ICar []>;

  avCars$: Observable<ICar[]>;

  deleteCar(id: string) {
    this.store.dispatch(removeCar({carId: id}))
  }
}
