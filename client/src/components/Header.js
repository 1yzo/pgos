import React from 'react';
import moment from 'moment';
import '../styles/header.css';
import CreateOrderForm from './CreateOrderForm';

class Header extends React.Component {
    state = { showModal: false };
    
    openModal = () => {
        this.setState(() => ({ showModal: true }));
    };

    closeModal = () => {
        this.setState(() => ({ showModal: false }));
    };

    render() {
        return (
            <div className="header">
                <div className="header__title">BLUE BOTTLE COFFEE</div>
                <div className="header__container">
                    <div className="header__date">
                        <div className="header__date__month">{moment().format('MMM').toUpperCase()}</div>
                        <div className="header__date__day">{moment().format('DD')}</div>
                    </div>
                    <div className="header__subtitle">Perfectly Ground Work Orders</div>
                    <button className="header__button" onClick={this.openModal}>CREATE ORDER</button>
                    </div>
                <CreateOrderForm showModal={this.state.showModal} closeModal={this.closeModal}/>
            </div>
        );
    }
}

export default Header;