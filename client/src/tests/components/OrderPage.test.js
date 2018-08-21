import React from 'react';
import { shallow } from 'enzyme';
import OrderPage from '../../components/OrderPage';

test('should render OrderPage correctly', () => {
    const wrapper = shallow(<OrderPage />);
    expect(wrapper).toMatchSnapshot();
});