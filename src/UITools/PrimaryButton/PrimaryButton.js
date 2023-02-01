import React from "react"
import "./PrimaryButton.css"

const PrimaryButton = ({ label, onClick }) => {
  return (
    <div onClick={onClick} className='button-6'>
      {label}
    </div>
  )
}

export default PrimaryButton
