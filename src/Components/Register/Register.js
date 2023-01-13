import { useState } from "react"

import RegisterHeader from "../RegisterHeader/RegisterHeader"
import RegisterBusinessList from "../RegisterBusinessList/RegisterBusinessList"
import RegisterProfessionList from "../RegisterProfessionList/RegisterProfessionList"

import RegisterGeneralForm from "../RegisterGeneralForm/RegisterGeneralForm"
import RegisterBusinessForm from "../RegisterBusinessForm/RegisterBusinessForm"
import RegisterClinicForm from "../RegisterClinicForm/RegisterClinicForm"

import RegisterSidebar from "../RegisterSidebar/RegisterSidebar"

import "./Register.css"

const Register = () => {
  const [businessType, setBusinessType] = useState(false)
  const [professionType, setProfessionType] = useState(false)

  const [activeTab, setActiveTab] = useState("general")

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
      <RegisterHeader />
      {/* İlk sayfa */}
      {!businessType ? (
        <RegisterBusinessList
          businessType={businessType}
          businessTypeSetter={(type) => setBusinessType(type)}
        />
      ) : null}
      {/* İkinci sayfa */}
      {businessType && !professionType ? (
        <RegisterProfessionList
          businessType={businessType}
          professionType={professionType}
          professionTypeSetter={(type) => setProfessionType(type)}
        />
      ) : null}
      {/* Form sayfası */}
      {businessType && professionType ? (
        <div className='form-body'>
          <RegisterSidebar
            activeTab={activeTab}
            activeTabSetter={(tab) => setActiveTab(tab)}
          />
          {activeTab === "general" ? (
            <RegisterGeneralForm
              title='Tell us about yourself'
              desc='This is your app and it needs to know you'
            />
          ) : null}
          {activeTab === "business" ? (
            <RegisterBusinessForm
              title='Basic information about your business'
              desc='Information about your business shapes your app'
            />
          ) : null}
          {activeTab === "clinic" ? (
            <RegisterClinicForm
              title='Your app works as a clinic, open your first clinic'
              desc='You can add your clinics here or do it later'
            />
          ) : null}
        </div>
      ) : null}
    </div>
  )
}

export default Register
