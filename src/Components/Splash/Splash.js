import { useEffect, useState } from "react"

import TextTransition, { presets } from "react-text-transition"
// import logo from "./logo.svg"
import "./Splash.css"

const warehouse = ["Warehouse", "We"]
const care = [".care", " care"]

const Splash = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      1000 // every 3 seconds
    )
    return () => clearTimeout(intervalId)
  }, [])

  return (
    <div className='splash'>
      <TextTransition springConfig={presets.molasses}>
        {warehouse[index % warehouse.length]}
        {care[index % care.length]}
      </TextTransition>
    </div>
  )
}

export default Splash
