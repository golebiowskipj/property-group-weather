import React, { Component, ChangeEvent } from 'react'
import { InputField } from '../../../components/inputField/InputField';
import styles from './styles/CitySearchForm.module.scss';
import { SubmitButton } from '../../../components/submitButton/SubmitButton';
import { historyHelper } from '../../../helpers/historyHelper';

interface IState {
    citySearch: string;
    cityHasErrors: boolean;
    formValid: boolean;
}

export class CitySearchForm extends Component<{}, IState> {
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
            historyHelper.push(`/city/${this.state.citySearch}`);
        }
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
                <SubmitButton>
                    Search
                </SubmitButton>


            </form >
        )
    }
}
