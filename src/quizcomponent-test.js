import React from 'react';
import Quiz from './quizComponent';
import { shallow } from 'enzyme';

describe('the actual quiz', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Quiz />);
  });

  it('should display the actual quiz', () => {
    expect(wrapper).toMatchSnapshot();
  });

});