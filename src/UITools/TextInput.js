import React, { useState, useEffect } from "react"

import { FiEye, FiEyeOff } from "react-icons/fi"

import "./TextInput.css"

const TextInput = ({ type, label, inputRef, status }) => {
  const [hide, setHide] = useState(false)

  useEffect(() => {
    if (type === "password") setHide(true)
  }, [])

  return (
    <div className='textinput-container'>
      <input
        ref={inputRef}
        type={hide ? "password" : "text"}
        className='textinput-input'
        placeholder={label}
      />
      <div className='textinput-label'>{label}</div>
      {type === "password" ? (
        <div
          className='textinput-password'
          onClick={() => setHide((hide) => !hide)}
        >
          {hide ? <FiEyeOff /> : <FiEye />}
        </div>
      ) : null}
    </div>
  )
}

export default TextInput
