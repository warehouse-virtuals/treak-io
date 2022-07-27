import React, { useRef } from 'react'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth"

const Register = () => {

  const emailRef = useRef('')
  const passwordRef = useRef('')


  const handleRegisterButtonPress = () => {
    console.log('register', emailRef.current.value, passwordRef.current.value)
    const auth = getAuth()

    const email = emailRef.current.value
    const password = passwordRef.current.value

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        updateProfile(userCredential.user, {
          displayName: 'cumali ceber',
          photoURL: 'https://im.haberturk.com/2022/02/22/ver1645561161/3352558_810x458.jpg',
          school: "Sakarya Univorsity"
        })

        console.log('success: ', userCredential.user)
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.error(errorCode, errorMessage)
      })

  }

  return (
    <div>
      <label htmlFor="email-input">Email:</label>
      <input ref={emailRef} type="email" id="email-input" name="email-input"></input>
      <br />
      <label htmlFor="password-input">Password:</label>
      <input ref={passwordRef} type="password" id="password-input" name="password-input"></input>
      <br />
      <button
        onClick={() => handleRegisterButtonPress()}
      >Register</button>
    </div>
  )
}

export default Register