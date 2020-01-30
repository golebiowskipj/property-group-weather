import React, { Component } from 'react';
import styles from './styles/WeatherDetailsView.module.scss';
import { WeatherDisplay } from './components/weatherDisplay/WeatherDisplay';
import { connect } from 'react-redux';
import { AppState } from '../../store';
import { IWeatherDetailsViewProps } from './interfaces/IWeatherDetailsViewProps';

class WeatherDetailsView extends Component<IWeatherDetailsViewProps> {
    render() {
        return (
            <section className={`${styles.details}`}>
                <WeatherDisplay
                    loading={this.props.loading.loading}
                    city={this.props.city.city}
                    description={this.props.weather.weather_descriptions[0]}
                    temperature={this.props.weather.temperature}
                    feelslike={this.props.weather.feelslike}
                    icon={this.props.weather.weather_icons[0]} />
                <WeatherDisplay
                    loading={this.props.loading.loading}
                    city={this.props.compareWeather.city}
                    description={this.props.compareWeather.weather_descriptions[0]}
                    temperature={this.props.compareWeather.temperature}
                    feelslike={this.props.compareWeather.feelslike}
                    icon={this.props.compareWeather.weather_icons[0]} />
            </section>
        )
    }
}

const mapStateToProps = (state: AppState) => ({
    loading: state.loading,
    city: state.city,
    weather: state.weather,
    compareWeather: state.compareWeather
})

export default connect(mapStateToProps)(WeatherDetailsView);
