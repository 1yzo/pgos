import React from 'react';
import { shallow } from 'enzyme';
import { PageNumberLink } from '../../components/PageNumberLink';

test('should render PagNumberLink correctly', () => {
    const wrapper = shallow(<PageNumberLink />);
    expect(wrapper).toMatchSnapshot();
})