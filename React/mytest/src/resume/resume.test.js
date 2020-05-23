import React from 'react';
import { shallow } from 'enzyme';
import Resume from './resume';

describe('<Resume />', () => {
  test('renders', () => {
    const wrapper = shallow(<Resume />);
    expect(wrapper).toMatchSnapshot();
  });
});
