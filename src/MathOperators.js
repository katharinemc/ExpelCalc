import React from 'react';
export default function MathOperators(props) {
return (<span className="operatorButtonContainer">
<button name="add" id="add" type="button" id="+" onClick={(e) => props.onClick(e.target.id) }> + </button>

<button name="subtract" id="subtract" type="button" id="-" onClick={(e) => props.onClick(e.target.id) }> - </button>
<button name="multiply" id="multiply" type="button" id ="*" onClick={(e) => props.onClick(e.target.id) }> X </button>
<button name="divide" id ="divide" type="button" id="/" onClick={(e) => props.onClick(e.target.id) }> / </button> 
</span>)

}