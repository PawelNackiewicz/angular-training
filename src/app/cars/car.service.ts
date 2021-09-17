import { Injectable } from '@angular/core';

export interface ICar {
  id: string,
  brand: string;
  name: string;
  mileage: number;
  status: 'AVAILABLE' | 'RENTED' | 'REPAIRING';
}

const mockCars: ICar[] = [
  {
    id: '1',
    brand: 'Audi',
    name: 'A3',
    mileage: 1000,
    status: 'AVAILABLE',
  },
  {
    id: '2',
    brand: 'Audi',
    name: 'A4',
    mileage: 2000,
    status: 'RENTED',
  },
  {
    id: '3',
    brand: 'Audi',
    name: 'A5',
    mileage: 3000,
    status: 'REPAIRING',
  },
];

@Injectable({
  providedIn: 'root',
})
export class CarService {
  constructor() {}

  cars = mockCars;

  getCars() {
    return this.cars;
  }

  removeCar(id: string) {
    this.cars = this.cars.filter(car => car.id !== id)
    console.log(id);
    console.log(this.cars);
  }

  addCar(car: Omit<ICar, "id">) {
    const newCar: ICar = {
      id: new Date().toString(),
      brand: car.brand,
      name: car.name,
      mileage: car.mileage,
      status: car.status
    }
    this.cars.push(newCar);
  }
}
