import React from "react"
import "./Button.css"

const Button = ({ label, onClick, buttonHeight }) => {
  return (
    <div
      onClick={onClick}
      className='button-tool'
      style={{ height: buttonHeight }}
    >
      {label}
    </div>
  )
}

export default Button
