import React from "react"
import { useNavigate } from "react-router-dom"
import { UserAuth } from "../../Context/AuthContext"
import Customer from "../Customer/Customer"
import Navbar from "../Navbar/Navbar"

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
    <div className="w-full h-full flex flex-row bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500dark:bg-slate-800">
      <Navbar />
      <div>
        <h1>Home</h1>
        <div>User Email:{user && user.email}</div>
        <Customer />
        <button onClick={handleLogoutButtonPress}>Logout</button>
      </div>
    </div>
  )
}

export default Home
