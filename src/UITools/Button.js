import React from "react"

const Button = ({ label, icon, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="px-10 py-3 bg-blue-500 hover:bg-blue-400 text-white font-bold rounded-lg mt-10 text-lg select-none">
      {label}
    </div>
  )
}

export default Button