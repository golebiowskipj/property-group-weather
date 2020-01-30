import React, { Component } from 'react';
import styles from './styles/WeatherDetailsView.module.scss';
import WeatherDisplay from './components/weatherDisplay/WeatherDisplay';



export class WeatherDetailsView extends Component {
    render() {
        return (
            <section className={`${styles.details}`}>
                <WeatherDisplay />
            </section>
        )
    }
}
