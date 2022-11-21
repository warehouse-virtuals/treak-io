import React from "react"

const Button = ({ label, onClick, buttonCSS }) => {
  return (
    <div onClick={onClick} className={buttonCSS}>
      {label}
    </div>
  )
}

export default Button
