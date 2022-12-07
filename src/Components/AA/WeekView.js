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
// import { useState } from "react"

import "./WeekView.css"

function WeekView({ t, appointments, startTime, endTime, intervals, newWeek }) {
  const nineAmRef = useRef()

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
    nineAmRef.current.scrollIntoView()
  }, [intervals])

  useEffect(() => {}, [])

  return (
    <div className='scheduler-week-container'>
      <div className='week-time-cell-container'>
        {formattedTimeIntervals(newWeek)[0].map((time, i) => {
          return (
            <div
              ref={format(time, "HH:mm") === "09:00" ? nineAmRef : null}
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
                          format(weekDate, "dd/MM/yy") +
                          "---" +
                          format(weekDate, "HH:00")
                        )
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
