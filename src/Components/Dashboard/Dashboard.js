import React from "react"
import { UserAuth } from "../../Context/AuthContext"
import HiMsg from "../HiMsg/HiMsg"

import SearchField from "../SearchField/SearchField"
import CardContainer from "../Card/CardContainer"
import UpcomingAppointments from "../UpcomingAppointments/UpcomingAppointments"
import Sidebar from "../Sidebar/Sidebar"

const Dashboard = () => {
  const { user } = UserAuth()
  return (
    <div className="w-full h-full flex flex-row">
      <div className="w-full p-10  h-full flex flex-col">
        <SearchField />
        <HiMsg user={user} />
        <CardContainer />
        <UpcomingAppointments />
      </div>
      <Sidebar whatDisDo="placeholder" />
    </div>
  )
}

export default Dashboard
