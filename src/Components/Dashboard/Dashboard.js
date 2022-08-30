import React from "react"
import { useNavigate } from "react-router-dom"
import { UserAuth } from "../../Context/AuthContext"
import { useTranslation } from "react-i18next"

import HiMsg from "../HiMsg/HiMsg"
import Navbar from "../Navbar/Navbar"
import Topbar from "../Topbar/Topbar"
import CardContainer from "../Card/CardContainer"
import UpcomingAppointments from "../UpcomingAppointments/UpcomingAppointments"
import Sidebar from "../Sidebar/Sidebar"

const Dashboard = () => {
  const navigate = useNavigate()
  const { user, logout } = UserAuth()
  const { t } = useTranslation("login")
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
    <div className="w-full h-full bg-[#605bff] flex flex-row">
      <Navbar onLogout={handleNavbarLogoutButtonClick} />
      <div className="w-full p-10  h-full flex flex-col rounded-l-3xl bg-[#F9FAFE]">
        <Topbar />
        <HiMsg user={user} />
        <CardContainer />
        <UpcomingAppointments />
      </div>
      <Sidebar whatDisDo="placeholder" />
    </div>
  )
}

export default Dashboard
