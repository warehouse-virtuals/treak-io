import { FiChevronRight } from "react-icons/fi"

import "./RegisterFormOption.css"

const RegisterFormOption = ({ icon, desc, _onClick }) => {
  return (
    <div className='register-form-option' onClick={_onClick}>
      <div className='form-option-icon'>
        <img className='form-option-icon' alt='icon' src={icon} />
      </div>
      <div className='form-option-desc'>{desc}</div>
      <div className='form-options-arrow '>
        <FiChevronRight size={26} />
      </div>
    </div>
  )
}

export default RegisterFormOption
