import React from "react"
import { UserAuth } from "../../Context/AuthContext"
import { useTranslation } from "react-i18next"
import "./Dashboard.css"

import Greetings from "../Greetings/Greetings"

import CardContainer from "../Card/CardContainer"
import UpcomingAppointments from "../Appointments/UpcomingAppointments"
import TopBar from "../TopBar/TopBar"
import Sidebar from "../Sidebar/Sidebar"

const Dashboard = () => {
  const { t } = useTranslation("dashboard")
  const { userData } = UserAuth()
  return (
    <div className='dashboard-cointainer'>
      <TopBar placeholder={t("Search patients...")} />
      <div className='dashboard-body'>
        {/* <Greetings
          userData={userData}
          primary={t("Hi")}
          secondary={t("Have a nice day at work!")}
        /> */}
        {/* <CardContainer t={t} />
      <UpcomingAppointments t={t} />
      <Sidebar userData={userData} /> */}
      </div>
    </div>
  )
}

export default Dashboard
