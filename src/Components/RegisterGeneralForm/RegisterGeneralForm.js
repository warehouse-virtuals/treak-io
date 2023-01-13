import { useTranslation } from "react-i18next"
import TextInput from "../../UITools/TextInput"
import Checkbox from "../../UITools/Checkbox"
import Dropdown from "../../UITools/Dropdown"
import PrimaryButton from "../../UITools/PrimaryButton"

const RegisterGeneralForm = ({ title, desc }) => {
  const { t } = useTranslation("register")
  return (
    <div className='forms-wrapper'>
      <div className='forms-title'>{t(title)}</div>
      <div className='forms-desc'>{t(desc)}</div>
      <div className='form-row'>
        <TextInput
          // inputRef={passwordRef}
          type={"text"}
          label={t("Name")}
        />
        <TextInput
          // inputRef={passwordRef}
          type={"text"}
          label={t("Surname")}
        />
      </div>
      <div className='form-row'>
        <TextInput
          // inputRef={passwordRef}
          type={"text"}
          label={t("E-Mail")}
        />
      </div>
      <div className='form-row'>
        <TextInput
          // inputRef={passwordRef}
          type={"text"}
          label={t("Phone")}
        />
      </div>
      <div className='form-row'>
        <TextInput
          // inputRef={passwordRef}
          type={"text"}
          label={t("Date of Birth")}
        />
        <Dropdown />
      </div>
      <div className='form-row'>
        <TextInput
          // inputRef={passwordRef}
          type={"text"}
          label={t("Job Title")}
        />
        <TextInput
          // inputRef={passwordRef}
          type={"text"}
          label={t("Role")}
        />
      </div>
      <div className='form-row'>
        <TextInput
          // inputRef={passwordRef}
          type={"text"}
          label={t("Address")}
        />
      </div>
      <div className='form-row'>
        <TextInput
          // inputRef={passwordRef}
          type={"text"}
          label={t("ZIP")}
        />
        <TextInput
          // inputRef={passwordRef}
          type={"text"}
          label={t("City")}
        />
        <TextInput
          // inputRef={passwordRef}
          type={"text"}
          label={t("Country")}
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

export default RegisterGeneralForm
