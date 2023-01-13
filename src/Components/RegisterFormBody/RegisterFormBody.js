import RegisterFormOption from "../RegisterFormOption/RegisterFormOption"

import "./RegisterFormBody.css"

const RegisterFormBody = ({ options, typeSetter }) => {
  return (
    <div className='register-form-body'>
      {options.map((option, index) => {
        return (
          <RegisterFormOption
            key={index}
            icon={option.icon}
            desc={option.desc}
            _onClick={() => typeSetter(option.type)}
          />
        )
      })}
    </div>
  )
}

export default RegisterFormBody
