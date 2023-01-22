import "./AppointmentsUpcoming.css"

import AppointmentList from "../AppointmentList/AppointmentList"
import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { FiMoreHorizontal } from "react-icons/fi"

const AppointmentsUpcoming = (props) => {
  const navigate = useNavigate()
  const { t } = useTranslation("dashboard")

  const handleAddAppointmentButtonClick = async () => {
    navigate("/audiogram")
    // try {
    //   navigate("/agenda")
    //   console.log("Clicked Add Button")
    // } catch (error) {
    //   console.log(error.message)
    // }
  }

  return (
    <div className='upcoming-container'>
      <div className='upcoming-header'>
        {t("Upcoming Appointments")}
        <div
          onClick={handleAddAppointmentButtonClick}
          className='upcoming-details-btn'
        >
          <FiMoreHorizontal size={24} />
        </div>
      </div>

      <AppointmentList t={t} limitRows={props.limitRows} />
    </div>
  )
}

export default AppointmentsUpcoming
