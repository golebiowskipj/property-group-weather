import React, { Component, ChangeEvent } from 'react'
import { InputField } from '../../../components/inputField/InputField';
import styles from './styles/CitySearchForm.module.scss';
import { SubmitButton } from '../../../components/submitButton/SubmitButton';
import { historyHelper } from '../../../helpers/historyHelper';
import { getWeatherForCity, getCompareWeather } from '../../../apiCalls/weatherApi';
import { connect } from 'react-redux';
import { AppState } from '../../../store';

import { IReduxCityState } from '../../../store/city/types';
import { whatCity } from '../../../store/city/actions';

import { IReduxLoadingState } from '../../../store/loading/types';
import { isLoading } from '../../../store/loading/actions';

interface IState {
    citySearch: string;
    cityHasErrors: boolean;
    formValid: boolean;
}

interface ICitySearchFormProps {
    city: IReduxCityState;
    loading: IReduxLoadingState;
    whatCity: typeof whatCity;
    isLoading: typeof isLoading;
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
            this.getWeatherForCity(this.state.citySearch);
        }
    }

    getCompareWeather = async (city: string) => {
        await getCompareWeather(city)
            // TODO: ERROR HANDLING, TYPES FOR RESPONSES
            .catch((error: any) => console.error(error))
            .then((res: any) => {
                console.log(res)
            })
    }

    getWeatherForCity = async (city: string) => {
        this.props.isLoading({ loading: true })
        // TODO: MOVE API KEY TO BACKEND
        await getWeatherForCity(city)
            // TODO: ERROR HANDLING, TYPES FOR RESPONSES
            .catch((error: any) => {
                console.error(error)
                this.props.isLoading({ loading: false })
            })
            .then((res: any) => {
                this.props.isLoading({ loading: false })
                historyHelper.push(`/city/${this.state.citySearch}`);
                this.getCompareWeather(city)
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
    city: state.city,
    loading: state.loading
})

export default connect(mapStateToProps, { whatCity, isLoading })(CitySearchForm);


