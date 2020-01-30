import React, { Component } from 'react'
import { Loader } from '../../../components/loader/Loader';
import styles from './styles/WeatherDisplay.module.scss';
import { IWeatherDisplayProps } from './interfaces/IWeatherDisplayProps';

export class WeatherDisplay extends Component<IWeatherDisplayProps> {
    render() {
        return (
            <div className={styles.weatherDisplay}>
                {this.props.loading ?
                    <Loader />
                    :
                    <>
                        <div className={styles.weatherDisplay__table}>
                            <h6 className={`f-text ${styles.weatherDisplay__header}`}>{this.props.city.toUpperCase()}</h6>
                            <p className={`f-text ${styles.weatherDisplay__descr}`}>{this.props.description}</p>
                            {this.props.temperature
                                ?
                                <p className={`f-text ${styles.weatherDisplay_temp}`}>{this.props.temperature}&deg;C (feels like {this.props.feelslike}&deg;C )</p>
                                :
                                <p></p>
                            }
                        </div>
                        <img className={styles.weatherDisplay__icon} src={this.props.icon} alt={this.props.description} />
                    </>
                }
            </div>
        )
    }
}


