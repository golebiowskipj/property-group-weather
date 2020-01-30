import React from 'react';
import styles from './styles/Loader.module.scss';

export const Loader = () => {
    return (
        <div className={`${styles.lds_ripple}`}><div></div><div></div></div>
    )
}
