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

  return <div className='appointment-container'>sa</div>
}

export default AppointmentList
