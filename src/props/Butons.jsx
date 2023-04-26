import React from 'react'

const Butons = (props) => {
  return (
    <div>
        <button style={{background:props.color, color:'white'}} onClick={props.click}>{props.label}</button>
    </div>
  )
}

export default Butons