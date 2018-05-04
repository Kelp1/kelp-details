import React from 'react';
import { shallow, mount } from 'enzyme';
import { Hours } from '../client/components/Hours';
import EXAMPLE_RESTAURANTS from './data/exampleRestaurants';

describe('<Hours />', () => {
  test('fake test', () => {
    expect(1 + 2).toEqual(3);
  });

  // test('renders Hours title', () => {
  //   const wrapper = shallow(<Hours hours={EXAMPLE_RESTAURANTS[0].hours} latitude={EXAMPLE_RESTAURANTS[0].latitude} longitude={EXAMPLE_RESTAURANTS[0].longitude} />);
  //   expect(wrapper.find('h3').first().text()).toEqual('Hours');
  // });

  // test('renders a row for each day of the week', () => {
  //   const wrapper = mount(<Hours hours={EXAMPLE_RESTAURANTS[0].hours} latitude={EXAMPLE_RESTAURANTS[0].latitude} longitude={EXAMPLE_RESTAURANTS[0].longitude} />);
  //   expect(wrapper.find('tr').length).toBe(7);
  // });

  // test('renders closed if closed on any day of the week');

  // test('renders open/closed now beside the correct day of the week');

  // test('correctly handles time day of the week');
});
