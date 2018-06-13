import React from 'react';
import NumberButtons from './NumberButtons'
import FormOperators from './FormOperators'

import MathOperators from './MathOperators'
export default class WholeCalc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayNumber: 0
    }
  }

  setDisplayNumber( value) {
      console.log('hello',  value)
    if (this.state.displayNumber === 0) {
      this.setState({displayNumber: value})
    } else {
        this.setState({displayNumber: "" + this.state.displayNumber + value})
    }
  }
  render() {

    return (

      <main role="main">
        <h1>Content here please</h1>
        <div class="container">
          <div className="numberDisplay">
            {this.state.displayNumber}
          </div>
          <div className="buttons">
            <div className="leftButtons">
              <div className="numberButtons">
                <NumberButtons onClick={(value)=> this.setDisplayNumber(value)}/>
              </div>

              <div className="formOperators">
                <FormOperators/>
              </div>
            </div>
            <div className="mathOperators">
              <MathOperators/>
            </div>
          </div>

        </div>

      </main>
    );
  }

}