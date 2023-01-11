import { FiBriefcase } from "react-icons/fi"

import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"
import TextInput from "../../UITools/TextInput"

import RegisterFormTab from "../RegisterFormTab/RegisterFormTab"
import RegisterFormFooter from "../RegisterFormFooter/RegisterFormFooter"

const BusinessForm = ({ isActive, title, switchTabs }) => {
  const { t } = useTranslation("register")
  const navigate = useNavigate()
  return (
    <div className={isActive ? "form-active" : "form"}>
      <RegisterFormTab
        icon={<FiBriefcase />}
        title={title}
        onClick={() => switchTabs("business")}
      />
      {isActive && (
        <div className='form-body'>
          <div className='form-desc'>
            {t("Information about your business shapes your app")}
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
              label={t("Short Name")}
            />
            <TextInput
              // inputRef={passwordRef}
              type={"text"}
              label={t("City")}
            />
          </div>
          <div className='form-row'>
            <TextInput
              // inputRef={passwordRef}
              type={"text"}
              label={t("Adress")}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>{t("Contact Info")}</div>
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
            <TextInput
              // inputRef={passwordRef}
              type={"text"}
              label={t("Phone")}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default BusinessForm
