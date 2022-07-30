import React, { useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import { UserAuth } from "../../Context/AuthContext"

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
    <div>
      <h1>Login</h1>
      <label htmlFor="email-input">Email:</label>
      <input
        ref={emailRef}
        type="email"
        id="email-input"
        name="email-input"
      ></input>
      <br />
      <label htmlFor="password-input">Password:</label>
      <input
        ref={passwordRef}
        type="password"
        id="password-input"
        name="password-input"
      ></input>
      <br />
      <button onClick={handleLoginButtonPress}>Login</button>
      <h3>
        Dont have an account? <Link to="/register">Register</Link>
      </h3>
    </div>
  )
}

export default Login
