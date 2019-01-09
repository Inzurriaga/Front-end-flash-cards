import React from 'react';
import Controls from './Controls.js';
import { shallow } from 'enzyme';


describe('controls', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Controls />);
  });

  it('should display controls', () => {
    expect(wrapper).toMatchSnapshot();
  });

});