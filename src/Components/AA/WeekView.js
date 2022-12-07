import { useRef, useState, useEffect } from "react"
import {
  format,
  addDays,
  eachMinuteOfInterval,
  startOfWeek,
  // addWeeks,
  isSameHour,
} from "date-fns"
import { tr } from "date-fns/locale"

import AgendaEventTooltip from "./AgendaEventTooltip"
import "./WeekView.css"

function WeekView({ t, appointments, intervals, newWeek }) {
  const [focusedAgendaEvent, setFocusedAgendaEvent] = useState(null)
  const eightAmRef = useRef()

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
              ref={format(time, "HH:mm") === "08:00" ? eightAmRef : null}
              className='week-time-cell'
            >
              {format(time, "HH:mm")}
            </div>
          )
        })}
      </div>
      <div className='scheduler-week-grid-cell-container'>
        {formattedTimeIntervals(newWeek).map((weekDates) => {
          return (
            <div className='week-grid-col'>
              {weekDates.map((weekDate) => {
                return (
                  <div className='week-grid-col-item'>
                    {appointments.map((appointment) => {
                      if (isSameHour(appointment.start, weekDate)) {
                        return (
                          <div
                            key={appointment.id}
                            onMouseEnter={() =>
                              setFocusedAgendaEvent(appointment)
                            }
                            onMouseLeave={() => setFocusedAgendaEvent(null)}
                            style={{ backgroundColor: appointment.color }}
                            className='grid-month-event'
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
