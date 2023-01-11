import { useNavigate } from "react-router-dom"
import treatLogo from "../../Assets/treat-logos/treat-tp.svg"

const RegisterHeader = () => {
  const navigate = useNavigate()
  return (
    <div className='register-header'>
      <img
        className='register-treat-logo'
        alt='logo'
        src={treatLogo}
        onClick={() => navigate("/login")}
      />
      <span>treat</span>
    </div>
  )
}

export default RegisterHeader
