import React from "react"

const Button = ({ label, icon, onClick, addCSS }) => {
  return (
    <div
      onClick={onClick}
      className={`${addCSS} px-5 py-3  text-white font-bold rounded-lg mt-10 text-lg drop-shadow-md select-none`}
    >
      {label}
    </div>
  )
}

export default Button
