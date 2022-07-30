/* eslint-disable jsx-a11y/alt-text */
import React, { useRef } from "react"
import { useNavigate } from "react-router-dom"
import { UserAuth } from "../../Context/AuthContext"

import LoginSvg from '../../Assets/login-i.svg'

import TextInput from "../../UITools/TextInput"
import Button from "../../UITools/Button"


const Login = () => {
  const emailRef = useRef("")
  const passwordRef = useRef("")

  const navigate = useNavigate()

  const { login } = UserAuth()

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
          İyi Akşamlar.
        </h6>
        <TextInput
          inputRef={emailRef}
          type={'text'}
          label="Email"
        />
        <TextInput
          inputRef={passwordRef}
          type={'password'}
          label="Password"
        />
        <Button
          label="Login"
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
