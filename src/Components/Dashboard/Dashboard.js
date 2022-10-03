import React from "react"
import { UserAuth } from "../../Context/AuthContext"
import { useTranslation } from "react-i18next"

import HiMsg from "../HiMsg/HiMsg"

import CardContainer from "../Card/CardContainer"
import UpcomingAppointments from "../UpcomingAppointments/UpcomingAppointments"
import TopBar from "../TopBar/TopBar"
import Sidebar from "../Sidebar/Sidebar"

const Dashboard = () => {
  const { t } = useTranslation("dashboard")
  const { userData } = UserAuth()

  return (
    <div className="flex flex-col w-full h-full ">
      <TopBar placeholder={t("Search patients...")} />
      <div className="flex w-full h-full">
        <div className="w-full bg-[#f9faff] rounded-tl-3xl h-full flex flex-col">
          <HiMsg
            userData={userData}
            primary={t("Hi")}
            secondary={t("Have a nice day at work!")}
          />
          <CardContainer t={t} />
          <UpcomingAppointments t={t} />
        </div>
        <Sidebar userData={userData} />
      </div>
    </div>
  )
}

export default Dashboard
