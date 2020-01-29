import { LOADING, IReduxLoadingState, LoadingActionTypes } from './types';

const initialState: IReduxLoadingState = {
    loading: false
}

export const loadingReducer = (state = initialState, action: LoadingActionTypes): IReduxLoadingState => {
    switch (action.type) {
        case LOADING: {
            return {
                ...state,
                ...action.payload
            }
        }
        default:
            return state;
    }
}