import React, { useState, useEffect } from "react"
import "./DateAndTime.css"
import {
  FiSun,
  //  FiMoon,
  FiClock,
} from "react-icons/fi"

const DateAndTime = () => {
  const [dateState, setDateState] = useState(new Date())
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 1000)
  }, [])

  return (
    <div className='datentime-container'>
      <div className='datentime'>
        <FiSun size={26} className='datentime-icons' />
        <div className='datentime-content'>
          {dateState.toLocaleString("tr", {
            day: "numeric",
            month: "long",
          })}
        </div>
      </div>
      <div className='datentime'>
        <FiClock size={26} className='datentime-icons' />
        <div className='datentime-content'>
          {("0" + dateState.getHours()).slice(-2)}:
          {("0" + dateState.getMinutes()).slice(-2)}:
          {("0" + dateState.getSeconds()).slice(-2)}
        </div>
      </div>
    </div>
  )
}
export default DateAndTime
