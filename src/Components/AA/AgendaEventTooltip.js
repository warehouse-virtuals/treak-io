import "./AgendaEventTooltip.css"
import { format } from "date-fns"
import { tr } from "date-fns/locale"

function AgendaEventTooltip({ event }) {
  const eventStartDate = format(event.start, "p", { locale: tr })
  const eventEndDate = format(event.end, "p", { locale: tr })

  return (
    <div
      style={{ background: event.color }}
      className='agenda-event-tooltip-container'
    >
      <div className='agenda-event-tooltip-time'>
        <div>
          {eventStartDate} - {eventEndDate}
        </div>
      </div>
    </div>
  )
}

export default AgendaEventTooltip
