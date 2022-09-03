const CardAllAppointments = (props) => {
  let calculated = Math.round(
    (100 * (props.currentMonth - props.lastMonth)) / props.lastMonth
  )

  return (
    <div className="flex flex-col">
      <div className="flex h-1/2 w-full items-center">
        {props.currentMonth + props.cancelled}
      </div>
      <div className="flex h-1/2 w-full items-center text-sm text-green-300">
        {"+" + calculated + "%"}
        <div className="text-gray-300 ml-2">vs last month!</div>
      </div>
    </div>
  )
}

export default CardAllAppointments
