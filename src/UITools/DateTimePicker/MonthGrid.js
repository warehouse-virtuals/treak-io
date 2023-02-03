import {
  format,
  eachMonthOfInterval,
  startOfYear,
  endOfYear,
  isThisMonth,
} from "date-fns"
import { tr } from "date-fns/locale"

import { useEffect, useState } from "react"

import "./MonthGrid.css"

const MonthGrid = ({ year, handlePickedDate }) => {
  const [months, setMonths] = useState([])

  useEffect(() => {
    setMonths(
      eachMonthOfInterval({ start: startOfYear(year), end: endOfYear(year) })
    )
  }, [])

  return (
    <div className='datepicker-month-grid-container'>
      {months.map((month, index) => {
        return (
          <div
            key={index}
            id={month}
            className='datepicker-month-grid-cell'
            onClick={() => handlePickedDate(month)}
            style={
              isThisMonth(month)
                ? { color: "white", background: "var(--c-blue-400)" }
                : null
            }
          >
            <div>{format(month, "MMM", { locale: tr })}</div>
          </div>
        )
      })}
    </div>
  )
}

export default MonthGrid
