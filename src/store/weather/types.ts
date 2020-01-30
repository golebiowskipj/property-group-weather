export interface IReduxWeatherState {
    temperature?: number;
    weather_icons: string[];
    weather_descriptions: string[];
    feelslike?: number;
}
export interface IReduxCompareWeatherState extends IReduxWeatherState {
    city: string;
}

export const WEATHER = "WEATHER";
export const COMPARE_WEATHER = "COMPARE_WEATHER";

interface IWeatherAction {
    type: typeof WEATHER;
    payload: IReduxWeatherState;
}

interface ICompareWeatherAction {
    type: typeof COMPARE_WEATHER;
    payload: IReduxCompareWeatherState;
}

export type WeatherActionTypes = IWeatherAction;
export type CompareWeatherActionTypes = ICompareWeatherAction;