import React from 'react';
import { shallow } from 'enzyme';
import MenuPreview from '../client/components/MenuPreview';
import EXAMPLE_MENU_ITEMS from './data/exampleMenuItems';

describe('<MenuPreview />', () => {
  test('renders Menu title', () => {
    const wrapper = shallow(<MenuPreview restaurantMenu={EXAMPLE_MENU_ITEMS} />);
    expect(wrapper.find('h3').first().text()).toEqual('Menu');
  });
});
