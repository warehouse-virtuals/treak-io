/* eslint-disable jsx-a11y/alt-text */
import React, { useRef } from "react"
import { useNavigate } from "react-router-dom"
import { UserAuth } from "../../Context/AuthContext"
import { useTranslation } from "react-i18next"

import LoginSvg from '../../Assets/login-i.svg'

import TextInput from "../../UITools/TextInput"
import Button from "../../UITools/Button"


const Login = () => {
  const emailRef = useRef("")
  const passwordRef = useRef("")

  const navigate = useNavigate()

  const { login } = UserAuth()
  const { t } = useTranslation('login')


  const handleLoginButtonPress = async () => {
    const email = emailRef.current.value
    const password = passwordRef.current.value
    console.log("login", emailRef.current.value, passwordRef.current.value)

    try {
      await login(email, password)
      navigate("/home")
    } catch (error) {
      console.log(error.message)
    }
  }


  return (
    <div className="w-full h-full flex flex-row dark:bg-slate-800">
      <div className="w-full lg:w-1/2 flex items-center content-center justify-center flex-col">
        <h6
          className="dark:text-white text-slate-700 font-black text-6xl mb-10 select-none"
        >
          {t('Good Morning')}
        </h6>
        <TextInput
          inputRef={emailRef}
          type={'text'}
          label={t('Email')}
          placeholder={t('Please enter your email address')}
        />
        <TextInput
          inputRef={passwordRef}
          type={'password'}
          label={t('Password')}
          placeholder={t('Please enter your password')}

        />
        <Button
          label={t('Login Button')}
          onClick={handleLoginButtonPress}
        />

      </div>
      <div className="hidden lg:flex w-1/2 justify-center select-none">
        <img
          className="w-1/2"
          src={LoginSvg}
        />
      </div>
    </div>
  )
}

export default Login
