import React from 'react';
import { shallow } from 'enzyme';
import { CreateOrderForm } from '../../components/CreateOrderForm';
import ordersFixture from '../fixtures/orders';

test('should render CreateOrderForm correctly', () => {
    const wrapper = shallow(<CreateOrderForm />);
    expect(wrapper).toMatchSnapshot();
});

test('should set name on input change', () => {
    const value = 'New name';
    const id = 'name';
    const wrapper = shallow(<CreateOrderForm />);
    wrapper.find('#name').simulate('change', {
        target: { value , id }
    });
    expect(wrapper.state('name')).toBe(value);
});

test('should set brewMethod on input change', () => {
    const value = 'new brewMethod';
    const id = 'brewMethod';
    const wrapper = shallow(<CreateOrderForm />);
    wrapper.find('#brewMethod').simulate('change', {
        target: { value, id }
    });
    expect(wrapper.state('brewMethod')).toBe(value);
});

test('should set shipDate on date picker change', () => {
    const value = new Date();
    const id = 'shipDate';
    const wrapper = shallow(<CreateOrderForm />);
    wrapper.find('DayPickerInput').prop('onDayChange')(value);
    expect(wrapper.state('shipDate')).toEqual(value);
});

test('should set cases on input change', () => {
    const value = 10;
    const id = 'cases';
    const wrapper = shallow(<CreateOrderForm />);
    wrapper.find('#cases').simulate('change', {
        target: { value, id }
    });
    expect(wrapper.state('cases')).toBe(value);
});

test('should set packetsPerCase on select change', () => {
    const value = 50;
    const id = 'packetsPerCase';
    const wrapper = shallow(<CreateOrderForm />);
    wrapper.find('#packetsPerCase').simulate('change', {
        target: { value, id }
    });
    expect(wrapper.state('packetsPerCase')).toBe(value);
});

test('should set notes on textarea change', () => {
    const value = 'New notes';
    const id = 'notes';
    const wrapper = shallow(<CreateOrderForm />);
    wrapper.find('#notes').simulate('change', {
        target: { value, id }
    });
    expect(wrapper.state('notes')).toBe(value);
});

// test('should clear form after successful form submit', () => {
//     const closeModal = jest.fn();
//     const wrapper = shallow(<CreateOrderForm closeModal={closeModal} />);
//     wrapper.setState({ ...ordersFixture[0] });
//     wrapper.find('form').simulate('submit', {
//         preventDefault: () => { }
//     });
//     expect(closeModal).toHaveBeenCalled();
// });