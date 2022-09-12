import React from "react"
import { UserAuth } from "../../Context/AuthContext"
import { useTranslation } from "react-i18next"

import HiMsg from "../HiMsg/HiMsg"

import SearchField from "../SearchField/SearchField"
import CardContainer from "../Card/CardContainer"
import UpcomingAppointments from "../UpcomingAppointments/UpcomingAppointments"
import Sidebar from "../Sidebar/Sidebar"

const Dashboard = () => {
  const { t } = useTranslation("dashboard")
  const { user } = UserAuth()
  return (
    <div className="w-full h-full flex flex-row">
      <div className="w-full p-10  h-full flex flex-col">
        <SearchField pholder={t("Search patients...")} />
        <HiMsg
          user={user}
          primary={t("Hi")}
          secondary={t("Have a nice day at work!")}
        />
        <CardContainer t={t} />
        <UpcomingAppointments t={t} />
      </div>
      <div className="flex flex-col  w-[600px] h-full  text-[#1f2433]">
        <Sidebar whatDisDo="placeholder" />
      </div>
    </div>
  )
}

export default Dashboard
