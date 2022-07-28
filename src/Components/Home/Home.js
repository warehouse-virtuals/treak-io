import React from "react"
import { useNavigate } from "react-router-dom"
import { UserAuth } from "../../Context/AuthContext"

const Home = () => {
  const navigate = useNavigate()
  const { user, logout } = UserAuth()
  const handleLogoutButtonPress = async () => {
    try {
      await logout()
      navigate("/login")
      console.log("Logged out")
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <div>
      <h1>Home</h1>
      <div>User Email:{user && user.email}</div>
      <button onClick={handleLogoutButtonPress}>Logout</button>
    </div>
  )
}

export default Home
