import "./CardTodaysAppointments.css"

const CardTodaysAppointments = (props) => {
  let calculated = Math.round(
    ((props.finished + props.cancelled) * 100) / props.booked
  )
  return (
    <div className='card-todays-container'>
      <div className='card-todays-header'>
        <div className='card-todays-finished'>
          {props.finished + props.cancelled}
        </div>
        <div className='card-todays-booked'>/{props.booked}</div>
        <div className='card-todays-cancelled'>
          {props.cancelled} {props.t("cancelled")}!
        </div>
      </div>
      <div className='card-todays-done'>
        {calculated + "%"}
        <div className='' style={{ "margin-left": "5px" }}>
          {props.t("is done")}!
        </div>
      </div>
    </div>
  )
}

export default CardTodaysAppointments
