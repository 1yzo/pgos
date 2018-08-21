import React from 'react';
import { shallow } from 'enzyme';
import OrderCard from '../../components/OrderCard';
import ordersFixture from '../fixtures/orders';

test('should render OrderCard correctly', () => {
    const wrapper = shallow(<OrderCard order={ordersFixture[0]} />)
    expect(wrapper).toMatchSnapshot(); 
});

test('should select order on click', () => {
    const selectOrder = jest.fn();
    const wrapper = shallow(<OrderCard order={ordersFixture[0]} selectOrder={selectOrder} />)
    wrapper.find('i').simulate('click');
    expect(selectOrder).toBeCalledWith({ ...ordersFixture[0] })
})