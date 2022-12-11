import { useRef, useState, useEffect } from "react"
import { format, addDays, eachMinuteOfInterval, isSameHour } from "date-fns"

import AgendaEventTooltip from "./AgendaEventTooltip"
import "./DayView.css"

function DayView({ t, appointments, intervals, newDay, cellOnClickHandler }) {
  console.log(newDay)
  const [focusedAgendaEvent, setFocusedAgendaEvent] = useState(null)
  const eightAmRef = useRef()

  const formattedTimeIntervals = (currentDay) => {
    const result = newDay.setHours(0, 0, 0, 0)

    const days = []
    return eachMinuteOfInterval(
      {
        start: result,
        end: addDays(result, 1),
      },
      { step: intervals }
    )
    // return days
  }

  useEffect(() => {
    eightAmRef.current.scrollIntoView({
      behavior: "smooth",
      inline: "start",
    })
  }, [intervals])

  return (
    <div className='scheduler-day-container'>
      <div className='day-time-cell-container'>
        {formattedTimeIntervals(newDay).map((time, i) => {
          return (
            <div
              ref={format(time, "HH:mm") === "08:00" ? eightAmRef : null}
              className='day-time-cell'
            >
              {format(time, "HH:mm")}
            </div>
          )
        })}
      </div>
      <div className='scheduler-day-grid-cell-container'>
        {formattedTimeIntervals(newDay).map((hours) => {
          console.log(hours)
          return (
            <div className='day-grid-col'>
              <div
                onClick={() => {
                  cellOnClickHandler(hours)
                }}
                className='day-grid-col-item'
              >
                {appointments.map((appointment) => {
                  if (isSameHour(appointment.start, hours)) {
                    return (
                      <div
                        key={appointment.id}
                        onMouseEnter={() => setFocusedAgendaEvent(appointment)}
                        onMouseLeave={() => setFocusedAgendaEvent(null)}
                        style={{ backgroundColor: appointment.color }}
                        className='grid-day-event'
                      >
                        <div className='grid-day-event-title'>
                          {appointment.title} {format(hours, " dd MM HH:mm")}
                        </div>
                        {focusedAgendaEvent &&
                        focusedAgendaEvent.event_id === appointment.event_id ? (
                          <div className='grid-day-event-overview'>
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
    </div>
  )
}

export default DayView
