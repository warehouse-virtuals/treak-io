import React from "react"

import { useTranslation } from "react-i18next"
import "./Dashboard.css"

import TopBar from "../TopBar/TopBar"
import TabMenu from "../TabMenu/TabMenu"
import Greetings from "../Greetings/Greetings"
import Cards from "../Cards/Cards"
import ChartLine from "../ChartLine/ChartLine"
import ChartRadar from "../ChartRadar/ChartRadar"
import AppointmentsUpcoming from "../AppointmentsUpcoming/AppointmentsUpcoming"
import RecentActivity from "../RecentActivity/RecentActivity"

const Dashboard = () => {
  const { t } = useTranslation("dashboard")

  return (
    <div className='dashboard-cointainer'>
      <TopBar placeholder={t("Search patients...")} />
      <div className='dashboard-body'>
        <div className='dashboard-tabmenu'>
          <TabMenu />
        </div>
        <Cards t={t} />
        <div className='dashboard-row'>
          <div className='dashboard-col1'>
            <ChartLine t={t} />
            <AppointmentsUpcoming t={t} limitRows={5} />
          </div>

          <div className='dashboard-col2'>
            <ChartRadar t={t} />
            <RecentActivity />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
