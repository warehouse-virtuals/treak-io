import React from "react"
import "./Button.css"

const Button = ({ label, onClick, buttonHeight, cancel }) => {
  return (
    <div
      onClick={onClick}
      className={`button-tool ${cancel ? "cancel-buton" : null}`}
      style={{ height: buttonHeight }}
    >
      {label}
    </div>
  )
}

export default Button
