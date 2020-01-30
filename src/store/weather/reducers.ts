import { IReduxWeatherState, WEATHER, WeatherActionTypes, IReduxCompareWeatherState, COMPARE_WEATHER, CompareWeatherActionTypes } from './types';

const initialState: IReduxWeatherState = {
    temperature: undefined,
    weather_icons: [],
    weather_descriptions: [],
    feelslike: undefined
}

const initialCompareState: IReduxCompareWeatherState = {
    temperature: 0,
    weather_icons: [],
    weather_descriptions: [],
    feelslike: 0,
    city: ''
}

export const weatherReducer = (state = initialState, action: WeatherActionTypes): IReduxWeatherState => {
    switch (action.type) {
        case WEATHER:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export const compareWeatherReducer = (state = initialCompareState, action: CompareWeatherActionTypes): IReduxCompareWeatherState => {
    switch (action.type) {
        case COMPARE_WEATHER:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}