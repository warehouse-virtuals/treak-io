import { useRef } from "react"

import { FiKey, FiArrowLeft } from "react-icons/fi"
import { useTranslation } from "react-i18next"
import { toast } from "react-toastify"

import { UserAuth } from "../../Context/UserContext"

import TextInput from "../../UITools/TextInput"
import Button from "../../UITools/Button"

import "./ResetPassword.css"

const ResetPassword = ({ back }) => {
  const emailRef = useRef()

  const { resetPassword } = UserAuth()

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email)
  }

  const triggerResetEmail = async () => {
    const email = emailRef.current.value
    console.log(isValidEmail(email))
    if (email.length <= 0) {
      toast.warn("E-Mail field cannot be empty.")
    } else if (!isValidEmail(email)) {
      toast.warn("Please enter proper E-Mail.")
    } else {
      toast.promise(resetPassword(email), {
        pending: "E-Mail sending",
        success: "E-Mail has been sent.",
        error: "Something went wrong!",
      })
    }
  }
  const { t } = useTranslation("login")

  return (
    <div className='reset-password-container'>
      <div className='reset-password-form'>
        <div className='reset-password-icon-container'>
          <div className='reset-password-icon'>
            <FiKey className='' size={36} />
          </div>
        </div>
        <div className='reset-password-message-container'>
          <div className='reset-password-message-header'>Forgot Password?</div>
          <div className='reset-password-message-body'>
            Enter your email and we send you a reset link.
          </div>
        </div>
        <div className='reset-password-input-and-button'>
          <TextInput
            onInput={null}
            inputRef={emailRef}
            type={"email"}
            label={t("E-Mail")}
          />
          <Button label={t("Reset")} onClick={triggerResetEmail} />
        </div>

        <div className='reset-password-back' onClick={back}>
          <FiArrowLeft size={20} /> Back to login
        </div>
      </div>
    </div>
  )
}

export default ResetPassword
