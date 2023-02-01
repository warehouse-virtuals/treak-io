import { useState, useEffect, useRef } from "react"
import {
  addMinutes,
  format,
  subMinutes,
  getTime,
  roundToNearestMinutes,
  addDays,
  subDays,
} from "date-fns"
import { tr } from "date-fns/locale"
import { FiCalendar, FiEdit2 } from "react-icons/fi"
import "./DateTimePicker.css"

const DateTimePicker = ({ date, setNewDate }) => {
  const [isPickerOpen, setIsPickerOpen] = useState(false)
  const [touchStartPos, setTouchStartPos] = useState()

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
      setTouchStartPos(event.touches[0].pageY)
      setNewDate(addDays(date, 1))
    } else if (fingerMovePosition < 0) {
      setTouchStartPos(event.touches[0].pageY)
      setNewDate(subDays(date, 1))
    }
  }

  const handleTouchTime = (event) => {
    const fingerMovePosition = touchStartPos - event.touches[0].pageY
    if (fingerMovePosition > 0) {
      setTouchStartPos(event.touches[0].pageY)
      setNewDate(addMinutes(date, 5))
    } else if (fingerMovePosition < 0) {
      setTouchStartPos(event.touches[0].pageY)
      setNewDate(subMinutes(date, 5))
    }
  }

  useEffect(() => {
    console.log(touchStartPos)
  }, [touchStartPos])

  if (isPickerOpen) {
    return (
      <div className='date-time-picker-open'>
        <div className='date-picker'>
          <div className='date-picker-header'></div>
          <div className='date-picker-header'></div>
        </div>
      </div>
    )
  } else {
    return (
      <div className='date-time-picker-close'>
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
          {`${format(date, "HH:mm", { locale: tr })}`}
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
        <div className='date-time-picker-calendar-icon'>
          <FiCalendar size={18} />
          <div className='date-time-picker-calendar-edit-icon'>
            <FiEdit2 size={12} />
          </div>
        </div>
      </div>
    )
  }
}

export default DateTimePicker
