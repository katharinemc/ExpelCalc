import React from 'react';
export default function NumberButton(props) {

  let buttons = []
  for (let i = 1; i <= 9; i++) {
    buttons.push(
      <button
        className="numberbutton"
        key={i}
        type='button'
        id={i}
        onClick={() => props.onClick(buttons[i - 1].props.id)}>'{i}'</button>
    )
  }
  return (
    <span className="">
      {buttons}</span>
  )

}