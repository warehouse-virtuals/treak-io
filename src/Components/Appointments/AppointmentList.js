import "./AppointmentList.css"

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
      <div className='table-head-item'>
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
        return "4px solid #51caa1"
      } else if (appointmentStatus === "Waiting") {
        return "4px solid #5be2f7"
      } else if (appointmentStatus === "Cancelled") {
        return "4px solid #f3698b"
      }
    }
    const statusColor = colorPicker(data.status)
    console.log(statusColor)
    return (
      <div className='table-row-item' style={{ borderRight: statusColor }}>
        {data.items.map((item, index) => {
          return (
            <div className='table-row-item-content' key={index}>
              {item}
            </div>
          )
        })}
      </div>
    )
  }
  const Table = ({ theadData, tbodyData }) => {
    return (
      <div className='table-container'>
        <div className='table-head-container'>
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
    <div className='appointment-list-container'>
      <Table theadData={theadData} tbodyData={tbodyData} />
    </div>
  )
}

export default AppointmentList
