import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private carService: CarService) {}

  ngOnInit(): void {}

  cars = this.carService.getCars();

  deleteCar(id: string) {
    this.carService.removeCar(id);
    this.cars = this.carService.getCars();
  }

  addNewCar(carForm: any) {
    this.carService.addCar(carForm);
  }
}
