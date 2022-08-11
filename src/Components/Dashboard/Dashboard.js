import React from "react"
import { useNavigate } from "react-router-dom"
import { UserAuth } from "../../Context/AuthContext"
// import Customer from "../Customer/Customer"
import Navbar from "../Navbar/Navbar"

import { FiActivity, FiCalendar, FiGrid, FiUsers, FiMail } from "react-icons/fi"

const Dashboard = () => {
  const navigate = useNavigate()
  const { user, logout } = UserAuth()
  const handleNavbarLogoutButtonClick = async () => {
    try {
      await logout()
      navigate("/login")
      console.log("Logged out from: " + user.email)
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <div className="w-full h-full flex flex-row">
      <Navbar onLogout={handleNavbarLogoutButtonClick} />
      <div className="w-3/4 h-full p-10 flex flex-col bg-[#FAFAFA]">
        <div className="w-3/4 mb-10 bg-red-300 text-[#0a1f33] text-5xl">
          Dashboard
        </div>
        <div className="flex h-50 mb-5 bg-red-600">
          <div className="flex justify-center items-center bg-blue-300 h-40 w-1/6 mr-10 text-[#0a1f33] text-5xl">
            Card 1
          </div>
          <div className="flex justify-center items-center bg-blue-300 h-40 w-1/6 text-[#0a1f33] text-5xl">
            Card 2
          </div>
        </div>
        <div className="flex justify-center items-center h-full">
          <div className="flex justify-center items-center bg-purple-300 h-full w-3/6 text-[#0a1f33] text-5xl">
            Ben Kalendar Meşrebim
          </div>
          <div className="flex justify-center items-center bg-orange-300 h-full w-3/6 text-[#0a1f33] text-5xl">
            Statistics
          </div>
        </div>
      </div>
      <div className="w-1/4 flex bg-green-300 justify-center items-center">
        placeholder
      </div>
    </div>
  )
}

export default Dashboard
