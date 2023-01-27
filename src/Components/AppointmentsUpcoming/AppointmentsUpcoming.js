import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { useTranslation } from "react-i18next"
import { FirebaseActions } from "../../Context/FirebaseContext"

import { FiMoreHorizontal, FiPhoneCall, FiEdit, FiClock } from "react-icons/fi"
import { secondsToMinutes } from "date-fns"

import "./AppointmentsUpcoming.css"

const AppointmentsUpcoming = (props) => {
  const [appointments, setAppointments] = useState([])
  const { currentAppointments } = FirebaseActions()
  const { t } = useTranslation("dashboard")
  const navigate = useNavigate()

  const handleAddAppointmentButtonClick = async () => {
    navigate("/audiogram")
    // try {
    //   navigate("/agenda")
    //   console.log("Clicked Add Button")
    // } catch (error) {
    //   console.log(error.message)
    // }
  }

  useEffect(() => {
    setAppointments(currentAppointments.slice(0, props.limitRows))

    //eslint-disable-next-line
  }, [currentAppointments])

  const colorPicker = (appointmentStatus) => {
    if (appointmentStatus === "Completed") {
      return "#4ec69f"
    } else if (appointmentStatus === "Waiting") {
      return "#5be2f7"
    } else if (appointmentStatus === "Cancelled") {
      return "#f3698b"
    }
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
      <div className='appointment-container'>
        {appointments.map((appointment) => {
          return (
            <div
              className='appointment'
              style={{
                borderRight: `6px solid ${colorPicker(appointment.status)}`,
              }}
            >
              <div className='appointment-date-container'>
                <div className='appointment-col'>
                  <div className='appointment-time'>13:30</div>
                  <div className='appointment-duration'>
                    <div className='appointment-duration-icon'>
                      <FiClock size={14} />
                    </div>
                    {secondsToMinutes(appointment.duration)} {t("mins")}
                  </div>
                </div>
                <div className='appointment-to'>{appointment.appointedTo}</div>
                <div className='appointment-date'>02 Şubat 2022</div>
              </div>
              <div className='appointment-details-container'>
                <div className='patient-name'>
                  {appointment.appointedPerson}
                </div>
                <div className='patient-phone'>0534 313 02 34</div>
                {/* <div className='patient-information'>22 Oca 1996 (43), E</div> */}
                <div className='appointment-reason'>{appointment.reason}</div>
                <div className='appointment-sides'>Sol</div>
              </div>
              <div className='appointment-buttons'>
                <div className='appointment-button'>
                  <FiPhoneCall size={18} />
                </div>
                <div className='appointment-button'>
                  <FiEdit size={18} />
                </div>
                {/* <div className='appointment-button'>
              <FiX size={18} />
            </div> */}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AppointmentsUpcoming
