import { CircularProgressbar } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"
const StatisticsItems = (props) => {
  return (
    <div className="flex h-full">
      <CircularProgressbar
        value={props.value}
        maxValue={props.maxValue}
        text={`${(props.value / props.maxValue) * 100}%`}
      />
    </div>
  )
}

export default StatisticsItems
