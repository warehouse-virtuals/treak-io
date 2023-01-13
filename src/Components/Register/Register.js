import { useEffect } from "react"

import { useTranslation } from "react-i18next"

import treatLogo from "../../Assets/treat-logos/treat-tp.svg"

import RegisterFormHeader from "../RegisterFormHeader/RegisterFormHeader"
import RegisterFormBody from "../RegisterFormBody/RegisterFormBody"
import RegisterFormFooter from "../RegisterFormFooter/RegisterFormFooter"
import RegisterForm from "../RegisterForm/RegisterForm"

import Headphones1 from "../../Assets/svg-illus/Headphones1.svg"
import People1 from "../../Assets/svg-illus/People1.svg"
import PersonWorking1 from "../../Assets/svg-illus/PersonWorking1.svg"

import "./Register.css"
import { useState } from "react"

const Register = () => {
  const [businessOptions, setBusinessOptions] = useState([])
  const [professionOptions, setProfessionOptions] = useState([])
  const { t } = useTranslation("register")

  const [selectedOptions, setSelectedOptions] = useState({
    businessType: null,
    professionType: null,
  })

  useEffect(() => {
    setBusinessOptions([
      {
        icon: PersonWorking1,
        desc: t("You are a freelancer"),
        type: "freelance",
      },
      {
        icon: People1,
        desc: t("You have a company"),
        type: "freelance",
      },
    ])

    setProfessionOptions([
      {
        icon: Headphones1,
        desc: t("Audiologist"),
        type: "audiologist",
      },
    ])
  }, [t])

  return (
    <div className='register-container'>
      <div className='login-left-header'>
        <img className='login-treat-logo' alt='logo' src={treatLogo} />
        <span>treat</span>
      </div>
      <div className='register-left'>
        <div className='register-form'>
          {!selectedOptions.businessType ? (
            <div>
              <RegisterFormHeader
                title={t("Tell us what your business model.")}
              />
              <RegisterFormBody
                options={businessOptions}
                typeSetter={(type) =>
                  setSelectedOptions({ ...selectedOptions, businessType: type })
                }
              />
              <RegisterFormFooter />
            </div>
          ) : null}

          {selectedOptions.businessType && !selectedOptions.professionType ? (
            <div>
              <RegisterFormHeader title={t("What's your profession?")} />
              <RegisterFormBody
                options={professionOptions}
                typeSetter={(type) =>
                  setSelectedOptions({
                    ...selectedOptions,
                    professionType: type,
                  })
                }
              />
              <RegisterFormFooter />
            </div>
          ) : null}

          {selectedOptions.businessType && selectedOptions.professionType ? (
            <div>
              <RegisterForm />
              <RegisterFormFooter />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default Register
