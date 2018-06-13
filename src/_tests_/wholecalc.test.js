import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new Adapter() });

import React from 'react';
import {shallow, mount} from 'enzyme';
import WholeCalc from '../WholeCalc.js'
describe('<WholeCalc/>', () => {

   it('should work', () => {
    expect (true).toEqual(true)
   })
    it('Renders without crashing', () => {
        shallow(<WholeCalc />);
    });

});