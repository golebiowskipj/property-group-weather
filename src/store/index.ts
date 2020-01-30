import { weatherReducer, compareWeatherReducer } from './weather/reducers';
import { loadingReducer } from './loading/reducers';
import { cityReducer } from './city/reducers';
import thunkMiddleware from 'redux-thunk';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';


const rootReducer = combineReducers({
    loading: loadingReducer,
    city: cityReducer,
    weather: weatherReducer,
    compareWeather: compareWeatherReducer
})

export type AppState = ReturnType<typeof rootReducer>;

export const configureStore = () => {
    const middlewares = [thunkMiddleware];
    const middleWareEnhancer = applyMiddleware(...middlewares);

    const store = createStore(
        rootReducer,
        composeWithDevTools(middleWareEnhancer)
    )

    return store;
}