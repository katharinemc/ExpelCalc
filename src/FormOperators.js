import React from 'react';
export default function FormOperators(props) {
return (<span className="formButtonContainer">
<button name="zero" className="zero" id="zero" type="button"> 0 </button>

<button name="submit" className="submit" id="submit" type="button" onClick={(e) => props.onClick(e)}> = </button>
</span>)

}