import { useState, useEffect } from "react"
import { format, startOfWeek, endOfWeek, eachDayOfInterval } from "date-fns"

import { tr } from "date-fns/locale"

function GridHeader({ days, newWeek, viewType, dayShowNumbers }) {
  const [weekDays, setWeekDays] = useState([])

  useEffect(() => {
    setWeekDays(
      eachDayOfInterval({
        start: startOfWeek(newWeek, { locale: tr }),
        end: endOfWeek(newWeek, { locale: tr }),
      })
    )
  }, [newWeek])

  return (
    <div className='scheduler-grid-header'>
      {viewType === "week" ? <div className='blank-space'></div> : null}
      {weekDays.map((day, index) => {
        return (
          <div key={day} className='scheduler-grid-header-day-names '>
            {dayShowNumbers
              ? format(day, "dd EE", { locale: tr })
              : format(day, "EE", { locale: tr })}
          </div>
        )
      })}
    </div>
  )
}

export default GridHeader
