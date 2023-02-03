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
  endOfMonth,
  previousDay,
  eachDayOfInterval,
  startOfWeek,
  endOfWeek,
  getHours,
  getMinutes,
  subYears,
  startOfYear,
  endOfYear,
  addYears,
  setMinutes,
  setHours,
} from "date-fns"
import { da, tr } from "date-fns/locale"

import {
  FiCalendar,
  FiEdit2,
  FiChevronRight,
  FiChevronLeft,
  FiCircle,
} from "react-icons/fi"
import "./DateTimePicker.css"

import HoursMinutesGrid from "./HoursMinutesGrid.js"
import DaysGrid from "./DaysGrid.js"
import MonthGrid from "./MonthGrid.js"
import YearGrid from "./YearGrid.js"

const DateTimePicker = ({ date, setNewDate }) => {
  const [isPickerOpen, setIsPickerOpen] = useState(false)
  const [touchStartPos, setTouchStartPos] = useState()
  const [activeViewTypeIndex, setActiveViewTypeIndex] = useState(1)

  const [days, setDays] = useState([])
  const [month, setMonth] = useState(new Date())
  const [year, setYear] = useState(new Date())
  const [weekDays, setWeekDays] = useState([])

  const handlePickedDate = (date) => {
    setNewDate((prevDate) =>
      setHours(setMinutes(date, getMinutes(prevDate)), getHours(prevDate))
    )
    console.log(date)
    setMonth(date)
    setYear(date)
    if (activeViewTypeIndex === 0) {
      setIsPickerOpen(false)
      setActiveViewTypeIndex(1)
    } else if (activeViewTypeIndex === 1) {
      setActiveViewTypeIndex(0)
    } else if (activeViewTypeIndex === 2) {
      setActiveViewTypeIndex(1)
    } else if (activeViewTypeIndex === 3) {
      setActiveViewTypeIndex(2)
    }
  }

  const handlePickedHour = (dateWithPickedHour) => {
    setNewDate((prevDate) => setHours(prevDate, getHours(dateWithPickedHour)))
  }

  const handlePickedMinute = (dateWithPickedMinute) => {
    setNewDate((prevDate) =>
      setMinutes(prevDate, getMinutes(dateWithPickedMinute))
    )
    setIsPickerOpen(false)
    setActiveViewTypeIndex(1)
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
    console.log(date)
  }, [date])

  return (
    <div
      className={`date-time-picker-close ${
        isPickerOpen && activeViewTypeIndex !== 0 ? "round-top" : null
      } ${
        isPickerOpen && activeViewTypeIndex === 0
          ? "round-except-top-right"
          : null
      }`}
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
        <div>{`${format(
          // subMinutes(
          //   roundToNearestMinutes(date, {
          //     nearestTo: 1,
          //     roundingMethod: "ceil",
          //   }),
          //   5
          // ),
          date,
          "HH:mm",
          {
            locale: tr,
          }
        )}`}</div>

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
        onClick={() => {
          setMonth(date)
          setYear(date)
          setIsPickerOpen((prevState) => !prevState)
          setActiveViewTypeIndex(1)
        }}
        style={isPickerOpen ? { color: "var(--c-primary)" } : null}
      >
        <FiCalendar size={18} />
        <div className='date-time-picker-calendar-edit-icon'>
          <FiEdit2 size={12} />
        </div>
      </div>
      {isPickerOpen ? (
        <div
          className='date-picker-pick-today-button-container'
          onClick={() => {
            setNewDate(new Date())
            setMonth(new Date())
            setYear(new Date())
            setIsPickerOpen(false)
          }}
        >
          <FiCalendar size={20} />
          <div className='date-picker-pick-today-circle-button'>
            <FiCircle size={3} />
          </div>
        </div>
      ) : null}

      {isPickerOpen ? (
        <div
          className={`date-time-picker-mini-calendar-container ${
            activeViewTypeIndex === 0 ? "date-time-picker-hour-minutes" : null
          }`}
        >
          {activeViewTypeIndex === 0 ? null : (
            <div className='date-time-picker-mini-calendar-header'>
              <div
                className='date-time-picker-mini-calendar-header-buttons'
                onClick={() => {
                  if (activeViewTypeIndex === 0) {
                    console.log("saat zamanı")
                  } else if (activeViewTypeIndex === 1) {
                    setMonth(subMonths(month, 1))
                  } else if (activeViewTypeIndex === 2) {
                    setYear(subYears(year, 1))
                  } else if (activeViewTypeIndex === 3) {
                    setYear(subYears(year, 9))
                  }
                }}
              >
                <FiChevronLeft size={14} />
              </div>
              <div
                className='date-time-picker-mini-calendar-header-title'
                onClick={() =>
                  setActiveViewTypeIndex((prevIndex) => {
                    if (prevIndex === 3) {
                      return prevIndex
                    }
                    return prevIndex + 1
                  })
                }
              >
                {activeViewTypeIndex === 1
                  ? format(month, "LLLL yy", { locale: tr })
                  : null}
                {activeViewTypeIndex === 2
                  ? format(startOfYear(year), "MMM", { locale: tr }) +
                    " - " +
                    format(endOfYear(year), "MMM yy", { locale: tr })
                  : null}
                {activeViewTypeIndex === 3
                  ? format(subYears(year, 4), "yyyy") +
                    " - " +
                    format(addYears(year, 4), "yyyy")
                  : null}
              </div>
              <div
                className='date-time-picker-mini-calendar-header-buttons'
                onClick={() => {
                  if (activeViewTypeIndex === 0) {
                    console.log("saat zamanı")
                  } else if (activeViewTypeIndex === 1) {
                    setMonth(addMonths(month, 1))
                  } else if (activeViewTypeIndex === 2) {
                    setYear(addYears(year, 1))
                  } else if (activeViewTypeIndex === 3) {
                    setYear(addYears(year, 9))
                  }
                }}
              >
                <FiChevronRight size={14} />
              </div>
            </div>
          )}
          <div className='date-time-picker-mini-calendar-body'>
            {activeViewTypeIndex === 0 ? (
              <HoursMinutesGrid
                date={date}
                handlePickedHour={handlePickedHour}
                handlePickedMinute={handlePickedMinute}
              />
            ) : activeViewTypeIndex === 1 ? (
              <DaysGrid
                days={days}
                weekDays={weekDays}
                month={month}
                handlePickedDate={handlePickedDate}
              />
            ) : activeViewTypeIndex === 2 ? (
              <MonthGrid
                date={date}
                year={year}
                handlePickedDate={handlePickedDate}
              />
            ) : activeViewTypeIndex === 3 ? (
              <YearGrid
                date={date}
                year={year}
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
