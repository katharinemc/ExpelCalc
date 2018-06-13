import React from 'react';
export default function NumberButton(props) {
let buttons=[]
    for(let i = 0; i <= 9; i++){
        buttons.push(<button className="numberbutton" type='button' key={i}>'{i}'</button>)
    }
let    zero = buttons.shift()

    console.log( buttons)
return (<span className=""> {buttons}</span>)

}