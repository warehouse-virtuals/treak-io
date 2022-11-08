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
  const { getAppointments, updateAppointment, userData } = UserAuth()
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

  // const handleAddAppointmentButtonClick = async () => {
  //   try {
  //     navigate("/addAppointment")
  //     console.log("Clicked Add Button")
  //   } catch (error) {
  //     console.log(error.message)
  //   }
  // }

  const handleConfirm = async (event, action) => {
    console.log(event, action)
    if (action === "edit") {
      /** PUT event to remote DB */
    } else if (action === "create") {
      /**POST event to remote DB */
    }
    /**
     * Make sure to return 4 mandatory fields:
     * event_id: string|number
     * title: string
     * start: Date|string
     * end: Date|string
     * ....extra other fields depend on your custom fields/editor properties
     */
    // Simulate http request: return added/edited event
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
              onConfirm={handleConfirm}

              // {
              //   name: "anotherdate",
              //   type: "date",
              //   config: {
              //     label: "Other Date",
              //     md: 6,
              //     modalVariant: "dialog",
              //     type: "datetime",
              //   },
              // },
              // ]}
            />
          </div>
        </div>
        {/* <div className='flex h-full w-1/4 bg-green-300  '>
          <div
            onClick={handleAddAppointmentButtonClick}
            className='flex items-center justify-center h-12 w-12 rounded-l-2xl rounded-tr-2xl bg-[#59e2f7] mb-5 hover:bg-[#48c3d6]  '
          >
            <FiPlus size={22} className=' text-white ' />
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Agenda
