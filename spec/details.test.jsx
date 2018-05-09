import React from 'react';
import { shallow } from 'enzyme';
import Details from '../client/components/Details';
import EXAMPLE_RESTAURANTS from './data/exampleRestaurants';

describe('<Details />', () => {
  test('renders More Business Info title', () => {
    const wrapper = shallow(<Details attributes={EXAMPLE_RESTAURANTS[0].attributes} />);
    expect(wrapper.find('h3').first().text()).toEqual('More Business Info');
  });
});
