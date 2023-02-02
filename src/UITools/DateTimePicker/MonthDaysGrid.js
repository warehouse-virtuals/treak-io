import { useState, useEffect } from "react"
import { format, isSameMonth, isToday } from "date-fns"
import { tr } from "date-fns/locale"

import "./MonthDaysGrid.css"

const MonthDaysGrid = ({ days, month, weekDays, handlePickedDate }) => {
  return (
    <div className='datepicker-month-days-grid-container'>
      {weekDays.map((day, index) => {
        return (
          <div key={day} className='datepicker-month-days-grid-day-names '>
            {format(day, "EE", { locale: tr })}
          </div>
        )
      })}
      {days.map((day, index) => {
        return (
          <div
            key={index}
            id={day}
            className='datepicker-month-days-grid-cell'
            style={
              isSameMonth(day, month)
                ? null
                : { background: "#f6f6f6", color: "#ccc" }
            }
            onClick={() => handlePickedDate(day)}
          >
            <div
              className='grid-cell-day'
              style={
                isToday(day) ? { color: "white", background: "#4285f4" } : null
              }
            >
              {format(day, "dd")}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default MonthDaysGrid
