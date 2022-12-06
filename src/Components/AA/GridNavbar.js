import { addMonths, subMonths, format, lastDayOfMonth } from "date-fns"
import { tr } from "date-fns/locale"

import "./GridNavbar.css"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
import { useState } from "react"

function GridNavbar({ t, viewTypeSetter, goToday, updateMonth, viewType }) {
  const [currentMonth, setCurrentMonth] = useState(new Date())

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
        {format(currentMonth, "01 MMMM", { locale: tr })} -{" "}
        {format(lastDayOfMonth(currentMonth), "dd MMMM", { locale: tr })}
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
          style={
            viewType === "month"
              ? { background: "#cccccc", color: "#fff" }
              : null
          }
          className='grid-navbar-button'
          onClick={() => viewTypeSetter("month")}
        >
          {t("MONTH")}
        </div>
        <div
          style={
            viewType === "week"
              ? { background: "#cccccc", color: "#fff" }
              : null
          }
          className='grid-navbar-button'
          onClick={() => viewTypeSetter("week")}
        >
          {t("WEEK")}
        </div>
        <div
          style={
            viewType === "day" ? { background: "#cccccc", color: "#fff" } : null
          }
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
