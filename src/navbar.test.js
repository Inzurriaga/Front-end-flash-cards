import React from 'react';
import Navbar from './NavBar';
import { shallow } from 'enzyme';

const toggle = jest.fn();
const togglecomponent = jest.fn();

describe('nav', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Navbar toggleMenu={toggle}
                toggleComponents={togglecomponent}/>);
  });

  it('should display nav', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should invoke the toggle method when clicked', () => {
    wrapper.find('StudyComponent').forEach( (node) => {
        wrapper.find('li').simulate('click');
        expect(togglecomponent).toBeCalled();
    })
  });
  it('should invoke the toggle method when clicked', () => {
    wrapper.find('.hamburger-container').simulate('click');
    expect(toggle).toBeCalled();
  });
});