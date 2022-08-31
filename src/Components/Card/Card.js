const Card = (props) => {
  const calcPercentage = (a, b, c) => {
    return Math.round(((a + b) * 100) / c)
  }

  const calcAllAppointments = (current, last) => {
    let calculated = Math.round((100 * (current - last)) / last)
    return calculated
  }

  return (
    <div className="flex flex-col pt-5 pl-5 items-center h-56 bg-[#ffffff] w-1/5 min-w-[180px] transition-all text-xl rounded-3xl  drop-shadow-[0_10px_10px_rgba(147,197,253,0.25)] ">
      <div className="flex h-1/4 w-full">{props.icon}</div>
      <div className="h-1/4 w-full">{props.title}</div>
      <div className="h-1/4 w-full flex items-center ">
        <div className="flex text-4xl">{props.currentMonth}</div>
        <div className="flex text-4xl">{props.sold}</div>
        <div className="flex text-4xl">{props.newPatients}</div>
        <div className="flex items-end text-4xl">{props.finished} </div>
        <div className="flex text-gray-400">
          {props.punctuation}
          {props.goal}
          {props.booked}
        </div>
      </div>
      {props.showAppointmentsPercentage ? (
        <div className="flex items-center h-1/4 w-full text-sm text-green-500">
          {calcPercentage(props.finished, props.cancelled, props.booked)}%
          <div className="text-gray-400 ml-3">
            {props.cancelled
              ? `+ ${props.cancelled} cancelled appointment`
              : "No cancelled"}
          </div>
        </div>
      ) : (
        false
      )}
      {props.showAllAppointments ? (
        <div className="flex items-center h-1/4 w-full text-sm ">
          {calcAllAppointments(props.currentMonth, props.lastMonth) > 0 ? (
            <div className="text-green-500">
              +{calcAllAppointments(props.currentMonth, props.lastMonth)}%
            </div>
          ) : (
            <div className="text-red-500">
              {calcAllAppointments(props.currentMonth, props.lastMonth)}%
            </div>
          )}

          <div className="text-gray-400 ml-3">vs last month</div>
        </div>
      ) : (
        false
      )}
      {props.showGoalPercentage ? (
        <div className="flex items-center h-1/4 w-full text-sm text-green-500">
          {calcPercentage(props.sold, 0, props.goal)}%
          <div className="text-gray-400 ml-3">
            {props.sold
              ? `${props.goal - props.sold} more aid to be sold`
              : "No aid sold"}
          </div>
        </div>
      ) : (
        false
      )}
      {props.showPatients ? (
        <div className="flex items-center h-1/4 w-full text-sm ">
          {calcAllAppointments(props.newPatients, props.lastMonthPatients) >
          0 ? (
            <div className="text-green-500">
              +{calcAllAppointments(props.newPatients, props.lastMonthPatients)}
              %
            </div>
          ) : (
            <div className="text-red-500">
              {calcAllAppointments(props.newPatients, props.lastMonthPatients)}%
            </div>
          )}

          <div className="text-gray-400 ml-3">vs last month</div>
        </div>
      ) : (
        false
      )}
    </div>
  )
}

export default Card
