import { useState, useEffect } from "react"
import { format, startOfWeek, endOfWeek, eachDayOfInterval } from "date-fns"

import { tr } from "date-fns/locale"

function GridHeader({ days, newWeek, viewType }) {
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
      {weekDays.map((day, index) => {
        return (
          <div key={day} className='scheduler-grid-header-day-names '>
            {format(day, " dd EE", { locale: tr })}
          </div>
        )
      })}
    </div>
  )
}

export default GridHeader
