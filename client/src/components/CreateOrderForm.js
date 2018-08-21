import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import ReactModal from 'react-modal';
import '../styles/order-form.css';
import { startSetPageCount } from '../actions/pageCount';
import { startSetPage } from '../actions/currentPage';

export class CreateOrderForm extends React.Component {
    state = {
        name: '',
        brewMethod: '',
        shipDate: moment().toDate(),
        cases: '',
        packetsPerCase: 25,
        notes: '',
        priority: false,
    }

    closeModal = () => {
        this.props.closeModal();
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        const order = this.state;
        if (this.state.name && this.state.brewMethod && this.state.shipDate && this.state.cases &&
            this.state.packetsPerCase && !isNaN(Number(this.state.cases))) {
            this.props.submitOrder(order, this.props.currentPageIndex)
            this.setState(() => ({
                name: '',
                brewMethod: '',
                shipDate: moment().toDate(),
                cases: '',
                packetsPerCase: 25,
                notes: '',
                priority: false
            }));
        } 
    }

    handleChange = (e) => {
        const field = e.target.id;
        const value = e.target.value;
        const nextState = { ...this.state };
        nextState[field] = value;
        this.setState(() => nextState);
    }
    
    handlePriorityChange = () => {
        this.setState((prevState) => ({ priority: !prevState.priority }));
    }
    
    render() {
        return (
            <ReactModal
                className="order-form"
                isOpen={this.props.showModal}
                contentLabel="Modal"
                closeTimeoutMS={300}
                shouldCLoseOnOverlayClick={true}
                shouldCloseOnEsc={true}
                ariaHideApp={false}
            >
                <form className="order-form__form"onSubmit={this.handleSubmit}>
                    <div className="exit" onClick={this.closeModal}>X</div>
                    <div className="order-form__info">Perfectly Ground Work Orders</div>
                    <div className="order-form__sub-info">
                        Instructional Text would go here - Lorem Ipsum dolor sit amet, consectetur ad
                        Ipsum dolor sit amet, consectetur ad
                        </div>
                    <div className="order-form__container">
                        <div className="order-form__section">
                            <label>Coffee</label>
                            <input id="name" type="text" value={this.state.name} onChange={this.handleChange} />
                        </div>
                        <div className="order-form__section">
                            <label>Brew Method</label>
                            <select id="brewMethod" onChange={this.handleChange}>
                                <option value="">Choose One</option>
                                <option value="Aeropress">Aeropress</option>
                                <option value="Coffee Maker">Coffee Maker</option>
                                <option value="Cold Brew">Cold Brew</option>
                                <option value="French Press">French Press</option>
                                <option value="Pour Over">Pour Over</option>
                            </select>
                        </div>
                    </div>
                    <div className="order-form__container">
                        <div className="order-form__section">
                            <label>Ship Date</label>
                            <DayPickerInput
                                value={this.state.shipDate} 
                                onDayChange={(shipDate) => this.setState(() => ({ shipDate }))}
                            />
                        </div>
                        <div className="order-form__section">
                            <label>Number of Cases</label>  
                            <input
                                id="cases"
                                type="text"
                                value={this.state.cases}
                                onChange={this.handleChange}
                                placeholder='#'
                            />
                        </div>
                        <div className="order-form__section">
                            <label>Packets per Case</label>
                            <select id="packetsPerCase" onChange={this.handleChange}>
                                <option value={25}>25</option>
                                <option value={50}>50</option>
                            </select>
                        </div>
                    </div>
                    <label>Notes</label>
                    <textarea id="notes" value={this.state.notes} onChange={this.handleChange} />
                    <div style={{ marginBottom: '2rem' }}>
                        <input id="priority" type="checkbox" onChange={this.handlePriorityChange} />
                        <label htmlFor="priority">Priority</label>
                    </div>
                    <button>Submit Work Order</button>
                </form>
            </ReactModal>
        )
    }
}

const mapStateToProps = (state) => ({
    currentPageIndex: Number(state.currentPage.index),
    pageCount: state.pageCount
});

const mapDispatchToProps = (dispatch, props) => ({
    submitOrder: (order, currentPageIndex) => {
        fetch('/orders/', {
            method: 'POST',
            body: JSON.stringify({ ...order, shipDate: moment(order.shipDate).valueOf() }),
            headers: { 'content-type': 'application/json' }
        })
            .then(() => {
                dispatch(startSetPageCount()); 
            })
            .then(() => {
                dispatch(startSetPage(currentPageIndex)).then(() => props.closeModal());
            });
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(CreateOrderForm);