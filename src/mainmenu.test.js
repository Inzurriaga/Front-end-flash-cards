import React from 'react';
import MainMenu from './MainMenu.js';
import { shallow } from 'enzyme';


const toggle = jest.fn();

describe('main menu', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <MainMenu toggleComponents={toggle}/>);
  });

  it('should invoke the toggle method when clicked', () => {
    wrapper.find('.study-button').simulate('click');
    expect(toggle).toBeCalled();
  });
  it('should invoke the toggle method when clicked', () => {
    wrapper.find('.quiz-button').simulate('click');
    expect(toggle).toBeCalled();
  });
  it('should invoke the toggle method when clicked', () => {
    wrapper.find('.create-button').simulate('click');
    expect(toggle).toBeCalled();
  });
});