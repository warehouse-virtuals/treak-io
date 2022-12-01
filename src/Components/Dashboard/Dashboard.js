import React from "react"

import { useTranslation } from "react-i18next"
import "./Dashboard.css"

import Cards from "../Cards/Cards"
// import UpcomingAppointments from "../Appointments/UpcomingAppointments"
import TopBar from "../TopBar/TopBar"

const Dashboard = () => {
  const { t } = useTranslation("dashboard")

  return (
    <div className='dashboard-cointainer'>
      <TopBar placeholder={t("Search patients...")} />
      <div className='dashboard-body'>
        <div className='dashboard-cards'>
          <Cards t={t} />
        </div>
        {/* <div className='dashboard-upcoming'>
        <UpcomingAppointments t={t} limitRows={height < 830 ? 3 : 5} />
      </div> */}
      </div>
    </div>
  )
}

export default Dashboard
