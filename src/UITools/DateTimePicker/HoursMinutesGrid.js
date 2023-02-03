import {
  format,
  endOfDay,
  startOfDay,
  endOfHour,
  startOfHour,
  isSameHour,
  isSameMinute,
  getHours,
  eachHourOfInterval,
  eachMinuteOfInterval,
  getMinutes,
} from "date-fns"
import { tr } from "date-fns/locale"

import { useEffect, useRef, useState } from "react"

import "./HoursMinutesGrid.css"

const HoursMinutesGrid = ({ date, handlePickedHour, handlePickedMinute }) => {
  const [hours, setHours] = useState([])
  const [minutes, setMinutes] = useState([])

  const hourRef = useRef()
  const minuteRef = useRef()

  useEffect(() => {
    setHours(
      eachHourOfInterval({ start: startOfDay(date), end: endOfDay(date) })
    )
    setMinutes(
      eachMinuteOfInterval({ start: startOfHour(date), end: endOfHour(date) })
    )
  }, [date])

  useEffect(() => {
    if (hourRef.current) {
      hourRef.current.scrollIntoView({
        block: "center",
        inline: "center",
      })
    }
  }, [hours])

  useEffect(() => {
    if (minuteRef.current) {
      minuteRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      })
    }
  }, [minutes])

  return (
    <div className='datepicker-hours-minutes-container'>
      <div className='datepicker-hours-container'>
        {hours.map((hour, index) => {
          return (
            <div
              key={hour}
              ref={getHours(date) === getHours(hour) ? hourRef : null}
              className='datepicker-hour'
              onClick={() => handlePickedHour(hour)}
              style={
                getHours(date) === getHours(hour)
                  ? { background: "var(--c-blue-400)", color: "var(--c-white)" }
                  : null
              }
            >
              {format(hour, "HH", { locale: tr })}
            </div>
          )
        })}
      </div>

      <div className='datepicker-minutes-container'>
        {minutes.map((minute, index) => {
          return (
            <div
              key={minute}
              ref={getMinutes(date) === getMinutes(minute) ? minuteRef : null}
              className='datepicker-minutes'
              onClick={() => handlePickedMinute(minute)}
              style={
                getMinutes(date) === getMinutes(minute)
                  ? { background: "var(--c-blue-400)", color: "var(--c-white)" }
                  : null
              }
            >
              {format(minute, "mm", { locale: tr })}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default HoursMinutesGrid
