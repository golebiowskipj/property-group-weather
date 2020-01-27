import React from 'react'
import { ISubmitButton } from './interfaces/ISubmitButton';
import styles from './styles/SubmitButton.module.scss';

export const SubmitButton = ({ children }: ISubmitButton) => {
    return (
        <button
            className={`f-text__semibold ${styles.button}`}
            type="submit"
        >
            {children}
        </button>
    )
}
