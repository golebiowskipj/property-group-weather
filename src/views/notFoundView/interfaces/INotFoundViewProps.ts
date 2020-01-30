import { IReduxLoadingState } from './../../../store/loading/types';
import { IReduxCityState } from './../../../store/city/types';
import { isLoading } from '../../../store/loading/actions';
export interface INotFoundViewProps {
    city: IReduxCityState;
    loading: IReduxLoadingState;
    isLoading: typeof isLoading;
}

