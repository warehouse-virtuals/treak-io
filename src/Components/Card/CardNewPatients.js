const CardNewPatients = (props) => {
  let calculated = Math.round(
    (100 * props.newPatients) / props.lastMonthPatients
  )

  return (
    <div className="flex w-full flex-col">
      <div className="flex h-1/2 w-full">
        <div className="flex w-1/3 items-center">{props.newPatients}</div>
        <div className="flex w-2/3 text-gray-300 text-xl items-center">
          {props.totalPatients} total
        </div>
      </div>
      <div className="flex h-1/2 w-full items-center text-sm text-green-300">
        {"+" + calculated + "%"}
        <div className="text-gray-300 ml-2">vs last month!</div>
      </div>
    </div>
  )
}

export default CardNewPatients
