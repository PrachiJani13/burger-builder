import React from 'react';

import { configure, render, shallow }from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Post from './Post';

configure({adapter: new Adapter()})

describe('<Post />', () => {

  it('should render article', () => {
      
      //running test
      const wrapper = shallow(<Post />);
      expect(wrapper.find('article')).toHaveLength(1);
  });

    it('should render h1', () => {
      
      const wrapper = shallow(<Post />);
      expect(wrapper.find('h1')).toHaveLength(1);
    });

    it('should render title having length greater than zero ', () => {
      
      const wrapper = render(<Post title='abc' author='prachi' />);
      expect(wrapper.find('h1').text().length).toBeGreaterThan(0);
    });

});
