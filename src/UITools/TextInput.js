import { he } from "date-fns/locale"
import React, { useState, useEffect } from "react"

import { FiEye, FiEyeOff } from "react-icons/fi"

import "./TextInput.css"

const TextInput = ({ type, label, inputRef, status, style }) => {
  const [hide, setHide] = useState(false)

  useEffect(() => {
    if (type === "password") setHide(true)
    //eslint-disable-next-line
  }, [])

  return (
    <div className='textinput-container'>
      <div className='textinput-label'>{label}</div>
      <input
        ref={inputRef}
        type={hide ? "password" : "text"}
        style={{ ...style }}
        className='textinput-input'
        placeholder={label}
      />
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
