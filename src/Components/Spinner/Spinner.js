import { useState, useEffect } from "react"
import WarehouseLogo from "../../Assets/treat-logos/treat-tp.svg"
import "./Spinner.css"

function Spinner() {
  const [wrong, setWrong] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setWrong(true)
    }, 3000)
  }, [])

  return (
    <div className='spinner'>
      <div className='spinner-logo'>
        <img alt='spinner' src={WarehouseLogo} />
      </div>

      <div
        className={wrong ? "error-message-visible" : "error-message-invisible"}
      >
        Something is not right!
      </div>
    </div>
  )
}

export default Spinner
