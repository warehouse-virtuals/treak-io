import { useState, useEffect } from "react"
import {
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  addMilliseconds,
  parse,
  previousDay,
  startOfToday,
  startOfWeek,
} from "date-fns"
import { tr } from "date-fns/locale"

import TopBar from "../TopBar/TopBar"
import Spinner from "../Spinner/Spinner"

import GridNavbar from "./GridNavbar"
import GridHeader from "./GridHeader"
import MonthView from "./MonthView"
import WeekView from "./WeekView"
import DayView from "./DayView"

import AddAppointment from "../Appointments/AddAppointments"

import { useTranslation } from "react-i18next"
import { FirebaseActions } from "../../Context/FirebaseContext"

import "./Agenda.css"

function AA() {
  const [viewType, setViewType] = useState("month")

  const [days, setDays] = useState([new Date()])
  const [newMonth, setNewMonth] = useState(new Date())
  const [newWeek, setNewWeek] = useState(new Date())
  const [newDay, setNewDay] = useState(new Date())

  const [spinner, setSpinner] = useState(true)

  const [appointments, setAppointments] = useState([]) // eslint-disable-next-line
  const [updatedData, setUpdatedData] = useState("")

  const [newAppointmentDay, setNewAppointmentDay] = useState("")

  const {
    currentAppointments,
    getMoreAppointments,
    updateAppointment,
    //  deleteAppointment,
  } = FirebaseActions()

  const { t } = useTranslation("agenda")

  const updateAppointmentDay = async (
    customerid,
    usersClinic,
    appointmentId,
    updatedData
  ) => {
    setSpinner(true)
    await updateAppointment(customerid, usersClinic, appointmentId, updatedData)
    setSpinner(false)
    setUpdatedData(updatedData)
  }

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
    getMoreAppointments(newWeekStart)
  }

  const updateDay = (newDayStart) => {
    setNewDay(newDayStart)
  }

  const cellOnClickHandler = (appointmentDay) => {
    setNewAppointmentDay(appointmentDay)
  }

  useEffect(() => {
    setInitalDays()
  }, [])

  useEffect(() => {
    const fixedList = currentAppointments.map((appointment, i) => {
      let eventColor
      if (appointment.status === "Waiting") {
        eventColor = "#5ae2f7"
      } else if (appointment.status === "Completed") {
        eventColor = "#51caa1"
      } else if (appointment.status === "Cancelled") {
        eventColor = "#f3698b"
      }
      const obj = {
        id: appointment.id,
        title: appointment.reason,
        appointedPerson: appointment.appointedPerson,
        start: appointment.date.toDate(),
        end: addMilliseconds(appointment.date.toDate(), appointment.duration),
        color: eventColor,
        editable: true,
      }
      return obj
    })
    setAppointments(fixedList)
    setSpinner(false)

    //eslint-disable-next-line
  }, [currentAppointments])

  useEffect(() => {
    getMoreAppointments(newMonth)
    // eslint-disable-next-line
  }, [newMonth])

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
            {spinner ? <Spinner /> : null}

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
                cellOnClickHandler={cellOnClickHandler}
                updateAppointmentDay={updateAppointmentDay}
              />
            ) : null}
            {viewType === "week" ? (
              <WeekView
                t={t}
                newWeek={newWeek}
                updateWeek={updateWeek}
                appointments={appointments}
                intervals={60}
                cellOnClickHandler={cellOnClickHandler}
                updateAppointmentDay={updateAppointmentDay}
              />
            ) : null}
            {viewType === "day" ? (
              <DayView
                t={t}
                newDay={newDay}
                appointments={appointments}
                intervals={60}
                cellOnClickHandler={cellOnClickHandler}
                updateAppointmentDay={updateAppointmentDay}
              />
            ) : null}
          </div>
        </div>
      </div>
      {newAppointmentDay ? (
        <div className='repairform-container'>
          <AddAppointment
            newAppointmentDay={newAppointmentDay}
            parentCallback={() => {
              setNewAppointmentDay("")
              setUpdatedData(new Date())
            }}
          />
        </div>
      ) : null}
    </div>
  )
}

export default AA
