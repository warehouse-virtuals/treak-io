import React, { useRef, useState } from "react"
import "./Login.css"

import { useNavigate } from "react-router-dom"
import { UserAuth } from "../../Context/UserContext"
import { useTranslation } from "react-i18next"
import { FiLogIn } from "react-icons/fi"

import treatLogo from "../../Assets/treat-logos/treat-tp.svg"

import NavbarButtons from "../Navbar/NavbarButtons"

import TextInput from "../../UITools/TextInput"
import Button from "../../UITools/Button"

import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import ResetPassword from "../ResetPassword/ResetPassword"

const Login = () => {
  const [isForgot, setIsForgot] = useState(false)
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
    const currentHour = today.getHours()
    if (currentHour < 12) {
      return t("Good Morning")
    } else if (currentHour < 18) {
      return t("Good Afternoon")
    } else {
      return t("Good Evening")
    }
  }

  const goToRegister = () => {
    navigate("/register")
  }

  const handleLoginButtonPress = async () => {
    const email = emailRef.current.value
    const password = passwordRef.current.value

    try {
      await login(email, password)
      navigate("/dashboard")
    } catch (error) {
      console.log(error.message)

      toast.error("Wrong email or password.")
    }
  }

  const back = () => {
    setIsForgot(false)
  }

  return (
    <div className='login-container'>
      <div className='login-left-header'>
        <img className='login-treat-logo' alt='logo' src={treatLogo} />
        <span>treat</span>
      </div>

      {isForgot ? (
        <ResetPassword back={back} />
      ) : (
        <div className='login-left'>
          <div className='login-left-body'>
            <div className='login-icon-container'>
              <div className='login-icon'>
                <FiLogIn className='' size={36} />
              </div>
            </div>
            <div className='login-message-container'>
              <div className='welcome-message'>{welcomeMessage()}</div>
              <div className='login-message'>{t("Login to app")}</div>
            </div>
            <div className='login-input-and-button'>
              <TextInput
                onInput={null}
                inputRef={emailRef}
                type={"text"}
                label={t("E-Mail")}
              />
              <TextInput
                inputRef={passwordRef}
                type={"password"}
                label={t("Password")}
              />

              <Button
                label={t("Login")}
                onClick={handleLoginButtonPress}
                buttonCSS='login-textinput-button'
              />
            </div>
            <div className='login-left-footer'>
              <div
                className='login-left-footer-forgot'
                onClick={() => setIsForgot(true)}
              >
                {t("Forgot Password?")}
              </div>
              <div
                onClick={goToRegister}
                className='login-left-footer-register'
              >
                {t("Dont have an account?")}&nbsp;
                <div className='login-left-footer-register-btn'>
                  {t("Register")}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className='login-right'>
        <div className='login-right-wrapper'>
          <div className='login-right-header'>{t("Improve your workflow")}</div>
          {NavbarButtons("20", "lgn-right-icons").map((button, index) => {
            return (
              <div className='buttons-row' key={index}>
                <div className='button-icon'>{button.icon}</div>
                <div className='button-desc'>{t(button.desc)}</div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Login
