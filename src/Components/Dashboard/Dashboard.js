import React from "react"
import { UserAuth } from "../../Context/AuthContext"
import { useTranslation } from "react-i18next"
import "./Dashboard.css"

import Greetings from "../Greetings/Greetings"

import CardContainer from "../Cards/Cards"
import UpcomingAppointments from "../Appointments/UpcomingAppointments"
import TopBar from "../TopBar/TopBar"
// import Sidebar from "../Sidebar/Sidebar"

import useWindowSize from "../../Hooks/useWindowSize"

const Dashboard = () => {
  const { t } = useTranslation("dashboard")
  const { userData } = UserAuth()
  //eslint-disable-next-line
  const [width, height] = useWindowSize()

  return (
    <div className='dashboard-cointainer'>
      <TopBar placeholder={t("Search patients...")} />
      <div className='dashboard-body'>
        <div className='dashboard-greetings'>
          <Greetings
            userData={userData}
            primary={t("Hi")}
            secondary={t("Have a nice day at work!")}
          />
        </div>
        <div className='dashboard-cards'>
          <CardContainer t={t} />
        </div>
        <div className='dashboard-upcoming'>
          <UpcomingAppointments t={t} limitRows={height < 830 ? 3 : 5} />
        </div>
        {/* <Sidebar userData={userData} /> */}
      </div>
    </div>
  )
}

export default Dashboard
