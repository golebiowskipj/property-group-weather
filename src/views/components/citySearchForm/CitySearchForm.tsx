import React, { Component, ChangeEvent } from 'react'
import { InputField } from '../../../components/inputField/InputField';
import styles from './styles/CitySearchForm.module.scss';
import { SubmitButton } from '../../../components/submitButton/SubmitButton';

export class CitySearchForm extends Component {
    state = {
        citySearch: undefined,
    }
    handleSubmit = (e: React.FormEvent): void => {
        e.preventDefault();
        console.log('elo')
    }

    handleTextInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e);
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
                    hasErrors={false}
                />
                <SubmitButton>
                    Search
                </SubmitButton>


            </form >
        )
    }
}
