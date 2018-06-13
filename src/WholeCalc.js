import React from 'react';
import NumberButtons from './NumberButtons'
import FormOperators from './FormOperators'

import MathOperators from './MathOperators'
export default class WholeCalc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayNumber: 0,
      equation: 0
    }
  }

  setDisplayNumber( value) {
    if (this.state.displayNumber === 0) {
         this.setState({displayNumber: +value})

        } else {
        this.setState({displayNumber: "" + this.state.displayNumber + value})

    }
  }

  handleMathOperators( value) {
this.setState({
        equation: this.state.displayNumber.toString() + value,
        displayNumber: "" +this.state.displayNumber +value
    })
    }

    solveFor() {
this.setState({
    displayNumber: eval(this.state.displayNumber)
})
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
                <FormOperators onClick={(event) => this.solveFor(event)}/>
              </div>
            </div>
            <div className="mathOperators">
              <MathOperators onClick={(value)=> this.handleMathOperators(value)}/>
            </div>
          </div>

        </div>

      </main>
    );
  }

}