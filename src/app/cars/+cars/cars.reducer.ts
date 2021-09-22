import { Action, createReducer, on } from '@ngrx/store';
import { ICar } from '../car.service';
import { addCar, removeCar } from './cars.actions';


export const initialState: ICar[] = [
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

const carReducer = createReducer(
  initialState,
  on(addCar, (state, { car }) => {
    console.log(car);
    console.log(state);
    
    return [...state, car]
  }),
  on(removeCar, (state, { carId }) =>{
     return state.filter(el => el.id !== carId)
  })
);

export function reducer(state: ICar[] | undefined, action: Action) {
  return carReducer(state, action);
}
