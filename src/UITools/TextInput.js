import React from "react"

const TextInput = ({
  type,
  label,
  inputRef,
  onInput,
  containerCSS,
  labelCSS,
  inputCSS,
  hasLabel,
}) => {
  return (
    <div className={containerCSS}>
      <div className={labelCSS}>{label}</div>
      <input
        onInput={onInput}
        ref={inputRef}
        type={type}
        placeholder={label}
        className={inputCSS}
      />
    </div>
  )
}

export default TextInput
