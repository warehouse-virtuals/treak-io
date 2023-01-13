import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"

import { FiArrowLeft } from "react-icons/fi"

import "./RegisterFormFooter.css"

const RegisterFormFooter = () => {
  const navigate = useNavigate()
  const { t } = useTranslation("register")

  return (
    <div className='register-form-footer' onClick={() => navigate("/login")}>
      <FiArrowLeft size={16} />
      {t("Back to login")}
    </div>
  )
}

export default RegisterFormFooter
