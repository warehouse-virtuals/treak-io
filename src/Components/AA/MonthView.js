import { useState } from "react"
import "./MonthView.css"

import { format, isSameMonth, isToday } from "date-fns"

import AgendaEventTooltip from "./AgendaEventTooltip"

function MonthView({ days, newMonth, appointments }) {
  const [focusedAgendaEvent, setFocusedAgendaEvent] = useState(null)

  return (
    <div className='scheduler-month-grid-cell-container'>
      {days.map((day, index) => {
        return (
          <div
            className='grid-cell'
            style={
              isSameMonth(day, newMonth)
                ? null
                : { background: "#f7f7f7", color: "#ccc" }
            }
          >
            <div
              className='grid-cell-day'
              style={
                isToday(day) ? { color: "white", background: "#605bff" } : null
              }
              key={index}
            >
              {format(day, "dd")}
            </div>
            <div className='grid-body'>
              {appointments.map((appointment) => {
                const dateOfAppt = format(appointment.start, "dd MM yy")
                const dateOfDay = format(day, "dd MM yy")
                if (dateOfAppt === dateOfDay) {
                  return (
                    <div
                      key={appointment.id}
                      onMouseEnter={() => setFocusedAgendaEvent(appointment)}
                      onMouseLeave={() => setFocusedAgendaEvent(null)}
                      style={{ backgroundColor: appointment.color }}
                      className='grid-month-event'
                    >
                      <div className='grid-month-event-title'>
                        {appointment.title}
                      </div>
                      {focusedAgendaEvent &&
                      focusedAgendaEvent.event_id === appointment.event_id ? (
                        <div className='grid-month-event-overview'>
                          <AgendaEventTooltip event={focusedAgendaEvent} />
                        </div>
                      ) : null}
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
