import React from "react"
import { UserAuth } from "../../Context/AuthContext"
import { useTranslation } from "react-i18next"

import HiMsg from "../HiMsg/HiMsg"

import CardContainer from "../Card/CardContainer"
import UpcomingAppointments from "../UpcomingAppointments/UpcomingAppointments"
import TopBar from "../TopBar/TopBar"

const Dashboard = () => {
  const { t } = useTranslation("dashboard")
  const { user } = UserAuth()
  return (
    <div className="w-full h-full flex flex-col">
      <TopBar placeholder={t("Search patients...")} />
      <div className="w-full p-5 bg-[#f9faff] rounded-tl-3xl h-full flex flex-col">
        <HiMsg
          user={user}
          primary={t("Hi")}
          secondary={t("Have a nice day at work!")}
        />
        <CardContainer t={t} />
        <UpcomingAppointments t={t} />
      </div>
    </div>
  )
}

export default Dashboard
