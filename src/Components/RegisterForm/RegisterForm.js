import { FiUser, FiHome, FiBriefcase, FiArrowLeft } from "react-icons/fi"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"
import TextInput from "../../UITools/TextInput"
import RegisterFormTab from "../RegisterFormTab/RegisterFormTab"

import "./RegisterForm.css"

const RegisterForm = ({
  title,
  isActive,
  formType,
  businessType,
  switchTabs,
}) => {
  const { t } = useTranslation("register")
  const navigate = useNavigate()

  if (formType === "general") {
    return (
      <div className={isActive ? "form-active" : "form"}>
        <RegisterFormTab
          icon={<FiUser />}
          title={title}
          onClick={() => switchTabs("general")}
        />
        {isActive && (
          <div className='form-body'>
            <div className='form-desc'>
              This is your app and it needs to know you
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
                label={t("Short Name")}
              />
            </div>
            <div
              className='reset-password-back'
              onClick={() => navigate("/login")}
            >
              <FiArrowLeft size={20} /> Back to login
            </div>
          </div>
        )}
      </div>
    )
  } else if (formType === "business" && businessType === "company") {
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
              Information about your business shapes your app
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
                label={t("Short Name")}
              />
            </div>
            <div
              className='reset-password-back'
              onClick={() => navigate("/login")}
            >
              <FiArrowLeft size={20} /> Back to login
            </div>
          </div>
        )}
      </div>
    )
  } else if (formType === "clinic") {
    return (
      <div className={isActive ? "form-active" : "form"}>
        <RegisterFormTab
          icon={<FiHome />}
          title={title}
          onClick={() => switchTabs("clinic")}
        />
        {isActive && (
          <div className='form-body'>
            <div className='form-desc'>
              {businessType === "company"
                ? "Your app works as a clinic, you can change it's information"
                : "You can add your clinic's here or do it later"}
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
                label={t("Short Name")}
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
                label={t("Short Name")}
              />
              <TextInput
                // inputRef={passwordRef}
                type={"text"}
                label={t("Short Name")}
              />
            </div>
            <div
              className='reset-password-back'
              onClick={() => navigate("/login")}
            >
              <FiArrowLeft size={20} /> Back to login
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default RegisterForm
