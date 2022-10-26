import AppointmentList from "./AppointmentList"
import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { FiPlus } from "react-icons/fi"

const UpcomingAppointments = () => {
  const navigate = useNavigate()
  const { t } = useTranslation("dashboard")

  const handleAddAppointmentButtonClick = async () => {
    try {
      navigate("/addAppointment")
      console.log("Clicked Add Button")
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div className='flex px-10 mt-10 flex-col h-full w-full font-bold text-2xl text-slate-700'>
      <div className='flex justify-between'>
        {t("Upcoming Appointments")}
        <div
          onClick={handleAddAppointmentButtonClick}
          className='flex items-center justify-center h-12 w-12 rounded-l-2xl rounded-tr-2xl bg-[#59e2f7] mb-5 hover:bg-[#48c3d6]  '
        >
          <FiPlus size={22} className=' text-white ' />
        </div>
      </div>
      <div className='flex w-full bg-[#f9faff] mt-5 text-[#20295a]'>
        <AppointmentList t={t} />
      </div>
    </div>
  )
}

export default UpcomingAppointments
