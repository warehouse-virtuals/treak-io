import treatLogo from "../../Assets/treat-logos/treat-tp.svg"
import notfound from "../../Assets/svg-illus/notfound.svg"

import { useTranslation } from "react-i18next"

import "./NotFound.css"

const NotFound = () => {
  const { t } = useTranslation("notfound")

  return (
    <div className='notfound-container'>
      <div className='notfound-header'>
        <div className='notfound-treat'>
          <img className='notfound-treat-logo' alt='logo' src={treatLogo} />
          <div>treat</div>
        </div>
        <div className='notfound-buttons'>
          <div className='notfound-login'>{t("Login")}</div>
          <div className='notfound-register'>{t("Register")}</div>
        </div>
      </div>
      <div className='notfound-message'>
        <img className='notfound-svg' alt='logo' src={notfound} />
        <div>
          <div>{t("It seems like you've been lost...")}</div>
          <div>{t("Try login!")}</div>
        </div>
      </div>
    </div>
  )
}

export default NotFound
