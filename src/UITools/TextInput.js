import React from "react"

const TextInput = ({ type, label, inputRef, placeholder, onInput, addCSS }) => {
  return (
    <div className="flex flex-col mb-2">
      <div className="text-md font-semibold mt-5  text-slate-700 dark:text-white">
        {label}
      </div>
      <input
        onInput={onInput}
        ref={inputRef}
        className={`${addCSS} bg-[#f9faff] flex border-slate-200 h-14 px-5 text-slate-700`}
        type={type}
        placeholder={label}
      />
    </div>
  )
}

export default TextInput
