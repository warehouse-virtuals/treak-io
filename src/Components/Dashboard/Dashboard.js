import React from "react"
import { useNavigate } from "react-router-dom"
import { UserAuth } from "../../Context/AuthContext"
// import Customer from "../Customer/Customer"
import Navbar from "../Navbar/Navbar"
import Card from "../Card/Card"
import Calendar from "../Calendar/Calendar"
import Statistics from "../Statistics/Statistics"
import AboutMe from "../AboutMe/AboutMe"

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
          <Card whatDisDo="Add Patient" />
          <Card whatDisDo="Appntmnt" />
        </div>
        <div className="flex justify-center items-center h-full">
          <Calendar whatDisDo="Ben Kalendar Meşrebim" />
          <Statistics whatDisDo="Statistics" />
        </div>
      </div>
      <AboutMe whatDisDo="placeholder" />
    </div>
  )
}

export default Dashboard
