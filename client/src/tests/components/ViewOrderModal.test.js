import React from 'react';
import { shallow } from 'enzyme';
import ViewOrderModal from '../../components/ViewOrderModal';
import ordersFixture from '../fixtures/orders';

test('should render ViewOrderModal correctly', () => {
    const wrapper = shallow(<ViewOrderModal order={ordersFixture[0]}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should close modal on exit click', () => {
    const closeModal = jest.fn();
    const wrapper = shallow(<ViewOrderModal order={ordersFixture[0]} closeModal={closeModal} />);
    wrapper.find('.exit').simulate('click');
    expect(closeModal).toHaveBeenCalled();
})