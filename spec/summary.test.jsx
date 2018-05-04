import React from 'react';
import { shallow } from 'enzyme';
import Summary from '../client/components/Summary';
import EXAMPLE_RESTAURANTS from './data/exampleRestaurants';

describe('<Summary />', () => {
  test('renders Price Range correctly', () => {
    const wrapper = shallow(<Summary
      today={{ hoursOpen: '', isOpen: '' }}
      menu=""
      price={EXAMPLE_RESTAURANTS[0].attributes.restaurantsPriceRange2}
    />);
    expect(wrapper.find('.price dd').first().text()).toEqual('$11-30');
  });
});
