import React from 'react';
import { shallow } from 'enzyme';
import Header  from '../../components/Header';

test('should render Header correctly', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
})

test('should open modal on button click', () => {
    const wrapper = shallow(<Header />);
    wrapper.find('.header__button').simulate('click');
    expect(wrapper.state('showModal')).toBe(true);
});