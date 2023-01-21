import notfound from "../../Assets/svg-illus/notfound.svg"

import TopBar from "../TopBar/TopBar"

import { useTranslation } from "react-i18next"

import "./NotFound.css"

const NotFound = () => {
  const { t } = useTranslation("notfound")

  return (
    <div className='notfound-container'>
      <TopBar placeholder={t("Search patients...")} />
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
