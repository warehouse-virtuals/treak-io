import { format, isSameMonth, isToday } from "date-fns"

function MonthView({ days, newMonth, appointments }) {
  return (
    <div className='scheduler-grid-cell-container'>
      {days.map((day, index) => {
        return (
          <div
            className='grid-cell'
            style={
              isSameMonth(day, newMonth)
                ? null
                : { background: "#f7f7f7", color: "#ccc" }
            }
          >
            <div
              className='grid-cell-day'
              style={
                isToday(day) ? { color: "white", background: "#605bff" } : null
              }
              key={index}
            >
              {format(day, "dd")}
            </div>
            <div className='grid-body'>
              {appointments.map((appointment) => {
                console.log(appointment.status)
                const dateOfAppt = format(appointment.start, "dd MM yy")
                const dateOfDay = format(day, "dd MM yy")
                if (dateOfAppt === dateOfDay) {
                  return (
                    <div
                      style={{ backgroundColor: appointment.color }}
                      className='grid-month-event'
                    >
                      <div className='grid-month-event-title'>
                        {appointment.title}
                      </div>
                    </div>
                  )
                } else {
                  return null
                }
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default MonthView
