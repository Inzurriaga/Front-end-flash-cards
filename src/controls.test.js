import React from 'react';
import Controls from './Controls.js';
import { shallow } from 'enzyme';

const create = jest.fn();

describe('controls', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Controls create={create}/>);
  });

  it('should display controls', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should invoke the start method when clicked', () => {
    wrapper.find('.start-button').simulate('click');
    expect(create).toBeCalled();
  });
});