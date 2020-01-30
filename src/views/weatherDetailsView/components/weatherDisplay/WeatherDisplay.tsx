import React, { Component } from 'react'
import { connect } from 'react-redux';
import { AppState } from '../../../../store';
import { IReduxLoadingState } from '../../../../store/loading/types';
import { IReduxCityState } from '../../../../store/city/types';
import { IReduxWeatherState, IReduxCompareWeatherState } from '../../../../store/weather/types';
import { Loader } from '../../../components/loader/Loader';


interface IWeatherDisplayProps {
    loading: IReduxLoadingState;
    city: IReduxCityState;
    weather: IReduxWeatherState;
    compareWeather: IReduxCompareWeatherState;
}


class WeatherDisplay extends Component<IWeatherDisplayProps> {
    render() {
        return (
            <div>
                {this.props.loading.loading ?
                    <Loader />
                    :
                    <div>{this.props.weather.feelslike}</div>
                }
            </div>
        )
    }
}

const mapStateToProps = (state: AppState) => ({
    loading: state.loading,
    city: state.city,
    weather: state.weather,
    compareWeather: state.compareWeather
})


export default connect(mapStateToProps)(WeatherDisplay);



