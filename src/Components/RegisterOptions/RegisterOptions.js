import { FiChevronRight } from "react-icons/fi"
import "./RegisterOptions.css"

const RegisterOptions = ({ icon, desc, onClick }) => {
  return (
    <div className='register-options-container' onClick={onClick}>
      <div className='register-options-icon'>
        <img className='register-options-icon' alt='icon' src={icon} />
      </div>
      <div className='register-options-desc'>{desc}</div>
      <div className='register-options-arrow'>
        {<FiChevronRight size={26} />}
      </div>
    </div>
  )
}

export default RegisterOptions
