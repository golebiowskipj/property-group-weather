import React, { Component } from 'react';
import styles from './styles/WeatherDetailsView.module.scss';
import { RouteComponentProps } from 'react-router-dom';

interface IState {
    loading: boolean;
}

interface IMatchParams {
    city: string;
}


export class WeatherDetailsView extends Component<RouteComponentProps<IMatchParams>, IState> {
    render() {
        return (
            <section className={`${styles.details}`}>

            </section>
        )
    }
}
