import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { FiArrowLeft } from "react-icons/fi"
// import { useNavigate } from "react-router-dom"
// import { UserAuth } from "../../Context/UserContext"

import RegisterOptions from "../RegisterOptions/RegisterOptions"

import People1 from "../../Assets/svg-illus/People1.svg"
import PersonWorking1 from "../../Assets/svg-illus/PersonWorking1.svg"
import Headphones1 from "../../Assets/svg-illus/Headphones1.svg"

import Form from "../Form/Form"

import treatLogo from "../../Assets/treat-logos/treat-tp.svg"

import "./Register.css"

const Register = () => {
  const [businessType, setBusinessType] = useState(false)
  const [professionType, setProfessionType] = useState(false)
  const [formsActive, setFormsActive] = useState(true)

  const navigate = useNavigate()
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

  useEffect(() => {
    console.log(businessType, professionType)
  }, [businessType, professionType])
  return (
    <div
      className='register-container'
      style={
        businessType && professionType
          ? { background: "rgba(14,17,17,.57)" }
          : null
      }
    >
      <div className='register-header'>
        <img
          className='register-treat-logo'
          alt='logo'
          src={treatLogo}
          onClick={() => navigate("/login")}
        />
        <span>treat</span>
      </div>

      <div
        className={businessType ? "hide" : "register-message-container-show"}
      >
        <div className='register-left'>
          <div className='register-options'>
            <div className='register-message-header'>
              Tell us what your business type.
            </div>
            <RegisterOptions
              icon={PersonWorking1}
              desc=' You are a freelancer'
              onClick={() => setBusinessType("freelance")}
            />
            <RegisterOptions
              icon={People1}
              desc='You have a company'
              onClick={() => setBusinessType("company")}
            />
            <div
              className='reset-password-back'
              onClick={() => navigate("/login")}
            >
              <FiArrowLeft size={20} /> Back to login
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          businessType && !professionType
            ? "register-message-container-show"
            : "hide"
        }
      >
        <div className='register-left'>
          <div className='register-options'>
            <div className='register-message-header'>
              What's your profession?
            </div>
            <RegisterOptions
              icon={Headphones1}
              desc='Audiologist'
              onClick={() => setProfessionType("audiologist")}
            />
            <div
              style={{
                color: "#b2b2b2",
                textAlign: "center",
                fontWeight: "600",
              }}
            >
              More options coming soon...
            </div>
            <div
              className='reset-password-back'
              onClick={() => navigate("/login")}
            >
              <FiArrowLeft size={20} /> Back to login
            </div>
          </div>
        </div>
      </div>

      <div
        className={
          businessType && professionType ? "form-container-show" : "hide"
        }
        style={formsActive ? null : { height: "180px" }}
      >
        <Form
          title={"Business Information"}
          businessType={businessType}
          isActive={true}
        />
        <Form
          title={"General Information"}
          professionType={professionType}
          isActive={false}
        />
        <Form title={"Clinic Information"} isActive={false} />
      </div>
    </div>
  )
}

export default Register
