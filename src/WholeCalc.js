import React from 'react';
import NumberButtons from './NumberButtons'
import FormOperators from './FormOperators'

import MathOperators from './MathOperators'
export default class WholeCalc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {

    return (

      <main role="main">
        <h1>Content here please</h1>
        <form>
            <div class="container">
          <input className="numberDisplay" name="numberdisplay" id="numberDisplay" placeholder="0"/>
<div className="buttons">        
          <div className="leftButtons">
            <div className="numberButtons">
              <NumberButtons/>
            </div>

            <div className="formOperators">
<FormOperators />
            </div>
          </div>
          <div className="mathOperators">
          <MathOperators />
          </div>
</div>

</div>
        </form>

      </main>
    );
  }

}