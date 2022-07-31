import React from "react"

const TextInput = ({ type, label, inputRef, placeholder }) => {
  return (
    <div className="w-2/3  flex justify-center items-start flex-col">
      <div
        className="text-xl font-medium mb-2 mt-5 text-slate-700 dark:text-white"
      >{label}</div>
      <input
        ref={inputRef}
        className="w-full border-2 border-slate-300 h-14 rounded-lg px-5 text-slate-700"
        type={type}
        placeholder={placeholder}
      />
    </div>
  )
}

export default TextInput