import { addMonths, subMonths, format } from "date-fns"
import { tr } from "date-fns/locale"

import "./GridNavbar.css"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
import { useState } from "react"

function GridNavbar({ t, days, viewTypeSetter, goToday, updateMonth }) {
  const [currentMonth, setCurrentMonth] = useState(new Date())
  format(currentMonth, "LLLL", { locale: tr })

  return (
    <div className='grid-navbar-container'>
      <div className='grid-navbar-arrow-container'>
        <div className='grid-navbar-arrow'>
          <FiChevronLeft
            onClick={() => {
              setCurrentMonth(subMonths(currentMonth, 1))
              updateMonth(subMonths(currentMonth, 1))
            }}
            size={24}
          />
        </div>
        <div className='grid-navbar-arrow-title'>
          {format(currentMonth, "LLLL yy", { locale: tr })}
        </div>
        <div className='grid-navbar-arrow'>
          <FiChevronRight
            onClick={() => {
              setCurrentMonth(addMonths(currentMonth, 1))
              updateMonth(addMonths(currentMonth, 1))
            }}
            size={24}
          />
        </div>
      </div>
      <div>
        {format(days[0], "dd MMMM", { locale: tr })} -{" "}
        {format(days[days.length - 1], "dd MMMM", { locale: tr })}
      </div>
      <div className='grid-navbar-button-containers'>
        <div
          className='grid-navbar-button'
          onClick={() => {
            setCurrentMonth(new Date())
            goToday("today")
          }}
        >
          {t("TODAY")}
        </div>
        <div
          className='grid-navbar-button'
          onClick={() => viewTypeSetter("month")}
        >
          {t("MONTH")}
        </div>
        <div
          className='grid-navbar-button'
          onClick={() => viewTypeSetter("week")}
        >
          {t("WEEK")}
        </div>
        <div
          className='grid-navbar-button'
          onClick={() => viewTypeSetter("day")}
        >
          {t("DAY")}
        </div>
      </div>
    </div>
  )
}

export default GridNavbar
