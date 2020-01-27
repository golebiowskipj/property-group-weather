import React, { Component } from 'react';
import bg from '../../images/main-background.jpg';
import bgPoor from '../../images/main-background-poor.jpg';
import styles from './styles/HomeView.module.scss';

export class HomeView extends Component {
    state = {
        src: null,
    }

    componentDidMount = () => {
        const imageLoader = new Image();
        imageLoader.src = bg;

        imageLoader.onload = () => {
            this.setState({ src: bg })
        }
    }
    render() {
        return (
            <>
                <section className={styles.sectionBackground} style={{ backgroundImage: this.state.src ? `url(${this.state.src}` : `url(${bgPoor}` }}>
                    <article className={styles.headersContainer}>
                        <h3 className={`f-h3`}>Do you want to know if you need an umbrella?</h3>
                        <h2 className={`f-h2`}>Type a city name and check the weather in a second!</h2>
                    </article>
                </section>
            </>
        )
    }
}
