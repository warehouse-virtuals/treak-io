import "./AppointmentList.css"

import { useTranslation } from "react-i18next"
import { tr } from "date-fns/locale"
import { format } from "date-fns"
import { useState, useEffect } from "react"

import { FirebaseActions } from "../../Context/FirebaseContext"

import Spinner from "../Spinner/Spinner"

const AppointmentList = (props) => {
  const [appointments, setAppointments] = useState([])
  const [spinner, setSpinner] = useState(true)

  const { currentAppointments } = FirebaseActions()

  const { t } = useTranslation("dashboard")

  useEffect(() => {
    setAppointments(currentAppointments.slice(0, props.limitRows))
    setSpinner(false)

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
    <div className='appointment-table-container'>
      {spinner ? <Spinner /> : null}
      <table className='appointment-table'>
        <tbody>
          <tr>
            <th>{t("NAME")}</th>
            <th>{t("PHONE")}</th>
            <th>{t("GENDER")}</th>
            <th>{t("SSN")}</th>
            <th>{t("DOB")}</th>
          </tr>
          {appointments.map((appointment, i) => {
            return (
              <tr
                key={i}
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
                    borderRight: `3px solid ${colorPicker(appointment.status)}`,
                  }}
                >
                  {appointment.status}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default AppointmentList
