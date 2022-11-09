import { useState, useEffect } from "react"
import { UserAuth } from "../../Context/AuthContext"
import { useTranslation } from "react-i18next"
import { Scheduler } from "@aldabil/react-scheduler"
import { toDate } from "date-fns"
import tr from "date-fns/locale/tr"

import AddAppointments from "../Appointments/AddAppointments"

import "./Agenda.css"

import TopBar from "../TopBar/TopBar"

const Agenda = (props) => {
  const [appointments, setAppointments] = useState([])
  const [updatedData, setUpdatedData] = useState("")
  const { getAppointments, updateAppointment, deleteAppointment, userData } =
    UserAuth()
  // const navigate = useNavigate()

  const { t } = useTranslation("agenda")

  const translations = {
    navigation: {
      month: t("Month"),
      week: t("Week"),
      day: t("Day"),
      today: t("Today"),
    },
    form: {
      addTitle: t("Add Event"),
      editTitle: t("Edit Event"),
      confirm: t("Confirm"),
      delete: t("Delete"),
      cancel: t("Cancel"),
    },
    event: {
      title: t("Title"),
      start: t("Start"),
      end: t("End"),
    },
    moreEvents: t("More..."),
  }

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

  const updateAppointmentDateAndTime = async (
    customerid,
    usersClinic,
    appointmentId,
    updatedData
  ) => {
    await updateAppointment(customerid, usersClinic, appointmentId, updatedData)
    setUpdatedData(updatedData)
  }

  const handleDeleteAppointment = async (appointmentid) => {
    await deleteAppointment(
      userData.customerID,
      userData.clinicID,
      appointmentid
    )
    setUpdatedData(appointmentid)
  }

  useEffect(() => {
    fetchAppointmentData().then((data) => {
      setAppointments(data)
    })
    console.log("Agenda Useffect loopta hemen durdur!")
    //eslint-disable-next-line
  }, [userData, updatedData])

  return (
    <div className='flex flex-col h-full w-full'>
      <TopBar />
      <div className='flex rounded-tl-3xl  bg-[#f9faff] items-center justify-center h-full w-full'>
        <div className='justify-start bg-red-300 items-start w-5/6 text-black'>
          <div className='flex flex-col w-full h-full bg-[#f9faff]'>
            <Scheduler
              translations={translations}
              locale={tr}
              height={700}
              view='week'
              week={{
                weekDays: [0, 1, 2, 3, 4, 5, 6],
                weekStartOn: 1,
                startHour: 9,
                endHour: 20,
                step: 60,
              }}
              month={{
                weekDays: [0, 1, 2, 3, 4, 5, 6],
                weekStartOn: 1,
                startHour: 9,
                endHour: 20,
              }}
              day={{
                startHour: 9,
                endHour: 20,
                step: 60,
              }}
              events={appointments}
              hourFormat='24'
              customEditor={(scheduler) => (
                <AddAppointments
                  scheduler={scheduler}
                  parentCallback={(childData) => {
                    setUpdatedData(childData)
                  }}
                />
              )}
              onEventDrop={async (date, updatedEvent, originalEvent) => {
                console.log(date, updatedEvent, originalEvent)
                await updateAppointmentDateAndTime(
                  userData.customerID,
                  userData.clinicID,
                  originalEvent.event_id,
                  date
                )
              }}
              onDelete={async (appointmentID) => {
                console.log(appointmentID)
                await handleDeleteAppointment(appointmentID)
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Agenda
