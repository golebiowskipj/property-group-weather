import { IReduxLoadingState } from "../../../store/loading/types";
import { IReduxCityState } from "../../../store/city/types";
import { IReduxWeatherState, IReduxCompareWeatherState } from "../../../store/weather/types";

export interface IWeatherDetailsViewProps {
    loading: IReduxLoadingState;
    city: IReduxCityState;
    weather: IReduxWeatherState;
    compareWeather: IReduxCompareWeatherState;
}
