import "./UpcomingAppointments.css"

import AppointmentList from "./AppointmentList"
import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { FiPlus } from "react-icons/fi"

const UpcomingAppointments = (props) => {
  const navigate = useNavigate()
  const { t } = useTranslation("dashboard")

  const handleAddAppointmentButtonClick = async () => {
    try {
      navigate("/Agenda")
      console.log("Clicked Add Button")
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div className='upcoming-container'>
      <div className='upcoming-header'>
        {t("Upcoming Appointments")}
        <div
          onClick={handleAddAppointmentButtonClick}
          className='upcoming-add-btn'
        >
          <FiPlus size={22} stroke='green' className='' />
          Randevu ekle
        </div>
      </div>
      <div className='upcoming-list-container'>
        <AppointmentList t={t} limitRows={props.limitRows} />
      </div>
    </div>
  )
}

export default UpcomingAppointments
