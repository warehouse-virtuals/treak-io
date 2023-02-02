import { useState, useEffect, useRef } from "react"
import {
  addMinutes,
  format,
  subMinutes,
  addMonths,
  subMonths,
  roundToNearestMinutes,
  addDays,
  subDays,
  parse,
  startOfToday,
  endOfMonth,
  previousDay,
  eachDayOfInterval,
  startOfWeek,
  endOfWeek,
  setHours,
  setMinutes,
  getHours,
  getMinutes,
} from "date-fns"
import { tr } from "date-fns/locale"

import {
  FiCalendar,
  FiEdit2,
  FiChevronRight,
  FiChevronLeft,
} from "react-icons/fi"
import "./DateTimePicker.css"

import MonthDaysGrid from "./MonthDaysGrid"

const DateTimePicker = ({ date, setNewDate }) => {
  const [isPickerOpen, setIsPickerOpen] = useState(false)
  const [touchStartPos, setTouchStartPos] = useState()
  const [activeViewTypeIndex, setActiveViewTypeIndex] = useState(0)

  const [days, setDays] = useState([])
  const [month, setMonth] = useState(new Date())
  const [weekDays, setWeekDays] = useState([])

  const handlePickedDate = (date) => {
    setNewDate((prevDate) =>
      setHours(setMinutes(date, getMinutes(prevDate)), getHours(prevDate))
    )
    setIsPickerOpen(false)
  }

  const handleScrollTime = (event) => {
    if (event.deltaY < 0) {
      setNewDate(addMinutes(date, 5))
    } else if (event.deltaY > 0) {
      setNewDate(subMinutes(date, 5))
    }
  }
  const handleScrollDate = (event) => {
    if (event.deltaY < 0) {
      setNewDate(addDays(date, 1))
    } else if (event.deltaY > 0) {
      setNewDate(subDays(date, 1))
    }
  }

  const handleTouchDate = (event) => {
    const fingerMovePosition = touchStartPos - event.touches[0].pageY
    if (fingerMovePosition > 0) {
      setNewDate(subDays(date, 1))
      setTouchStartPos(event.touches[0].pageY)
    } else if (fingerMovePosition < 0) {
      setNewDate(addDays(date, 1))
      setTouchStartPos(event.touches[0].pageY)
    }
  }

  const handleTouchTime = (event) => {
    const fingerMovePosition = touchStartPos - event.touches[0].pageY
    if (fingerMovePosition > 0) {
      setNewDate(subMinutes(date, 5))
      setTouchStartPos(event.touches[0].pageY)
    } else if (fingerMovePosition < 0) {
      setNewDate(addMinutes(date, 5))
      setTouchStartPos(event.touches[0].pageY)
    }
  }

  useEffect(() => {
    const setUpdatedDate = () => {
      const firstDayCurrentMonth = parse(
        format(month, "MMM-yyyy"),
        "MMM-yyyy",
        month
      )
      const formatedDates = eachDayOfInterval({
        start: startOfWeek(previousDay(firstDayCurrentMonth, 1), {
          locale: tr,
        }),
        end: endOfWeek(endOfMonth(firstDayCurrentMonth), { locale: tr }),
      })

      setDays(formatedDates)
    }

    setUpdatedDate()
    setWeekDays(
      eachDayOfInterval({
        start: startOfWeek(month, { locale: tr }),
        end: endOfWeek(month, { locale: tr }),
      })
    )
  }, [month])

  useEffect(() => {
    console.log("sa", activeViewTypeIndex)
  })
  return (
    <div
      className={`date-time-picker-close ${isPickerOpen ? "round-top" : null}`}
    >
      <div
        id='date-time-picker-date'
        className='date-time-picker-date'
        scrollable='true'
        onWheel={handleScrollDate}
        onTouchStart={(event) => setTouchStartPos(event.touches[0].pageY)}
        onTouchMove={handleTouchDate}
      >
        <div className='date-date-picker-earlier'>
          {`${format(subDays(date, 1), "dd MMM yy", { locale: tr })}`}
        </div>
        {`${format(date, "dd MMM yy", { locale: tr })}`}
        <div className='date-date-picker-later'>
          {`${format(addDays(date, 1), "dd MMM yy", { locale: tr })}`}
        </div>
      </div>

      <div
        id='date-time-picker-time'
        className='date-time-picker-time'
        scrollable='true'
        onWheel={handleScrollTime}
        onTouchStart={(event) => setTouchStartPos(event.touches[0].pageY)}
        onTouchMove={handleTouchTime}
      >
        <div className='date-time-picker-earlier'>
          {`${format(
            subMinutes(
              roundToNearestMinutes(date, {
                nearestTo: 5,
                roundingMethod: "floor",
              }),
              5
            ),
            "HH:mm",
            { locale: tr }
          )}`}
        </div>
        <div>{`${format(date, "HH:mm", {
          locale: tr,
        })}`}</div>

        <div className='date-time-picker-later'>
          {`${format(
            addMinutes(
              roundToNearestMinutes(date, {
                nearestTo: 5,
                roundingMethod: "floor",
              }),
              5
            ),
            "HH:mm",
            { locale: tr }
          )}`}
        </div>
      </div>
      <div
        className='date-time-picker-calendar-icon'
        onClick={() => setIsPickerOpen((prevState) => !prevState)}
        style={isPickerOpen ? { color: "var(--c-primary)" } : null}
      >
        <FiCalendar size={18} />
        <div className='date-time-picker-calendar-edit-icon'>
          <FiEdit2 size={12} />
        </div>
      </div>
      {isPickerOpen ? (
        <div className='date-time-picker-mini-calendar-container'>
          <div className='date-time-picker-mini-calendar-header'>
            <div
              className='date-time-picker-mini-calendar-header-buttons'
              onClick={() => {
                setMonth(subMonths(month, 1))
              }}
            >
              <FiChevronLeft size={14} />
            </div>
            <div
              className='date-time-picker-mini-calendar-header-title'
              onClick={() =>
                setActiveViewTypeIndex((prevIndex) => {
                  if (prevIndex === 2) {
                    return 0
                  }
                  return prevIndex + 1
                })
              }
            >
              {format(month, "LLLL yy", { locale: tr })}
            </div>
            <div
              className='date-time-picker-mini-calendar-header-buttons'
              onClick={() => setMonth(addMonths(month, 1))}
            >
              <FiChevronRight size={14} />
            </div>
          </div>

          <div className='date-time-picker-mini-calendar-body'>
            {activeViewTypeIndex === 0 ? (
              <MonthDaysGrid
                days={days}
                weekDays={weekDays}
                month={month}
                handlePickedDate={handlePickedDate}
              />
            ) : activeViewTypeIndex === 1 ? (
              <MonthDaysGrid
                days={days}
                weekDays={weekDays}
                month={month}
                handlePickedDate={handlePickedDate}
              />
            ) : activeViewTypeIndex === 2 ? (
              <MonthDaysGrid
                days={days}
                weekDays={weekDays}
                month={month}
                handlePickedDate={handlePickedDate}
              />
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default DateTimePicker
