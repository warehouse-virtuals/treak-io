import {
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isThisMonth,
  isToday,
  parse,
  previousDay,
  startOfToday,
  startOfWeek,
} from "date-fns"
import { tr } from "date-fns/locale"
import React from "react"

import "./MiniCalendar.css"

const MiniCalendar = () => {
  const today = startOfToday()
  // console.log(today)
  const firstDayCurrentMonth = parse(
    format(startOfToday(), "MMM-yyyy"),
    "MMM-yyyy",
    new Date()
  )
  // console.log(firstDayCurrentMonth)

  const days = eachDayOfInterval({
    start: startOfWeek(previousDay(firstDayCurrentMonth, 1), { locale: tr }),
    end: endOfWeek(endOfMonth(firstDayCurrentMonth), { locale: tr }),
  })

  // console.log(days)

  return (
    <div className='mini-calendar-container'>
      <div className='mini-calendar-today'>{format(today, "MMMM yyyy")}</div>
      <div className='mini-calendar-months-grid'>
        <div className='mini-calendar-months'>Mon</div>
        <div className='mini-calendar-months'>Tue</div>
        <div className='mini-calendar-months'>Wed</div>
        <div className='mini-calendar-months'>Thu</div>
        <div className='mini-calendar-months'>Fri</div>
        <div className='mini-calendar-months'>Sat</div>
        <div className='mini-calendar-months'>Sun</div>
      </div>

      <div className='mini-calendar-days-grid'>
        {days.map((day, index) => {
          return (
            <time
              className='mini-calendar-days'
              style={
                (isThisMonth(day) ? null : { color: "red" },
                isToday(day) ? { color: "white", background: "#605bff" } : null)
              }
              key={index}
            >
              {format(day, "dd")}
            </time>
          )
        })}
      </div>
    </div>
  )
}

export default MiniCalendar
