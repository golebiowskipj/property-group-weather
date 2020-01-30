import { IReduxLoadingState } from "../../../../store/loading/types";

import { whatCity } from "../../../../store/city/actions";

import { isLoading } from "../../../../store/loading/actions";

import { whatWeather, compareWeather } from "../../../../store/weather/actions";

export interface ICitySearchFormProps {
    loading: IReduxLoadingState;
    whatCity: typeof whatCity;
    isLoading: typeof isLoading;
    whatWeather: typeof whatWeather;
    compareWeather: typeof compareWeather;
}