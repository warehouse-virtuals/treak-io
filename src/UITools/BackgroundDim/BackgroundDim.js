import { ThemeState } from "../../Context/ThemeContext"
import "./BackgroundDim.css"

const BackgroundDim = () => {
  const { backgroundDim, setBackgroundDim } = ThemeState()
  return (
    <div
      className={`background-dim-container ${
        backgroundDim ? "open" : "closed"
      }`}
    ></div>
  )
}

export default BackgroundDim
