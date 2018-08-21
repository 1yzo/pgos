import React from 'react';
import ReactModal from 'react-modal';
import moment from 'moment';
import '../styles/order-view.css';

class ViewOrderModal extends React.Component {
    render() {
        const { order } = this.props; 
        return (
            <ReactModal
                className="order-view"
                isOpen={this.props.showModal}
            >
                <div className="exit" onClick={() => this.props.closeModal()}>X</div>
                <div className="order-view__section">
                    <div className="order-view__label">Coffee</div>
                    <div className="order-view__info">{order.name}</div>
                </div>
                <div className="order-view__section">
                    <div className="order-view__label">Brew Method</div>
                    <div className="order-view__info">{order.brewMethod}</div>
                </div>
                <div className="order-view__section">
                    <div className="order-view__label">Ship Date</div>
                    <div className="order-view__info">{moment(order.shipDate).format('MM/DD/YYYY')}</div>
                </div>
                <div className="order-view__section">
                    <div className="order-view__label">Number of Cases</div>
                    <div className="order-view__info">{order.cases}</div>
                </div>
                <div className="order-view__section">
                    <div className="order-view__label">Packets per Case</div>
                    <div className="order-view__info">{order.packetsPerCase}</div>
                </div>
                {order.notes &&
                <div className="order-view__section">
                    <div className="order-view__label order-view__label--notes">Notes</div>
                    <div className="order-view__info">{order.notes}</div>
                </div>}
            </ReactModal>
        );
    }
}

export default ViewOrderModal;