import { useRef, useState } from "react"
import { UserAuth } from "../../Context/AuthContext"

import { format, isSameMonth, isToday } from "date-fns"

// import AgendaEventTooltip from "./AgendaEventTooltip"

import "./MonthView.css"

function MonthView({
  days,
  newMonth,
  appointments,
  cellOnClickHandler,
  updateAppointmentDay,
}) {
  const dragEvent = useRef()
  const dragOverSlot = useRef()

  // eslint-disable-next-line
  const [focusedAgendaEvent, setFocusedAgendaEvent] = useState(null)
  const { userData } = UserAuth()

  const dragStart = (e, position) => {
    dragEvent.current = position
  }
  const dragEnter = (e) => {
    dragOverSlot.current = e.target
  }

  const drop = async (e) => {
    await updateAppointmentDay(
      userData.customerID,
      userData.clinicID,
      e.target.id,
      new Date(dragOverSlot.current.id)
    )
    dragEvent.current = null
    dragOverSlot.current = null
  }

  return (
    <div className='scheduler-month-grid-cell-container'>
      {days.map((day, index) => {
        return (
          <div
            key={index}
            id={day}
            className='grid-cell'
            onClick={() => cellOnClickHandler(day)}
            style={
              isSameMonth(day, newMonth)
                ? null
                : { background: "#f7f7f7", color: "#ccc" }
            }
            onDragEnter={(e) => dragEnter(e, index)}
            onDragEnd={drop}
          >
            <div
              className='grid-cell-day'
              style={
                isToday(day) ? { color: "white", background: "#605bff" } : null
              }
            >
              {format(day, "dd")}
            </div>
            <div className='grid-body'>
              {appointments.map((appointment, index) => {
                const dateOfAppt = format(appointment.start, "dd MM yy")
                const dateOfDay = format(day, "dd MM yy")
                if (dateOfAppt === dateOfDay) {
                  return (
                    <div
                      key={index}
                      id={appointment.event_id}
                      className='grid-month-event'
                      onMouseEnter={() => setFocusedAgendaEvent(appointment)}
                      onMouseLeave={() => setFocusedAgendaEvent(null)}
                      style={{ backgroundColor: appointment.color }}
                      onDragStart={(e) => dragStart(e, index)}
                      draggable
                    >
                      <div className='grid-month-event-title'>
                        {appointment.title}
                      </div>
                    </div>
                  )
                } else {
                  return null
                }
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default MonthView
