import { createAction, props } from '@ngrx/store';
import { ICar } from '../car.service';

export const addCar = createAction('[Car] Add Car', props<{ car: ICar }>());
export const removeCar = createAction('[Car] Remove Car', props<{ carId: string }>());
