import { useEffect } from "react"

import { useTranslation } from "react-i18next"

import treatLogo from "../../Assets/treat-logos/treat-brand-tp.svg"

import RegisterFormHeader from "../RegisterFormHeader/RegisterFormHeader"
import RegisterFormBody from "../RegisterFormBody/RegisterFormBody"
import RegisterFormFooter from "../RegisterFormFooter/RegisterFormFooter"
import RegisterFormGeneral from "../RegisterFormGeneral/RegisterFormGeneral"

import Headphones1 from "../../Assets/svg-illus/Headphones1.svg"
import People1 from "../../Assets/svg-illus/People1.svg"
import PersonWorking1 from "../../Assets/svg-illus/PersonWorking1.svg"

import "./Register.css"
import { useState } from "react"

const Register = () => {
  const [businessOptions, setBusinessOptions] = useState([])
  const [professionOptions, setProfessionOptions] = useState([])
  const [
    ,
    // step
    setStep,
  ] = useState("1")
  const { t } = useTranslation("register")

  const [selectedOptions, setSelectedOptions] = useState({
    businessType: false,
    professionType: false,
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

  useEffect(() => {
    if (selectedOptions.businessType && !selectedOptions.professionType) {
      setStep("2")
    } else if (selectedOptions.businessType && selectedOptions.professionType) {
      setStep("3")
    } else {
      setStep("1")
    }
  }, [selectedOptions])

  return (
    <div className='register-container'>
      <div className='login-left-header'>
        <img className='login-treat-logo' alt='logo' src={treatLogo} />
        <span>treat</span>
        {/* <div className='login-step-count'>
          {t("Step")} {step}/3
        </div> */}
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
              <RegisterFormGeneral />
              <RegisterFormFooter />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default Register
