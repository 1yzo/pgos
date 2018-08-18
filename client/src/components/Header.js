import React from 'react';
import moment from 'moment';
import '../styles/header.css';

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="header__title">BLUE BOTTLE COFFEE</div>
                <div className="header__container">
                    <div className="header__date">
                        <div>{moment().format('MMM').toUpperCase()}</div>
                        <div className="header__date__day">{moment().format('DD')}</div>
                    </div>
                    <div className="header__subtitle">Perfectly Ground Work Orders</div>
                    <button className="header__button">CREATE ORDER</button>
                </div>
            </div>
        );
    }
}

export default Header;