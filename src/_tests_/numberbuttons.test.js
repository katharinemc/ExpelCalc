import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new Adapter() });

import React from 'react';
import {shallow, mount} from 'enzyme';
import NumberButtons from '../NumberButtons'
describe('<NumberButtons/>', () => {


   it('should work', () => {
    expect (true).toEqual(true)
   })
    it('Renders without crashing', () => {
        shallow(<NumberButtons />);
    });


    it('Renders 9 buttons', () => {
        const wrapper = shallow(<NumberButtons />);
        expect(wrapper.find('span').children().length).toBe(9)
    });


});