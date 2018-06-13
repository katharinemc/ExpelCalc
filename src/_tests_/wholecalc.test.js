import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new Adapter() });

import React from 'react';
import {shallow, mount} from 'enzyme';
import WholeCalc from '../WholeCalc.js'
import CalcOperators from '../CalcOperators'
import NumberButtons from '../NumberButtons.js'
import MathOperators from '../MathOperators'

describe('<WholeCalc/>', () => {

    it('Renders without crashing', () => {
        shallow(<WholeCalc />);
    });

    it('Renders the main component for the app', () => {
        const wrapper = shallow(<WholeCalc />);
        expect(wrapper.find('.mainContainer').length).toBe(1)
    });


    it('Renders components NumberButtons, calcOperators, and Math Operators', () => {
        const wrapper = shallow(<WholeCalc />);
        expect(wrapper.find('.mainContainer').find('.buttons').find('.leftButtons').find('.numberButtons').find(NumberButtons).length).toBe(1);
        expect(wrapper.find('.mainContainer').find('.buttons').find('.leftButtons').find('.calcOperators').find(CalcOperators).length).toBe(1);
        // expect(wrapper.find('.mainContainer').find('.buttons').find('.mathOperators').find(MathOperators).length).toBe(1);

});
});