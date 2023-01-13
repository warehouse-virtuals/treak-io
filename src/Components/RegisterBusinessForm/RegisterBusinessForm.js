import { useTranslation } from "react-i18next"
import TextInput from "../../UITools/TextInput"
import Checkbox from "../../UITools/Checkbox"
import PrimaryButton from "../../UITools/PrimaryButton"

const RegisterBusinessForm = ({ title, desc }) => {
  const { t } = useTranslation("register")
  return (
    <div className='forms-wrapper'>
      <div className='forms-title'>{t(title)}</div>
      <div className='forms-desc'>{t(desc)}</div>
      <div className='form-row'>
        <TextInput
          // inputRef={passwordRef}
          type={"text"}
          label={t("Long Name")}
        />
        <TextInput
          // inputRef={passwordRef}
          type={"text"}
          label={t("Long Name")}
        />
      </div>
      <div className='form-row'>
        <TextInput
          // inputRef={passwordRef}
          type={"text"}
          label={t("Long Name")}
        />
      </div>
      <div className='form-row'>
        <TextInput
          // inputRef={passwordRef}
          type={"text"}
          label={t("Long Name")}
        />
        <TextInput
          // inputRef={passwordRef}
          type={"text"}
          label={t("Long Name")}
        />
        <TextInput
          // inputRef={passwordRef}
          type={"text"}
          label={t("Long Name")}
        />
      </div>
      <Checkbox />
      <div className='register-footer-button'>
        <PrimaryButton label={t("Back")} onClick />
        <PrimaryButton label={t("Next")} onClick />
      </div>
    </div>
  )
}

export default RegisterBusinessForm
