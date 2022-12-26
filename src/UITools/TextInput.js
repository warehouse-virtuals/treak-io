import React from "react"
import "./TextInput.css"

const TextInput = ({
  type,
  label,
  inputRef,

  containerCSS,
}) => {
  return (
    <div className={containerCSS}>
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
