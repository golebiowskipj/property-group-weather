
import { IReduxCityState, CITY, CityActionTypes } from './types';

const initialState: IReduxCityState = {
    city: ''
}

export const cityReducer = (state = initialState, action: CityActionTypes) => {
    switch (action.type) {
        case CITY:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}