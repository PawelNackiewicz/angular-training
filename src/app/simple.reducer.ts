import { Action } from "@ngrx/store"

export function simpleReducer(state: string = 'Hello world', action: Action) {
    console.log(action.type, state);

    switch(action.type) {
        case 'PL':
            return state = 'pl' 
        case 'EN': 
            return state = 'en'
        default: 
            return state
    }
}