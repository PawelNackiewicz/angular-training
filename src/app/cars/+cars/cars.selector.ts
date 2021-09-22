import { ICar } from '../car.service';
 
export interface AppState {
  cars: ICar [];
}
 
export const selectCars = (state: AppState) => state.cars;

export const selectAvailableCars = (state: AppState) => state.cars.filter(car => car.status === 'AVAILABLE')