import { IReduxWeatherState, IReduxCompareWeatherState, WEATHER, COMPARE_WEATHER } from "./types";

export const whatWeather = (weather: IReduxWeatherState) => {
    return {
        type: WEATHER,
        payload: weather
    }
}

export const compareWeather = (weather: IReduxCompareWeatherState) => {
    return {
        type: COMPARE_WEATHER,
        payload: weather
    }
}