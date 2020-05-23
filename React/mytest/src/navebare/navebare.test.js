import React from 'react';
import { shallow } from 'enzyme';
import Navebare from './navebare';

describe('<Navebare />', () => {
  test('renders', () => {
    const wrapper = shallow(<Navebare />);
    expect(wrapper).toMatchSnapshot();
  });
});
