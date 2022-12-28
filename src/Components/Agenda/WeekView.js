import { useRef, useState, useEffect } from "react"
import { UserAuth } from "../../Context/UserContext"

import {
  format,
  addDays,
  eachMinuteOfInterval,
  startOfWeek,
  isSameHour,
} from "date-fns"

import { tr } from "date-fns/locale"

import AgendaEventTooltip from "./AgendaEventTooltip"
import "./WeekView.css"

function WeekView({
  appointments,
  intervals,
  newWeek,
  cellOnClickHandler,
  updateAppointmentDay,
}) {
  const dragEvent = useRef()
  const dragOverSlot = useRef()
  const eightAmRef = useRef()

  const [focusedAgendaEvent, setFocusedAgendaEvent] = useState(null)

  const { userData } = UserAuth()

  const dragStart = (e, position) => {
    dragEvent.current = position
  }
  const dragEnter = (e) => {
    dragOverSlot.current = e.target
  }

  const drop = async (e) => {
    console.log(dragOverSlot.current.id)
    await updateAppointmentDay(
      userData.customerID,
      userData.clinicID,
      e.target.id,
      new Date(dragOverSlot.current.id)
    )
    dragEvent.current = null
    dragOverSlot.current = null
  }

  const formattedTimeIntervals = (dayOfWeek) => {
    const result = startOfWeek(dayOfWeek.setHours(0, 0, 0, 0), {
      locale: tr,
    })

    const days = []
    for (let index = 0; index < 7; index++) {
      days.push(
        eachMinuteOfInterval(
          {
            start: addDays(result, index),
            end: addDays(result, index + 1),
          },
          { step: intervals }
        )
      )
    }

    return days
  }

  useEffect(() => {
    eightAmRef.current.scrollIntoView({
      behavior: "smooth",
      inline: "start",
    })
  }, [intervals])

  return (
    <div className='scheduler-week-container'>
      <div className='week-time-cell-container'>
        {formattedTimeIntervals(newWeek)[0].map((time, i) => {
          return (
            <div
              key={i}
              ref={format(time, "HH:mm") === "08:00" ? eightAmRef : null}
              className='week-time-cell'
            >
              {format(time, "HH:mm")}
            </div>
          )
        })}
      </div>
      <div className='scheduler-week-grid-cell-container'>
        {formattedTimeIntervals(newWeek).map((weekDates, i) => {
          return (
            <div key={i} className='week-grid-col'>
              {weekDates.map((weekDate, index) => {
                return (
                  <div
                    key={index}
                    id={weekDate}
                    onClick={() => {
                      cellOnClickHandler(weekDate)
                    }}
                    className='week-grid-col-item'
                    onDragEnter={(e) => dragEnter(e, index)}
                    onDragEnd={drop}
                  >
                    {appointments.map((appointment, i) => {
                      if (isSameHour(appointment.start, weekDate)) {
                        return (
                          <div
                            id={appointment.id}
                            key={appointment.id}
                            className='grid-month-event'
                            style={{ backgroundColor: appointment.color }}
                            onMouseEnter={() =>
                              setFocusedAgendaEvent(appointment)
                            }
                            onMouseLeave={() => setFocusedAgendaEvent(null)}
                            onDragStart={(e) => dragStart(e, index)}
                            draggable
                          >
                            <div className='grid-month-event-title'>
                              {appointment.title}{" "}
                              {format(weekDate, " dd MM HH:mm")}
                            </div>
                            {focusedAgendaEvent &&
                            focusedAgendaEvent.event_id ===
                              appointment.event_id ? (
                              <div className='grid-month-event-overview'>
                                <AgendaEventTooltip
                                  event={focusedAgendaEvent}
                                />
                              </div>
                            ) : null}
                          </div>
                        )
                      } else {
                        return null
                      }
                    })}
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default WeekView
