import { IReduxLoadingState } from './../../../store/loading/types';
import { IReduxCityState } from './../../../store/city/types';
export interface INotFoundViewProps {
    city: IReduxCityState;
    loading: IReduxLoadingState;
}

