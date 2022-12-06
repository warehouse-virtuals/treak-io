import { format } from "date-fns"
import { tr } from "date-fns/locale"

function GridHeader(props) {
  return (
    <div className='scheduler-grid-header'>
      {props.days.map((day, index) => {
        const headerDayCount = props.viewType !== "day" ? 7 : 1
        if (index < headerDayCount) {
          return (
            <div className='scheduler-grid-header-day-names '>
              {format(day, "eee", { locale: tr })}
            </div>
          )
        } else {
          return null
        }
      })}
    </div>
  )
}

export default GridHeader
