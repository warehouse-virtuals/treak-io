import AppointmentList from "./AppointmentList"
import { useTranslation } from "react-i18next"

const UpcomingAppointments = () => {
  const { t } = useTranslation("dashboard")
  return (
    <div className="flex px-10 mt-10 flex-col h-full w-full font-bold text-2xl text-slate-700">
      {t("Upcoming Appointments")}
      <div className="flex w-full bg-[#f9faff] mt-5 text-[#20295a]">
        <AppointmentList t={t} />
      </div>
    </div>
  )
}

export default UpcomingAppointments
