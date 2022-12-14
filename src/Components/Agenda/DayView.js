import { useRef, useState, useEffect } from "react"
import { UserAuth } from "../../Context/FirebaseContext"

import { format, addDays, eachMinuteOfInterval, isSameHour } from "date-fns"

import AgendaEventTooltip from "./AgendaEventTooltip"
import "./DayView.css"

function DayView({
  appointments,
  intervals,
  newDay,
  cellOnClickHandler,
  updateAppointmentDay,
}) {
  const dragEvent = useRef()
  const dragOverSlot = useRef()
  const eightAmRef = useRef()

  const [focusedAgendaEvent, setFocusedAgendaEvent] = useState(null)
  const { userData } = UserAuth()

  const formattedTimeIntervals = (currentDay) => {
    const result = newDay.setHours(0, 0, 0, 0)

    return eachMinuteOfInterval(
      {
        start: result,
        end: addDays(result, 1),
      },
      { step: intervals }
    )
  }

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
        {formattedTimeIntervals(newDay).map((hours, index) => {
          return (
            <div key={index} className='day-grid-col'>
              <div
                id={hours}
                className='day-grid-col-item'
                onClick={() => {
                  cellOnClickHandler(hours)
                }}
                onDragEnter={(e) => dragEnter(e, index)}
                onDragEnd={drop}
              >
                {appointments.map((appointment) => {
                  if (isSameHour(appointment.start, hours)) {
                    return (
                      <div
                        key={appointment.id}
                        id={appointment.event_id}
                        onMouseEnter={() => setFocusedAgendaEvent(appointment)}
                        onMouseLeave={() => setFocusedAgendaEvent(null)}
                        style={{ backgroundColor: appointment.color }}
                        className='grid-day-event'
                        onDragStart={(e) => dragStart(e, index)}
                        draggable
                      >
                        <div>
                          <div className='grid-day-event-title'>
                            {appointment.title} {format(hours, " dd MM HH:mm")}
                          </div>
                          sa
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
