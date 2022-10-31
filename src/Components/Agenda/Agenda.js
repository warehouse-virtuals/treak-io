import { useState, useEffect } from "react"
import { UserAuth } from "../../Context/AuthContext"
// import { useNavigate } from "react-router-dom"
// import { useTranslation } from "react-i18next"
// import { FiPlus } from "react-icons/fi"

import { toDate } from "date-fns"
import add from "date-fns/add"

import { Scheduler } from "@aldabil/react-scheduler"

import TopBar from "../TopBar/TopBar"

import tr from "date-fns/locale/tr"

const Agenda = (props) => {
  const [appointments, setAppointments] = useState([])
  const { getAppointments, userData } = UserAuth()
  // const navigate = useNavigate()

  // const { t } = useTranslation("dashboard")

  const fetchAppointmentData = async () => {
    const appointments = await getAppointments(
      userData.customerID,
      userData.clinicID,
      5
    )

    const fixedList = appointments.map((appointment, i) => {
      const date = toDate(appointment.date.seconds * 1000)
      const obj = {
        event_id: appointment.date.seconds,
        title: appointment.reason,
        start: date,
        end: add(date, { hours: 2 }),
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
        <div className='justify-center items-center w-5/6'>
          <Scheduler
            locale={tr}
            height={700}
            view='week'
            week={{
              weekDays: [0, 1, 2, 3, 4, 5],
              weekStartOn: 6,
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
            events={appointments}
          />
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
