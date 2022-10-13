import React, { useState, useEffect } from "react"
import {
  FiSun,
  //  FiMoon,
  FiClock,
} from "react-icons/fi"

const DateAndTime = (props) => {
  const [dateState, setDateState] = useState(new Date())
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 1000)
  }, [])

  return (
    <div className="flex h-full mr-10 items-center  ">
      <div className="flex mr-10">
        <FiSun size={26} color="white" className="mr-3" />
        <div className="flex items-center w-[60px]">
          {dateState.toLocaleString("tr", {
            day: "numeric",
            month: "long",
          })}
        </div>
      </div>
      <div className="flex">
        <FiClock size={26} color="white" className="mr-3" />
        <div className="flex items-center w-[60px]">
          {("0" + dateState.getHours()).slice(-2)} <span>:</span>
          {("0" + dateState.getMinutes()).slice(-2)}
          <span>:</span> {("0" + dateState.getSeconds()).slice(-2)}
        </div>
      </div>
    </div>
  )
}
export default DateAndTime
