import React from 'react';
import App from './App.js';
import { shallow } from 'enzyme';

const toggle = jest.fn();

describe('app', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <App />);
  });

  it('should display app', () => {
    expect(wrapper).toMatchSnapshot();
  });
});