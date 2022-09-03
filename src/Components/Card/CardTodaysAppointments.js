const CardTodaysAppointments = (props) => {
  let calculated = Math.round(
    ((props.finished + props.cancelled) * 100) / props.booked
  )
  return (
    <div className="flex flex-col">
      <div className="flex h-1/2 w-full items-center">
        {props.finished + props.cancelled}
        <div className="text-gray-300 text-2xl">/{props.booked}</div>
        <div className="text-red-300 ml-10 text-sm">
          {props.cancelled} cancelled
        </div>
      </div>
      <div className="flex h-1/2 w-full items-center text-sm text-green-300">
        {calculated + "%"}
        <div className="text-gray-300 ml-2"> is done!</div>
      </div>
    </div>
  )
}

export default CardTodaysAppointments
