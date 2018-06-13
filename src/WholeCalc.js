import React from 'react';
import NumberButtons from './NumberButtons'
import CalcOperators from './CalcOperators'
import MathOperators from './MathOperators'

export default class WholeCalc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayNumber: 0
    }
  }
  setDisplayNumber(value) {
    if (typeof value !== 'number') {
      this.setState({displayNumber: "error"})
    } else if (this.state.displayNumber === 0 || this.state.displayNumber === '0') {
      this.setState({
        displayNumber: "" + value
      })

    } else {
      this.setState({
        displayNumber: "" + this.state.displayNumber + value
      })
    }
  }

  handleMathOperators(value) {
    if (isNaN(this.state.displayNumber.substr(this.state.displayNumber.length - 1))) {
      this.setState({displayNumber: "Error"})
    } else {
      this.setState({
        displayNumber: "" + this.state.displayNumber + value
      })
    }
  }

  solveFor() {
    this.setState({
      displayNumber: eval(this.state.displayNumber).toString()
    })
  }

  clearCalc() {
    this.setState({displayNumber: 0})
  }

  render() {
    return (

      <main role="main">
      <h1>Expel.io Calculator Exercise</h1>

      <div className="mainContainer">
        <div className="numberDisplay">
          {this.state.displayNumber}
        </div>
        <div className="buttons">
          <div className="leftButtons">
            <div className="numberButtons">
              <NumberButtons onClick={(value) => this.setDisplayNumber(value)}/>
            </div>
            <div className="calcOperators">
              <CalcOperators
                clearCalc={(e) => this.clearCalc(e)}
                zeroButton={(value) => this.setDisplayNumber(value)}
                solveFor={(event) => this.solveFor(event)}/>
            </div>
          </div>
          <div className="mathOperators">
            <MathOperators onClick={(value) => this.handleMathOperators(value)}/>
          </div>
        </div>
        </div>
      </main>
    );
  }

}