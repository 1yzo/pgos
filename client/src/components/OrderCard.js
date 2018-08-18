import React from 'react';
import moment from 'moment';

const OrderCard = ({ name, brewMethod, shipDate, cases, packetsPerCase, notes, priority, ...props }) => (
    <div className="order-card" style={{background: props.index % 2 === 0 ? '#fff' : '#eee'  }}>
        <div>{name}</div>
        <div>{brewMethod}</div>
        <div>{cases}</div>
        <div>{packetsPerCase}</div>
        <div className="order-card__date">
            <div>{moment(shipDate).format('MM/DD/YYYY')}</div>
            {priority && <div className="order-card__star">*</div>}
        </div>
        <div className="order-card__number">#57120</div>
        <i className="material-icons">remove_red_eye</i>
    </div>
);

export default OrderCard;