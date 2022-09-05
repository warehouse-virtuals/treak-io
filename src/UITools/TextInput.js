import React from "react"

const TextInput = ({ type, label, inputRef, placeholder, onInput, addCSS }) => {
  return (
    <input
      onInput={onInput}
      ref={inputRef}
      className={`${addCSS} flex justify-center items-start flex-col border-slate-200 h-14 px-5 text-slate-700`}
      type={type}
      placeholder={placeholder}
    />
  )
}

export default TextInput
