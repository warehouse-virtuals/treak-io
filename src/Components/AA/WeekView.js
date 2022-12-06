import {
  format,
  addDays,
  eachMinuteOfInterval,
  startOfWeek,
  // addWeeks,
} from "date-fns"
import { tr } from "date-fns/locale"
// import { useState } from "react"

import "./WeekView.css"

function WeekView({ t, appointments, startTime, endTime, intervals, newWeek }) {
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
          { step: 60 }
        )
      )
    }
    return days
  }

  return (
    <div className='scheduler-week-container'>
      <div className='week-time-cell-container'>
        {formattedTimeIntervals(newWeek)[0].map((time) => {
          return <div className='week-time-cell'>{format(time, "HH:00")}</div>
        })}
      </div>
      <div className='scheduler-week-grid-cell-container'>
        {formattedTimeIntervals(newWeek).map((columns) => {
          return (
            <div className='week-grid-col'>
              {columns.map((col) => (
                <div className='week-grid-col-item'>
                  {format(col, "dd/MM/yy") + "---" + format(col, "HH:00")}
                </div>
              ))}
            </div>
          )
        })}
        {/* <div className='week-grid-col'>
          {formattedTimeIntervals(newWeek).map((time) => {
            return (
              <div className='week-grid-col-item'>
                {format(time, "dd/MM/yy") + "---" + format(time, "HH:00")}
              </div>
            )
          })}
        </div> */}
      </div>
    </div>
  )
}

export default WeekView
