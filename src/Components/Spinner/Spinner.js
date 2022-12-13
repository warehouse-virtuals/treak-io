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
      {wrong ? (
        <div className='error-message'>Something is not right! </div>
      ) : null}
    </div>
  )
}

export default Spinner
