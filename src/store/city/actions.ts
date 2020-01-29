import { IReduxCityState, CITY } from "./types";


export const whatCity = (city: IReduxCityState) => {
    return {
        type: CITY,
        payload: city
    }
}