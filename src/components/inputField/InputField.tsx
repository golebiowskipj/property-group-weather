import React from 'react'
import { IInputField } from './interfaces/IInputField';
import styles from './styles/InputField.module.scss';

export const InputField = ({ name, type, value, label, placeholder, width, handleOnChange, hasErrors }: IInputField) => {
    return (
        <>
            <div className={styles.inputContainer}>
                {label ? <label>{label}</label> : null}
                <input
                    className={`f-text ${styles.input}`}
                    name={name}
                    type={type}
                    value={value}
                    placeholder={placeholder ? placeholder : ''}
                    style={{ width: width ? width : '', border: hasErrors ? '1px solid red' : '' }}
                    onChange={handleOnChange}
                />
            </div>

        </>
    )
}
