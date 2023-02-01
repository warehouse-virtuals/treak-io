import React from "react"
import { useTranslation } from "react-i18next"

import TextInput from "../../UITools/TextInput/TextInput"
import Dropdown from "../../UITools/Dropdown/Dropdown"

import "./RegisterFormGeneral.css"

const RegisterFormGeneral = () => {
  const { t } = useTranslation("register")

  return (
    <div className='register-form-business'>
      <div className='form-business-title'>{t("General Information")}</div>
      <div className='form-business-desc'>
        {t("This is your app and it needs to know you")}
      </div>
      <div className='form-business-row-container'>
        <div className='form-business-row'>
          <TextInput type='text' label={t("Name")} />
          <TextInput type='text' label={t("Surname")} />
        </div>
        <div className='form-business-row'>
          <TextInput type='text' label={t("E-Mail")} />
        </div>{" "}
        <div className='form-business-row'>
          <TextInput type='text' label={t("Phone")} />
        </div>
        <div className='form-business-row'>
          <TextInput type='password' label={t("Password")} />
          <TextInput type='password' label={t("Confirm Password")} />
        </div>
        <div className='form-business-row'>
          <TextInput type='text' label={t("Address")} />
        </div>
        <div className='form-business-row'>
          <Dropdown type='text' label={t("City")} />
          <TextInput type='text' label={t("Country")} />
        </div>
      </div>
    </div>
  )
}

export default RegisterFormGeneral
