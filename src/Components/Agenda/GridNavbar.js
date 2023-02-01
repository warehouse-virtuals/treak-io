import {
  addMonths,
  subMonths,
  format,
  lastDayOfMonth,
  addWeeks,
  subWeeks,
  addDays,
  subDays,
  startOfWeek,
  endOfWeek,
} from "date-fns"
import { tr } from "date-fns/locale"

import "./GridNavbar.css"
import {
  FiChevronLeft,
  FiChevronRight,
  FiCalendar,
  FiCircle,
  FiChevronDown,
} from "react-icons/fi"
import { useState, useRef, useEffect } from "react"

function GridNavbar({
  t,
  viewTypeSetter,
  goToday,
  updateMonth,
  updateWeek,
  updateDay,
  viewType,
}) {
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [currentWeek, setCurrentWeek] = useState(new Date())
  const [currentDay, setCurrentDay] = useState(new Date())
  const [viewTypeDropdownIsOpen, setViewTypeDropdownIsOpen] = useState(false)

  const navbarViewDropdownRef = useRef(null)

  const navbarTitleMonth = () => {
    return (
      <div>
        {format(currentMonth, "01 MMM", { locale: tr })} -{" "}
        {format(lastDayOfMonth(currentMonth), "dd MMM", { locale: tr })}
      </div>
    )
  }

  const navbarTitleWeek = () => {
    return (
      <div>
        {format(startOfWeek(currentWeek, { locale: tr }), "dd MMM", {
          locale: tr,
        })}{" "}
        -{" "}
        {format(endOfWeek(currentWeek, { locale: tr }), "dd MMM", {
          locale: tr,
        })}
      </div>
    )
  }
  const navbarTitleDay = () => {
    return (
      <div>
        {format(currentDay, "dd MMMM", {
          locale: tr,
        })}
      </div>
    )
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navbarViewDropdownRef.current &&
        !navbarViewDropdownRef.current.contains(event.target)
      ) {
        setViewTypeDropdownIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [viewTypeDropdownIsOpen])

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
                case "day":
                  setCurrentDay(subDays(currentDay, 1))
                  updateDay(subDays(currentDay, 1))
                  break
                default:
                  break
              }
            }}
            size={25}
          />
        </div>
        <div className='grid-navbar-arrow-title'>
          {viewType === "month"
            ? format(currentMonth, "LLLL yy", { locale: tr })
            : null}
          {viewType === "week"
            ? format(currentWeek, "LLLL yy", { locale: tr })
            : null}
          {viewType === "day"
            ? format(currentDay, "LLLL yy", { locale: tr })
            : null}
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
                case "day":
                  setCurrentDay(addDays(currentDay, 1))
                  updateDay(addDays(currentDay, 1))
                  break
                default:
                  break
              }
            }}
            size={25}
          />
        </div>
      </div>
      <div className='grid-navbar-title'>
        {viewType === "month" ? navbarTitleMonth() : null}
        {viewType === "week" ? navbarTitleWeek() : null}
        {viewType === "day" ? navbarTitleDay() : null}
      </div>

      <div className='grid-navbar-button-container'>
        <div className='grid-navbar-button'>
          <div
            className='navbar-view-today-button-container'
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
                case "day":
                  setCurrentDay(new Date())
                  goToday("today")
                  break
                default:
                  break
              }
            }}
          >
            <div className='navbar-view-button'>
              <FiCalendar size={25} />
            </div>
            <div className='navbar-view-today-circle-button'>
              <FiCircle size={3} />
            </div>
          </div>
        </div>
        <div className='navbar-view-menu-container' ref={navbarViewDropdownRef}>
          <div
            className='navbar-view-dropdown-menu-button'
            onClick={() => {
              setViewTypeDropdownIsOpen(
                (viewTypeDropdownIsOpen) => !viewTypeDropdownIsOpen
              )
            }}
          >
            {t(viewType.toUpperCase())}
            <div
              className={`navbar-view-dropdown-chevron ${
                viewTypeDropdownIsOpen ? "dropdown-chevron-rotate" : null
              }`}
            >
              <FiChevronDown size={16} />
            </div>
          </div>

          <div
            className={`navbar-view-dropdown ${
              viewTypeDropdownIsOpen ? null : "navbar-view-dropdown-close"
            }`}
          >
            <div
              style={
                viewType === "month"
                  ? { color: "var(--c-dropdown-item)" }
                  : null
              }
              className='navbar-view-dropdown-item'
              onClick={() => {
                setViewTypeDropdownIsOpen(false)
                viewTypeSetter("month")
              }}
            >
              {t("MONTH")} <span>{t("M")}</span>
            </div>
            <div
              style={
                viewType === "week" ? { color: "var(--c-dropdown-item)" } : null
              }
              className='navbar-view-dropdown-item'
              onClick={() => {
                setViewTypeDropdownIsOpen(false)
                viewTypeSetter("week")
              }}
            >
              {t("WEEK")} <span>{t("W")}</span>
            </div>
            <div
              style={
                viewType === "day" ? { color: "var(--c-dropdown-item)" } : null
              }
              className='navbar-view-dropdown-item'
              onClick={() => {
                setViewTypeDropdownIsOpen(false)
                viewTypeSetter("day")
              }}
            >
              {t("DAY")} <span>{t("D")}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GridNavbar
