import { FiHome } from "react-icons/fi"

import { useTranslation } from "react-i18next"
import TextInput from "../../UITools/TextInput"
import RegisterFormTab from "../RegisterSidebarTab/RegisterSidebarTab"
import RegisterFormFooter from "../RegisterFormFooter/RegisterFormFooter"

const GeneralForm = ({ isActive, title, switchTabs }) => {
  const { t } = useTranslation("register")
  return (
    <div className={isActive ? "form-active" : "form"}>
      <RegisterFormTab
        icon={<FiHome />}
        title={title}
        onClick={() => switchTabs("general")}
      />
      {isActive && (
        <div className='form-body'>
          <div className='form-desc'>
            {t("This is your app and it needs to know you")}
          </div>
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
          <div className='form-row'>
            <TextInput
              // inputRef={passwordRef}
              type={"text"}
              label={t("Date of Birth")}
            />
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
          <RegisterFormFooter />
        </div>
      )}
    </div>
  )
}

export default GeneralForm
