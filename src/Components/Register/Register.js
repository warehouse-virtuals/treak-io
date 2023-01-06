import React from "react"
// import { useNavigate } from "react-router-dom"
// import { UserAuth } from "../../Context/UserContext"

import Form from "../Form/Form"

import treatLogo from "../../Assets/treat-logos/treat-tp.svg"

import "./Register.css"

const Register = () => {
  // const emailRef = useRef("")
  // const passwordRef = useRef("")
  // const navigate = useNavigate()

  // const { createUser, user } = UserAuth()

  // const handleRegisterButtonPress = async () => {
  //   console.log("register", emailRef.current.value, passwordRef.current.value)
  //   const email = emailRef.current.value
  //   const password = passwordRef.current.value
  //   try {
  //     await createUser(email, password)
  //     navigate("/dashboard")
  //     console.log(`Registered and logged in as ${user.displayName}`)
  //   } catch (error) {
  //     console.log(error.message)
  //   }
  // }

  return (
    <div className='register-container'>
      <div className='register-header'>
        <img className='register-treat-logo' alt='logo' src={treatLogo} />
        <span>treat</span>
      </div>
      <div className='form-container'>
        <Form title={"General Information"} isActive={false} />
        <Form title={"Clinic Information"} isActive={false} />
        <Form title={"Clinic Information"} isActive={true} />
      </div>
    </div>
  )
}

export default Register
