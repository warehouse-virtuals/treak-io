import { useState, useEffect } from "react"
import {
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  getWeek,
  parse,
  previousDay,
  set,
  startOfToday,
  startOfWeek,
  toDate,
} from "date-fns"
import { tr } from "date-fns/locale"

import TopBar from "../TopBar/TopBar"

import GridNavbar from "./GridNavbar"
import GridHeader from "./GridHeader"
import MonthView from "./MonthView"
import WeekView from "./WeekView"
import DayView from "./DayView"

import { useTranslation } from "react-i18next"
import { UserAuth } from "../../Context/AuthContext"

import "./AA.css"

function AA() {
  const [viewType, setViewType] = useState("month")

  const [days, setDays] = useState([new Date()])
  const [newMonth, setNewMonth] = useState(new Date())
  const [newWeek, setNewWeek] = useState(new Date())
  const [newDay, setNewDay] = useState(new Date())

  const [appointments, setAppointments] = useState([])
  const [updatedData, setUpdatedData] = useState("")
  const { getAppointments, updateAppointment, deleteAppointment, userData } =
    UserAuth()
  // const navigate = useNavigate()

  const { t } = useTranslation("agenda")

  const fetchAppointmentData = async () => {
    const appointments = await getAppointments(
      userData.customerID,
      userData.clinicID
    )

    const fixedList = appointments.map((appointment, i) => {
      const date = toDate(appointment.date.seconds * 1000)
      const end = toDate(
        appointment.date.seconds * 1000 + parseInt(appointment.duration)
      )

      let eventColor
      if (appointment.status === "Waiting") {
        eventColor = "#5ae2f7"
      } else if (appointment.status === "Completed") {
        eventColor = "#51caa1"
      } else if (appointment.status === "Cancelled") {
        eventColor = "#f3698b"
      }
      const obj = {
        event_id: appointment.id,
        title: appointment.reason,
        start: date,
        end: end,
        color: eventColor,
        editable: true,
      }

      return obj
    })
    return await fixedList
  }

  // const updateAppointmentDateAndTime = async (
  //   customerid,
  //   usersClinic,
  //   appointmentId,
  //   updatedData
  // ) => {
  //   await updateAppointment(customerid, usersClinic, appointmentId, updatedData)
  //   setUpdatedData(updatedData)
  // }

  // const handleDeleteAppointment = async (appointmentid) => {
  //   await deleteAppointment(
  //     userData.customerID,
  //     userData.clinicID,
  //     appointmentid
  //   )
  //   setUpdatedData(appointmentid)
  // }
  const viewTypeSetter = (viewType) => {
    setViewType(viewType)
  }

  const goToday = () => {
    setNewWeek(new Date())
    setNewDay(new Date())
    setInitalDays()
  }

  const setInitalDays = () => {
    const firstDayCurrentMonth = parse(
      format(startOfToday(), "MMM-yyyy"),
      "MMM-yyyy",
      new Date()
    )
    const formatedDates = eachDayOfInterval({
      start: startOfWeek(previousDay(firstDayCurrentMonth, 1), {
        locale: tr,
      }),
      end: endOfWeek(endOfMonth(firstDayCurrentMonth), { locale: tr }),
    })
    setNewMonth(new Date())
    setDays(formatedDates)
  }

  const updateMonth = (newMonthStart) => {
    const firstDayCurrentMonth = parse(
      format(newMonthStart, "MMM-yyyy"),
      "MMM-yyyy",
      new Date(newMonthStart)
    )
    const formatedDates = eachDayOfInterval({
      start: startOfWeek(previousDay(firstDayCurrentMonth, 1), {
        locale: tr,
      }),
      end: endOfWeek(endOfMonth(firstDayCurrentMonth), { locale: tr }),
    })
    setNewMonth(newMonthStart)
    setDays(formatedDates)
  }

  const updateWeek = (newWeekStart) => {
    setNewWeek(newWeekStart)
  }

  const updateDay = (newDayStart) => {
    setNewDay(newDayStart)
  }

  useEffect(() => {
    setInitalDays()
  }, [])

  useEffect(() => {
    fetchAppointmentData().then((data) => {
      setAppointments(data)
    })
    console.log("Agenda Useffect loopta hemen durdur!")
  }, [userData, updatedData])

  return (
    <div className='agenda-container'>
      <TopBar />
      <div className='agenda-body'>
        <div className='scheduler-container'>
          <div className='scheduler-timeless-container'>
            <GridNavbar
              t={t}
              viewType={viewType}
              viewTypeSetter={viewTypeSetter}
              goToday={goToday}
              days={days}
              updateMonth={updateMonth}
              updateWeek={updateWeek}
              updateDay={updateDay}
              currentMonth={newMonth}
            />
            {viewType === "week" ? (
              <GridHeader
                t={t}
                days={days}
                viewType={viewType}
                newWeek={newWeek}
              />
            ) : null}
            {viewType === "month" ? (
              <MonthView
                t={t}
                days={days}
                newMonth={newMonth}
                appointments={appointments}
              />
            ) : null}
            {viewType === "week" ? (
              <WeekView
                t={t}
                newWeek={newWeek}
                updateWeek={updateWeek}
                appointments={appointments}
                intervals={60}
              />
            ) : null}
            {viewType === "day" ? (
              <DayView
                t={t}
                newDay={newDay}
                appointments={appointments}
                intervals={60}
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AA
