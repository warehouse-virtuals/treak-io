import { useState, useEffect } from "react"
import { UserAuth } from "../../Context/AuthContext"
import { useTranslation } from "react-i18next"
import { Scheduler } from "@aldabil/react-scheduler"
import { toDate } from "date-fns"
import add from "date-fns/add"
import tr from "date-fns/locale/tr"

import AddAppointments from "../Appointments/AddAppointments"

import "./Agenda.css"

import TopBar from "../TopBar/TopBar"

const Agenda = (props) => {
  const [appointments, setAppointments] = useState([])
  const { getAppointments, userData } = UserAuth()
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
      let eventColor
      if (appointment.status === "Waiting") {
        eventColor = "#5ae2f7"
      } else if (appointment.status === "Completed") {
        eventColor = "#51caa1"
      } else if (appointment.status === "Cancelled") {
        eventColor = "#f3698b"
      }
      const obj = {
        event_id: appointment.date.seconds,
        title: appointment.reason,
        start: date,
        end: add(date, { hours: 2 }),
        color: eventColor,
      }

      return obj
    })
    return await fixedList
  }

  // const handleAddAppointmentButtonClick = async () => {
  //   try {
  //     navigate("/addAppointment")
  //     console.log("Clicked Add Button")
  //   } catch (error) {
  //     console.log(error.message)
  //   }
  // }

  useEffect(() => {
    fetchAppointmentData().then((data) => {
      setAppointments(data)
    })

    //eslint-disable-next-line
  }, [userData])

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
                <AddAppointments scheduler={scheduler} />
              )}

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
