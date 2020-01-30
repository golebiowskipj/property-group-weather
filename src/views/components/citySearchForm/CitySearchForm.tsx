import React, { Component, ChangeEvent } from 'react'
import { InputField } from '../../../components/inputField/InputField';
import styles from './styles/CitySearchForm.module.scss';
import { SubmitButton } from '../../../components/submitButton/SubmitButton';
import { historyHelper } from '../../../helpers/historyHelper';
import { getWeatherForCity, getCompareWeather } from '../../../apiCalls/weatherApi';
import { connect } from 'react-redux';
import { AppState } from '../../../store';

import { whatCity } from '../../../store/city/actions';

import { IReduxLoadingState } from '../../../store/loading/types';
import { isLoading } from '../../../store/loading/actions';


import { whatWeather } from '../../../store/weather/actions';

import { compareWeather } from '../../../store/weather/actions';
import { Routes } from '../../../common/routes';


interface IState {
    citySearch: string;
    cityHasErrors: boolean;
    formValid: boolean;
}

interface ICitySearchFormProps {
    loading: IReduxLoadingState;
    whatCity: typeof whatCity;
    isLoading: typeof isLoading;
    whatWeather: typeof whatWeather;
    compareWeather: typeof compareWeather;
}

class CitySearchForm extends Component<ICitySearchFormProps, IState> {
    state = {
        citySearch: '',
        cityHasErrors: false,
        formValid: false,
    }

    handleTextInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
        // TODO: prevent from typing numbers 
        this.setState({
            citySearch: e.target.value,
        }, () => {
            this.validateForm();
        });
    }

    cityNameValid = (): boolean => {
        return this.state.citySearch.length >= 2;
    }

    validateForm = (): void => {
        this.setState({ formValid: this.cityNameValid() })
    }

    showFormErrors = (): void => {
        this.setState({ cityHasErrors: !this.cityNameValid() })
    }

    handleSubmit = (e: React.FormEvent): void => {
        e.preventDefault();
        this.showFormErrors();

        if (this.state.formValid) {
            this.props.whatCity({ city: this.state.citySearch });
            this.getWeatherForCity(this.state.citySearch);
        }
    }

    getCompareWeather = async (city: string) => {
        await getCompareWeather(city)
            // TODO: ERROR HANDLING, TYPES FOR RESPONSES
            .catch((error: any) => console.error(error))
            .then((res: any) => {
                const data = res.current;

                this.props.compareWeather({
                    temperature: data.temperature,
                    weather_icons: data.weather_icons,
                    weather_descriptions: data.weather_descriptions,
                    feelslike: data.feelslike,
                    city: res.location.name
                })
            }
            )
    }

    getWeatherForCity = async (city: string) => {
        this.props.isLoading({ loading: true })
        historyHelper.push(`/city/${this.state.citySearch}`);
        // TODO: MOVE API KEY TO BACKEND
        await getWeatherForCity(city)
            // TODO: ERROR HANDLING, TYPES FOR RESPONSES
            .catch((error: any) => {
                console.error(error)
                this.props.isLoading({ loading: false })
            })
            .then((res: any) => {
                this.props.isLoading({ loading: false });

                if (res.success === false) {
                    historyHelper.push(`${Routes.cityNotFound}`);
                } else if (res.current) {
                    const data = res.current;

                    this.props.whatWeather({
                        temperature: data.temperature,
                        weather_icons: data.weather_icons,
                        weather_descriptions: data.weather_descriptions,
                        feelslike: data.feelslike
                    });

                    this.getCompareWeather(city);
                }
            })
    }

    render() {
        return (
            <form
                className={styles.form}
                onSubmit={this.handleSubmit}
            >
                <InputField
                    type="text"
                    name="citySearch"
                    value={this.state.citySearch}
                    placeholder='City...'
                    width='250px'
                    handleOnChange={this.handleTextInputChange}
                    hasErrors={this.state.cityHasErrors}
                />
                <SubmitButton
                    disabled={this.props.loading.loading}
                >
                    Search
                </SubmitButton>
            </form >
        )
    }
}

const mapStateToProps = (state: AppState) => ({
    loading: state.loading,
})

export default connect(mapStateToProps, { whatCity, isLoading, whatWeather, compareWeather })(CitySearchForm);


