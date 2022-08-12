/* eslint-disable jsx-a11y/alt-text */
import React, { useRef } from "react"
import { useNavigate } from "react-router-dom"
import { UserAuth } from "../../Context/AuthContext"
import { useTranslation } from "react-i18next"

import LoginSvg from "../../Assets/login-i.svg"

import TextInput from "../../UITools/TextInput"
import Button from "../../UITools/Button"

import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const Login = () => {
  const emailRef = useRef("")
  const passwordRef = useRef("")

  const navigate = useNavigate()

  const { login } = UserAuth()

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
    console.log("login", emailRef.current.value, passwordRef.current.value)

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
    <div className="w-full h-full flex flex-row dark:bg-slate-800">
      <div className="w-full lg:w-1/2 flex items-center content-center justify-center flex-col">
        <h6 className="dark:text-white text-slate-700 text-6xl mb-10 select-none font-light">
          {welcomeMessage()}
        </h6>
        <TextInput
          onInput={null}
          inputRef={emailRef}
          type={"text"}
          label={t("E-Mail")}
          placeholder={t("Please enter your email address")}
        />
        <TextInput
          inputRef={passwordRef}
          type={"password"}
          label={t("Password")}
          placeholder={t("Please enter your password")}
        />
        <Button label={t("Login Button")} onClick={handleLoginButtonPress} />
      </div>
      <div className="hidden lg:flex w-1/2 justify-center select-none bg-[#6b63ffa1]">
        <img className="w-1/2" src={LoginSvg} />
      </div>
    </div>
  )
}

export default Login
