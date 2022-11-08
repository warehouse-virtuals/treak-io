import { toDate } from "date-fns"
import { useState, useEffect } from "react"
import { UserAuth } from "../../Context/AuthContext"

const AppointmentList = (props) => {
  const [appointments, setAppointments] = useState([])
  const { getAppointments, userData } = UserAuth()

  const fetchAppointmentData = async () => {
    return await getAppointments(userData.customerID, userData.clinicID, 5)
  }

  useEffect(() => {
    fetchAppointmentData().then((data) => {
      setAppointments(data)
    })
    //eslint-disable-next-line
  }, [userData])

  const tbodyData = []

  appointments.forEach((appointment, i) => {
    console.log(appointment)
    const date = toDate(appointment.date.seconds * 1000).toLocaleDateString(
      "tr",
      { day: "2-digit", month: "long", year: "numeric" }
    )
    const time = toDate(appointment.date.seconds * 1000).toLocaleTimeString(
      [],
      { hourCycle: "h24", hour: "2-digit", minute: "2-digit" }
    )
    const obj = {
      id: appointment.id,
      items: [
        appointment.appointedPerson,
        date,
        time,
        appointment.reason,
        appointment.appointedTo,
      ],
      status: appointment.status,
    }
    tbodyData.push(obj)
  })

  const theadData = [
    `${props.t("NAME")}`,
    `${props.t("DATE")}`,
    `${props.t("TIME")}`,
    `${props.t("REASON")}`,
    `${props.t("CARER")}`,
  ]

  const TableHeadItem = ({ item }) => {
    return (
      <div className='pl-3 gap-10 grid grid-cols-5 mb-3 '>
        {item.map((h, index) => {
          return (
            <div key={index} className=''>
              {h}
            </div>
          )
        })}
      </div>
    )
  }
  const TableRow = ({ data }) => {
    const colorPicker = (appointmentStatus) => {
      if (appointmentStatus === "Completed") {
        return "border-green-300"
      } else if (appointmentStatus === "Waiting") {
        return "border-orange-300"
      } else if (appointmentStatus === "Cancelled") {
        return "border-red-300"
      }
    }
    const statusColor = colorPicker(data.status)
    return (
      <div
        className={`grid border-r-8 hover:bg-slate-100 ${statusColor} transition-all pl-5 gap-10 items-center grid-cols-5 text-sm mb-1 h-14 rounded-2xl drop-shadow-sm bg-white`}
      >
        {data.items.map((item, index) => {
          return (
            <div className='border-r-2 border-slate-100 ' key={index}>
              {item}
            </div>
          )
        })}
      </div>
    )
  }
  const Table = ({ theadData, tbodyData, customClass }) => {
    return (
      <div className={customClass}>
        <div className='text-[#c4c8d5] text-sm font-semibold'>
          <TableHeadItem item={theadData} />
        </div>
        <div className=''>
          {tbodyData.map((item) => {
            return <TableRow key={item.id} data={item} />
          })}
        </div>
      </div>
    )
  }

  return (
    <div className='flex w-full h-full'>
      <Table
        theadData={theadData}
        tbodyData={tbodyData}
        customClass='w-full font-normal '
      />
    </div>
  )
}

export default AppointmentList
