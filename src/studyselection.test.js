import React from 'react';
import StudySelection from './StudySelection';
import { shallow } from 'enzyme';

describe('the selection component for the study', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <StudySelection />);
  });

  it('should display study selection', () => {
    expect(wrapper).toMatchSnapshot();
  });
});