import { useRef } from "react"

import { FiUser } from "react-icons/fi"

import { useTranslation } from "react-i18next"

import TextInput from "../../UITools/TextInput"
import RegisterFormTab from "../RegisterSidebarTab/RegisterSidebarTab"
import RegisterFormFooter from "../RegisterFormFooter/RegisterFormFooter"

const ClinicForm = ({ isActive, title, switchTabs, businessType }) => {
  const { t } = useTranslation("register")

  const clinicNameRef = useRef()
  const clinicAddressRef = useRef()

  return (
    <div className={isActive ? "form-active" : "form"}>
      <RegisterFormTab
        icon={<FiUser />}
        title={title}
        onClick={() => switchTabs("clinic")}
      />
      {isActive && (
        <div className='form-body'>
          <div className='form-desc'>
            {businessType === "company"
              ? t("Your app works as a clinic, open your first clinic")
              : t(
                  "Open your first clinic, you can add your clinics and employees later"
                )}
          </div>
          <div className='form-row'>
            <TextInput
              inputRef={clinicNameRef}
              type={"text"}
              label={t("Name")}
            />
            <TextInput
              inputRef={clinicAddressRef}
              type={"text"}
              label={t("Address")}
            />
          </div>
          <RegisterFormFooter />
        </div>
      )}
    </div>
  )
}

export default ClinicForm
