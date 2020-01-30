import React, { Component } from 'react'
import { connect } from 'react-redux';
import { AppState } from '../../store';
import { INotFoundViewProps } from './interfaces/INotFoundViewProps';
import styles from './styles/NotFoundView.module.scss';
import { isLoading } from '../../store/loading/actions';

class NotFoundView extends Component<INotFoundViewProps> {
    componentDidMount = () => {
        this.props.isLoading({ loading: false })
    }

    render() {
        return (
            <section className={styles.notFoundView}>
                <div className={styles.notFoundView__display}>
                    <p className='f-text'>We couldn't find the weather for {this.props.city.city ? this.props.city.city : 'your'} city.</p>
                    <p className='f-text'>Do you want to try again?</p>
                </div>
            </section>
        )
    }
}

const mapStateToProps = (state: AppState) => ({
    city: state.city,
    loading: state.loading
})

export default connect(mapStateToProps, { isLoading })(NotFoundView);
