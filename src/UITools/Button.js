import React from "react"
import "./Button.css"

const Button = ({ label, onClick }) => {
  return (
    <div onClick={onClick} className='button-tool'>
      {label}
    </div>
  )
}

export default Button
