import React, { Component } from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { HomeView } from './homeView/HomeView';
import { WeatherDetailsView } from './weatherDetailsView/WeatherDetailsView';
import NotFoundView from './notFoundView/NotFoundView';
import { Routes } from '../common/routes';
import { historyHelper } from '../helpers/historyHelper';
import styles from './MainView.module.scss';
import CitySearchForm from './components/citySearchForm/CitySearchForm';
import { AppLogo } from './components/appLogo/AppLogo';


export class MainView extends Component {
    private heightRef = React.createRef<HTMLDivElement>();

    state = {
        height: '100vh',
    }

    componentDidMount = () => {
        this.calculateMainHeight();
    }
    // TODO: add event listner on window resize (with debouncing) to adjust height without page reload
    calculateMainHeight = () => {
        this.setState({
            height: `${window.innerHeight - this.heightRef.current!.clientHeight}px`
        })
    }

    render() {
        return (
            <>
                <header ref={this.heightRef} className={styles.s_header}>
                    <AppLogo />
                    <CitySearchForm />
                </header>
                <main className={styles.s_main} style={{ height: this.state.height }}>
                    <Router history={historyHelper}>
                        <Switch>
                            <Route exact path={Routes.mainView}>
                                <HomeView />
                            </Route>
                            <Route exact path={Routes.weatherDetailsView} render={(params) => <WeatherDetailsView {...params} />} />

                            <Route exact path={Routes.cityNotFound}>
                                <NotFoundView />
                            </Route>
                            <Redirect from="*" to={Routes.mainView} />
                        </Switch>
                    </Router>
                </main>
            </>
        )
    }
}
