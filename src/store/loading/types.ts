export interface IReduxLoadingState {
    loading: boolean;
}

export const LOADING = 'LOADING';

interface IReduxLoadingAction {
    type: typeof LOADING;
    payload: IReduxLoadingState;
}

export type LoadingActionTypes = IReduxLoadingAction;