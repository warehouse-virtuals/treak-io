import React, { useRef } from "react"
import "./Login.css"

import { useNavigate } from "react-router-dom"
import { UserAuth } from "../../Context/AuthContext"
import { useTranslation } from "react-i18next"

// import LoginSvg from "../../Assets/login-i.svg"

import tesseractLogo from "../../Assets/tesseract-logo-black.svg"

import { FiChevronRight } from "react-icons/fi"
import { GiHealthNormal } from "react-icons/gi"
import NavbarButtons from "../Navbar/NavbarButtons"

import TextInput from "../../UITools/TextInput"
import Button from "../../UITools/Button"

import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const Login = () => {
  const emailRef = useRef("")
  const passwordRef = useRef("")

  const navigate = useNavigate()

  const {
    login,
    //  createUser
  } = UserAuth()

  // createUser()
  const { t } = useTranslation("login")

  const welcomeMessage = () => {
    const today = new Date()
    const currentHour = today.getHours
    if (currentHour < 12) {
      return t("Good Morning")
    } else if (currentHour < 18) {
      return t("Good Afternoon")
    } else {
      return t("Good Evening")
    }
  }

  const handleLoginButtonPress = async () => {
    const email = emailRef.current.value
    const password = passwordRef.current.value

    try {
      await login(email, password)
      navigate("/dashboard")
    } catch (error) {
      console.log(error.message)

      toast.error("Wrong email or password.", {
        theme: "light",
        hideProgressBar: true,
      })
    }
  }

  return (
    <div className='login-container'>
      <div className='login-left'>
        <div className='login-left-header'>
          <GiHealthNormal size={40} color='black' className='health-svg' />
          treat
        </div>
        <div className='welcome-message'>{welcomeMessage()}</div>
        <div className='login-message'>Uygulamaya giriş yap</div>
        <div className='login-left-body'>
          <TextInput
            onInput={null}
            inputRef={emailRef}
            type={"text"}
            label={t("E-Mail")}
            placeholder={t("E-Mail")}
            containerCSS='login-textinput-container'
            labelCSS='login-textinput-label'
            inputCSS='login-textinput-input'
          />
          <TextInput
            inputRef={passwordRef}
            type={"password"}
            label={t("Password")}
            placeholder={t("Password")}
            containerCSS='login-textinput-container'
            labelCSS='login-textinput-label'
            inputCSS='login-textinput-input'
          />
          <Button
            label={<FiChevronRight size={24} />}
            onClick={handleLoginButtonPress}
            buttonCSS='login-textinput-button'
          />
        </div>

        <div className='company'>
          <img alt='svg' className='company-logo' src={tesseractLogo} />
          Warehouse, Inc.
        </div>
      </div>
      <div className='login-right'>
        <div className='login-right-body'>
          {/* <img alt='svg' className='' src={LoginSvg} /> */}
          <div className='login-right-header'>Improve your workflow </div>
          {NavbarButtons.map((button, index) => {
            return (
              <div className='buttons-row'>
                <div className='button-icon'>{button.icon}</div>
                <div className='button-desc'>{button.desc}</div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Login
