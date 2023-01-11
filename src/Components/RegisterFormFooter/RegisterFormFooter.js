import { useTranslation } from "react-i18next"
import { FiArrowLeft } from "react-icons/fi"
import { useNavigate } from "react-router-dom"

const RegisterFormFooter = () => {
  const { t } = useTranslation("register")
  const navigate = useNavigate()
  return (
    <div className='form-footer-container'>
      <div className='reset-password-back' onClick={() => navigate("/login")}>
        <FiArrowLeft size={20} /> {t("Back to login")}
      </div>
    </div>
  )
}

export default RegisterFormFooter
