import React from "react"

import { useTranslation } from "react-i18next"
import "./Dashboard.css"

import TopBar from "../TopBar/TopBar"
import Cards from "../Cards/Cards"
import Chart from "../Chart/Chart"
import UpcomingAppointments from "../Appointments/UpcomingAppointments"

const Dashboard = () => {
  const { t } = useTranslation("dashboard")

  return (
    <div className='dashboard-cointainer'>
      <TopBar placeholder={t("Search patients...")} />
      <div className='dashboard-body'>
        <div className='dashboard-cards'>
          <Cards t={t} />
        </div>
        <div className='dashboard-chart'>
          <Chart t={t} />
        </div>

        <div className='dashboard-upcoming'>
          <UpcomingAppointments t={t} />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
