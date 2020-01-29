export interface IReduxCityState {
    city: string;
}

export const CITY = "CITY";

interface ICityAction {
    type: typeof CITY;
    payload: IReduxCityState;
}

export type CityActionTypes = ICityAction;