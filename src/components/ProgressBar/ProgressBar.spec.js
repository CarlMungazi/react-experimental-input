import React from 'react';
import { shallow } from 'enzyme';
import ProgressBar from './ProgressBar';

describe('ProgressBar', () => {
  test('getWidthAsPercentOfTotalWidth should return 250 with total width of 500 and percent of 50', () => {
    const wrapper = shallow(<ProgressBar percent={50} width={500} />);
    const width = wrapper.instance.getWidthAsPercentOfTotalWidth();
    expect(width).toEqual(250);
  });

  test('shallow wrapper instance should not be null', () => {
    const wrapper = shallow(<ProgressBar percent={50} width={500} />);
    const instance = wrapper.instance();
  
    expect(instance).to.be.instanceOf(ProgressBar);
  });
});