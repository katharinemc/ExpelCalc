import React from 'react';
export default function FormOperators(props) {
return (<span className="formButtonContainer">
<button name="clear" className="clear" id="clear" className="numberbutton" type="button" onClick={(e) => props.clearCalc(e)}> C </button>


<button name="zero" className="zero" id="0" type="button" className="numberbutton" onClick={(e) => props.zeroButton(Number(e.target.id))}> 0 </button>

<button name="submit" className="submit" id="submit" type="button"  className="numberbutton" onClick={(e) => props.onClick(e)}> = </button>
</span>)

}