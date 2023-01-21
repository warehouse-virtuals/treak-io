import React from "react"

import { useTranslation } from "react-i18next"
import "./Dashboard.css"

import TopBar from "../TopBar/TopBar"
import Greetings from "../Greetings/Greetings"
import Cards from "../Cards/Cards"
import Chart from "../Chart/Chart"
import AppointmentsUpcoming from "../AppointmentsUpcoming/AppointmentsUpcoming"
import RecentSales from "../RecentSales/RecentSales"
import DashboardButtons from "../DashboardButtons/DashboardButtons"

const Dashboard = () => {
  const { t } = useTranslation("dashboard")

  return (
    <div className='dashboard-cointainer'>
      <TopBar placeholder={t("Search patients...")} />
      <div className='dashboard-body'>
        <Cards t={t} />
        <div className='dashboard-row'>
          <div className='dashboard-col'>
            <Chart t={t} />
            <AppointmentsUpcoming t={t} limitRows={5} />
          </div>
          {/* <div className='dashboard-col'>
            <DashboardButtons />
            <RecentSales />
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
