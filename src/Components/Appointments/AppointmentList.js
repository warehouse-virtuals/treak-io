import "./AppointmentList.css"

import { useTranslation } from "react-i18next"
import { useState, useEffect } from "react"

import { FirebaseActions } from "../../Context/FirebaseContext"

const AppointmentList = (props) => {
  const [appointments, setAppointments] = useState([])

  const { currentAppointments } = FirebaseActions()

  const { t } = useTranslation("dashboard")

  useEffect(() => {
    setAppointments(currentAppointments.slice(0, props.limitRows))

    //eslint-disable-next-line
  }, [currentAppointments])

  // const colorPicker = (appointmentStatus) => {
  //   if (appointmentStatus === "Completed") {
  //     return "#4ec69f"
  //   } else if (appointmentStatus === "Waiting") {
  //     return "#5be2f7"
  //   } else if (appointmentStatus === "Cancelled") {
  //     return "#f3698b"
  //   }
  // }

  return (
    <div className='appointment-table-container'>
      <table className='appointment-table'>
        <tbody>
          <tr>
            <th>{t("PATIENT")}</th>
            <th>{t("PHONE")}</th>
            <th>{t("REASON")}</th>
            <th>{t("CARER")}</th>
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
                <td
                // style={{ color: "var(--c-gray)" }}
                >
                  {appointment.phone}
                </td>
                <td>{appointment.reason}</td>
                <td
                // style={{
                //   color: "var(--c-gray)",
                // }}
                >
                  {appointment.appointedTo}
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
