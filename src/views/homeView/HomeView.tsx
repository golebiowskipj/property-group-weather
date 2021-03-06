import React, { Component } from 'react';
import styles from './styles/HomeView.module.scss';
import bg from '../../images/home-bg.jpg';

export class HomeView extends Component {

    state = {
        isIE: false,
    }

    componentDidMount = () => {
        this.checkIfIsIe();
    }

    checkIfIsIe = () => {
        const isEdge = window.navigator.userAgent.indexOf('Edge') !== -1;
        const isIE = window.navigator.userAgent.indexOf('Trident') !== -1 && !isEdge;
        this.setState({ isIE });
    }
    render() {
        return (
            <>
                <section className={styles.s_split}>
                    <article className={`${styles.headersContainer} ${styles.s_split__left}`}>
                        <h3 className={`f-h3`}>Do you want to know if you need an umbrella?</h3>
                        <h2 className={`f-h2`}>Type a city name and check the weather in a second!</h2>
                    </article>
                    {/* TODO: image lazyloading */}
                    <article className={`${styles.s_split__right}`} style={{ backgroundImage: this.state.isIE ? '' : `url(${bg})`}}></article>
                </section>
            </>
        )
    }
}
