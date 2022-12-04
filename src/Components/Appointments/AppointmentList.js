import "./AppointmentList.css"

import { useTranslation } from "react-i18next"
import { tr } from "date-fns/locale"
import { format } from "date-fns"
import { useState, useEffect } from "react"
import { UserAuth } from "../../Context/AuthContext"

const AppointmentList = (props) => {
  const [appointments, setAppointments] = useState([])
  const { getAppointments, userData } = UserAuth()
  const { t } = useTranslation("dashboard")

  const fetchAppointmentData = async () => {
    return await getAppointments(userData.customerID, userData.clinicID, 5)
  }

  useEffect(() => {
    fetchAppointmentData().then((data) => {
      console.log(data)
      setAppointments(data)
    })
    //eslint-disable-next-line
  }, [userData])

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
    <div className='appointment-table-container'>
      <table className='appointment-table'>
        <tr>
          <th>{t("NAME")}</th>
          <th>{t("PHONE")}</th>
          <th>{t("GENDER")}</th>
          <th>{t("SSN")}</th>
          <th>{t("DOB")}</th>
        </tr>
        {appointments.map((appointment) => {
          return (
            <tr
              onClick={() => {
                props.focusedPatient(appointment)
              }}
            >
              <td>{appointment.appointedPerson}</td>
              <td>
                {format(appointment.date.toMillis(), "PP", {
                  locale: tr,
                })}
              </td>
              <td>{appointment.reason}</td>
              <td>{appointment.appointedTo}</td>
              <td
                style={{
                  borderRight: `10px solid ${colorPicker(appointment.status)}`,
                }}
              >
                {appointment.status}
              </td>
            </tr>
          )
        })}
      </table>
    </div>
  )
}

export default AppointmentList
