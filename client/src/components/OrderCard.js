import React from 'react';
import moment from 'moment';

const OrderCard = (props) => (
    <div className="order-card" style={{background: props.index % 2 === 0 ? '#fff' : '#eee'  }}>
        <div>{props.order.name}</div>
        <div>{props.order.brewMethod}</div>
        <div>{props.order.cases}</div>
        <div>{props.order.packetsPerCase}</div>
        <div className="order-card__date">
            <div>{moment(props.order.shipDate).format('MM/DD/YYYY')}</div>
            {props.order.priority && <div className="order-card__star">*</div>}
        </div>
        <div className="order-card__number">#57120</div>
        <i className="material-icons" onClick={() => props.selectOrder(props.order)}>remove_red_eye</i>
    </div>
);

export default OrderCard;