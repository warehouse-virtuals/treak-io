import React from "react"
import { UserAuth } from "../../Context/AuthContext"
import HiMsg from "../HiMsg/HiMsg"

import Topbar from "../Topbar/Topbar"
import CardContainer from "../Card/CardContainer"
import UpcomingAppointments from "../UpcomingAppointments/UpcomingAppointments"
import Sidebar from "../Sidebar/Sidebar"

const Dashboard = () => {
  const { user } = UserAuth()
  return (
    <div className="w-full h-full flex flex-row">
      <div className="w-full p-10  h-full flex flex-col">
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
