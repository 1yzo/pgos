import React from 'react';
import moment from 'moment';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

class CreateOrderForm extends React.Component {
    state = {
        name: '',
        brewMethod: '',
        shipDate: moment().toDate(),
        cases: 0,
        packetsPerCase: 25,
        notes: '',
        priority: false,
        formType: '',
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        const { formType, ...order } = this.state;
        if (this.state.name && this.state.brewMethod && this.state.shipDate && this.state.cases && this.state.packetsPerCase) {
            fetch('/orders/', {
                method: 'POST',
                body: JSON.stringify({ ...order, shipDate: moment(this.state.shipDate).valueOf() }),
                headers: { 'content-type': 'application/json' }
            })
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
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Coffee</label>
                    <input id="name" type="text" value={this.state.name} onChange={this.handleChange} />
                    <label>Brew Method</label>
                    <select id="brewMethod" onChange={this.handleChange}>
                        <option value="">Choose One</option>
                        <option value="Aeropress">Aeropress</option>
                        <option value="Coffee Maker">Coffee Maker</option>
                        <option value="Cold Brew">Cold Brew</option>
                        <option value="French Press">French Press</option>
                        <option value="Pour Over">Pour Over</option>
                    </select>
                    <label>Ship Date</label>
                    <DayPickerInput
                        value={this.state.shipDate} 
                        onDayChange={(shipDate) => this.setState(() => ({ shipDate }))}
                    />
                    <label>Number of Cases</label>
                    <input
                        id="cases"
                        type="text"
                        value={this.state.cases}
                        onChange={this.handleChange}
                    />
                    <label>Packets per Case</label>
                    <select id="packetsPerCase" onChange={this.handleChange}>
                        <option value={25}>25</option>
                        <option value={50}>50</option>
                    </select>
                    <label>Notes</label>
                    <textarea id="notes" value={this.state.notes} onChange={this.handleChange} />
                    <input id="priority" type="checkbox" onChange={this.handlePriorityChange} />
                    <label htmlFor="priority">Priority</label>
                    <button>Submit Work Order</button>
                </form>
            </div>
        )
    }
}

export default CreateOrderForm;