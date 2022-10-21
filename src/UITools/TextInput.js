import React from "react"

const TextInput = ({ type, label, inputRef, placeholder, onInput, addCSS }) => {
  return (
    <div className='flex w-full flex-col'>
      <div className='text-md font-semibold  text-slate-700 dark:text-white'>
        {label}
      </div>
      <input
        onInput={onInput}
        ref={inputRef}
        className={`${addCSS} h-[40px] mb-3 border-b-2 bg-[#f9faff] flex border-slate-200 px-5 text-slate-700`}
        type={type}
        placeholder={label}
      />
    </div>
  )
}

export default TextInput
