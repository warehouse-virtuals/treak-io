import { format, isSameMonth, isToday } from "date-fns"
import { tr } from "date-fns/locale"

import "./DaysGrid.css"

const DaysGrid = ({ days, month, weekDays, handlePickedDate }) => {
  return (
    <div className='datepicker-days-grid-container'>
      {weekDays.map((day, index) => {
        return (
          <div key={day} className='datepicker-days-grid-day-names'>
            {format(day, "EE", { locale: tr })}
          </div>
        )
      })}
      {days.map((day, index) => {
        return (
          <div
            key={index}
            id={day}
            className='datepicker-days-grid-cell'
            style={
              isSameMonth(day, month) ? null : { color: "var(--c-secondary)" }
            }
            onClick={() => handlePickedDate(day)}
          >
            <div
              className='grid-cell-day'
              style={
                isToday(day)
                  ? { color: "white", background: "var(--c-blue-400)" }
                  : null
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

export default DaysGrid
