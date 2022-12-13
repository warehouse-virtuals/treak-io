import React, { useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import { UserAuth } from "../../Context/FirebaseContext"

const Register = () => {
  const emailRef = useRef("")
  const passwordRef = useRef("")
  const navigate = useNavigate()

  const { createUser, user } = UserAuth()

  const handleRegisterButtonPress = async () => {
    console.log("register", emailRef.current.value, passwordRef.current.value)
    const email = emailRef.current.value
    const password = passwordRef.current.value
    try {
      await createUser(email, password)
      navigate("/home")
      console.log(`Registered and logged in as ${user.displayName}`)
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div>
      <h1>Register</h1>
      <label htmlFor='email-input'>Email:</label>
      <input
        ref={emailRef}
        type='email'
        id='email-input'
        name='email-input'
      ></input>
      <br />
      <label htmlFor='password-input'>Password:</label>
      <input
        ref={passwordRef}
        type='password'
        id='password-input'
        name='password-input'
      ></input>
      <br />
      <button onClick={handleRegisterButtonPress}>Register</button>
      <h3>
        Already have an account? <Link to='/login'>Login</Link>
      </h3>
    </div>
  )
}

export default Register
