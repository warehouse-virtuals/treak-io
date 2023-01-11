import { useTranslation } from "react-i18next"

import People1 from "../../Assets/svg-illus/People1.svg"
import PersonWorking1 from "../../Assets/svg-illus/PersonWorking1.svg"

import RegisterOptions from "../../UITools/RegisterOptions/RegisterOptions"

const RegisterBusinessList = ({ businessTypeSetter }) => {
  const { t } = useTranslation("register")

  return (
    <div className='register-message-container-show'>
      <div className='register-left'>
        <div className='register-options'>
          <div className='register-message-header'>
            {t("Tell us what your business type.")}
          </div>
          <RegisterOptions
            icon={PersonWorking1}
            desc={t("You are a freelancer")}
            onClick={() => businessTypeSetter("freelance")}
          />
          <RegisterOptions
            icon={People1}
            desc={t("You have a company")}
            onClick={() => businessTypeSetter("company")}
          />
        </div>
      </div>
    </div>
  )
}

export default RegisterBusinessList
