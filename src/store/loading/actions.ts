import { IReduxLoadingState, LOADING } from './types';

export const isLoading = (isLoading: IReduxLoadingState) => {
    return {
        type: LOADING,
        payload: isLoading
    }
}
