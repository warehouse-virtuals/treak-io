/* eslint-disable jsx-a11y/alt-text */
import React, { useRef } from "react"
import { useNavigate } from "react-router-dom"
import { UserAuth } from "../../Context/AuthContext"
import { useTranslation } from "react-i18next"

import LoginSvg from "../../Assets/login-i.svg"
import TestSvg from "../../Assets/lastlogo.svg"

import { FiChevronRight } from "react-icons/fi"

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
    <div className="w-full h-full flex flex-row bg-[#f9faff]">
      <div className="w-full h-full lg:w-1/2 flex items-center content-center  flex-col">
        <div className="flex items-center h-[80px] w-full pl-10 text-2xl font-bold">
          <img className="w-[60px] mr-3 " src={TestSvg} />
          warehouse
        </div>
        <div className="w-full h-full flex items-center justify-center flex-col">
          <h6 className="dark:text-white text-slate-700 text-6xl mb-5 select-none font-light">
            {welcomeMessage()}
          </h6>
          <h6 className="dark:text-white text-slate-700 text-2xl mb-10 select-none font-light">
            Uygulamaya giriş yap
          </h6>
          <div className="flex items-center justify-center flex-col">
            <TextInput
              onInput={null}
              inputRef={emailRef}
              type={"text"}
              label={t("E-Mail")}
              placeholder={t("E-Mail")}
              addCSS="w-[400px] mb-5 placeholder:italic"
            />
            <TextInput
              inputRef={passwordRef}
              type={"password"}
              label={t("Password")}
              placeholder={t("Password")}
              addCSS="w-[400px] placeholder:italic "
            />
          </div>
          <Button
            label={<FiChevronRight size={22} />}
            onClick={handleLoginButtonPress}
            addCSS={"bg-[#20295a] hover:bg-[#273169]"}
          />
        </div>
      </div>
      <div className="hidden lg:flex w-1/2 justify-center select-none m-7 rounded-3xl bg-gradient-to-r from-[#20295a] to-[#6966c1] ">
        <img className="w-1/2" src={LoginSvg} />
      </div>
    </div>
  )
}

export default Login
