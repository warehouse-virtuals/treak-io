import { useTranslation } from "react-i18next"

import Headphones1 from "../../Assets/svg-illus/Headphones1.svg"

import RegisterOptions from "../../UITools/RegisterOptions/RegisterOptions"

const RegisterProfessionList = ({ professionTypeSetter }) => {
  const { t } = useTranslation("register")
  return (
    <div className='register-message-container-show'>
      <div className='register-left'>
        <div className='register-options'>
          <div className='register-message-header'>
            {t("What's your profession?")}
          </div>
          <RegisterOptions
            icon={Headphones1}
            desc={t("Audiologist")}
            onClick={() => professionTypeSetter("audiologist")}
          />
          <div
            style={{
              color: "#b2b2b2",
              textAlign: "center",
              fontWeight: "600",
            }}
          >
            {t("More options coming soon...")}
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterProfessionList
