import React, { useState } from "react"
import { FiArrowDown } from "react-icons/fi"

import "./Dropdown.css"

const Dropdown = ({ type, label, inputRef, status }) => {
  const [open, setOpen] = useState(false)

  return (
    <div className='dropdown-container'>
      <input
        ref={inputRef}
        type={type}
        className='dropdown-input'
        placeholder={label}
      />

      <div className='dropdown-label'>{label}</div>
      <div
        className={open ? "dropdown-arrow-open" : "dropdown-arrow"}
        onClick={() => setOpen((open) => !open)}
      >
        <FiArrowDown />
      </div>
      {open ? (
        <div className='dropdown-list'>
          <div>sa</div>
        </div>
      ) : null}
    </div>
  )
}

export default Dropdown
