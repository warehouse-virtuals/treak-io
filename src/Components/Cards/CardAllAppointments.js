import "./CardAllAppointments.css"

const CardAllAppointments = (props) => {
  let calculated = Math.round(
    (100 * (props.currentMonth - props.lastMonth)) / props.lastMonth
  )

  return (
    <div className='card-all-container'>
      <div className='card-all-header'>
        {props.currentMonth + props.cancelled}
      </div>
      <div className='card-all-compare'>
        {"+" + calculated + "%"}
        <div className='' style={{ marginLeft: "5px" }}>
          {props.t("vs last month")}
        </div>
      </div>
    </div>
  )
}

export default CardAllAppointments
