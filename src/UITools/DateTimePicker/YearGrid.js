import { format, isThisYear, addYears } from "date-fns"
import { useEffect, useState } from "react"

import { tr } from "date-fns/locale"

import "./YearGrid.css"

const YearGrid = ({ year, handlePickedDate }) => {
  const [years, setYears] = useState([])

  useEffect(() => {
    const formattedYearList = []
    for (let index = -4; index < 5; index++) {
      formattedYearList.push(addYears(year, index))
    }
    setYears(formattedYearList)
  }, [year])

  return (
    <div className='datepicker-year-grid-container'>
      {years.map((year, index) => {
        return (
          <div
            key={index}
            id={year}
            className='datepicker-year-grid-cell'
            onClick={() => handlePickedDate(year)}
            style={
              isThisYear(year)
                ? { color: "white", background: "var(--c-blue-400)" }
                : null
            }
          >
            <div>{format(year, "y", { locale: tr })}</div>
          </div>
        )
      })}
    </div>
  )
}

export default YearGrid
