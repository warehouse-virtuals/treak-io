import React from "react"
import "./TextInput.css"

const TextInput = ({ type, label, required, inputRef, containerCSS }) => {
  return (
    <div className='textinput-container'>
      <input
        ref={inputRef}
        type={type}
        className='textinput-input'
        placeholder={label}
      />
      <div className='textinput-label'>{label}</div>
    </div>
  )
}

export default TextInput
