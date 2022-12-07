import {
  addMonths,
  subMonths,
  format,
  lastDayOfMonth,
  addWeeks,
  subWeeks,
} from "date-fns"
import { tr } from "date-fns/locale"

import "./GridNavbar.css"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
import { useState } from "react"

function GridNavbar({
  t,
  viewTypeSetter,
  goToday,
  updateMonth,
  updateWeek,
  viewType,
}) {
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [currentWeek, setCurrentWeek] = useState(new Date())
  console.log(viewType)
  return (
    <div className='grid-navbar-container'>
      <div className='grid-navbar-arrow-container'>
        <div className='grid-navbar-arrow'>
          <FiChevronLeft
            onClick={() => {
              switch (viewType) {
                case "month":
                  setCurrentMonth(subMonths(currentMonth, 1))
                  updateMonth(subMonths(currentMonth, 1))
                  break
                case "week":
                  setCurrentWeek(subWeeks(currentWeek, 1))
                  updateWeek(subWeeks(currentWeek, 1))
                  break
                default:
                  break
              }
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
              switch (viewType) {
                case "month":
                  setCurrentMonth(addMonths(currentMonth, 1))
                  updateMonth(addMonths(currentMonth, 1))
                  break
                case "week":
                  setCurrentWeek(addWeeks(currentWeek, 1))
                  updateWeek(addWeeks(currentWeek, 1))
                  break
                default:
                  break
              }
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
            switch (viewType) {
              case "month":
                setCurrentMonth(new Date())
                goToday("today")
                break
              case "week":
                setCurrentWeek(new Date())
                goToday("today")
                break
              default:
                break
            }
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
