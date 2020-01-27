import React, { Component } from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { HomeView } from './homeView/HomeView';
import { WeatherDetailsView } from './weatherDetailsView/WeatherDetailsView';
import { NotFoundView } from './notFoundView/NotFoundView';
import { Routes } from '../common/routes';
import { historyHelper } from '../helpers/historyHelper';

export class MainView extends Component {
    render() {
        return (
            <Router history={historyHelper}>
                <Switch>
                    <Route exact path={Routes.mainView}>
                        <HomeView />
                    </Route>
                    <Route exact path={Routes.weatherDetailsView}>
                        <WeatherDetailsView />
                    </Route>
                    <Route exact path={Routes.cityNotFound}>
                        <NotFoundView />
                    </Route>
                    <Redirect from="*" to={Routes.mainView} />
                </Switch>
            </Router>
        )
    }
}
