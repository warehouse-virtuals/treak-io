import React from "react"
import { useNavigate } from "react-router-dom"
import { UserAuth } from "../../Context/AuthContext"
import HiMsg from "../HiMsg/HiMsg"
import Navbar from "../Navbar/Navbar"
import Topbar from "../Topbar/Topbar"
import CardContainer from "../Card/CardContainer"
import UpcomingAppointments from "../UpcomingAppointments/UpcomingAppointments"
import Sidebar from "../Sidebar/Sidebar"

const Dashboard = () => {
  const { user } = UserAuth()
  return (
    <div className="w-full h-full bg-[#605bff] flex flex-row">
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
