import React from 'react';
import QuizSelection from './QuizSelection';
import { shallow } from 'enzyme';

describe('the quiz selection component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <QuizSelection />);
  });

  it('should display all quiz selection', () => {
    expect(wrapper).toMatchSnapshot();
  });

});