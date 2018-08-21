import React from 'react';
import { shallow } from 'enzyme';
import { DashboardPage } from '../../components/DashboardPage';

let history, wrapper;

beforeEach(() => {
    history = { push: jest.fn() }
    wrapper = shallow(<DashboardPage history={history} />)
});

test('should render DashboardPage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});