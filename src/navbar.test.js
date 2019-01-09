import React from 'react';
import Navbar from './NavBar';
import { shallow } from 'enzyme';

describe('nav', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Navbar />);
  });

  it('should display nav', () => {
    expect(wrapper).toMatchSnapshot();
  });

});