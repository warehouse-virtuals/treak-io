const CardGoalProgress = (props) => {
  let calculated = Math.round((props.sold * 100) / props.goal)
  return (
    <div className="flex flex-col">
      <div className="flex h-1/2 w-full items-center">
        {props.sold}
        <div className="text-gray-400 text-2xl">/{props.goal}</div>
      </div>
      <div className="flex h-1/2 w-full items-center text-sm text-green-300">
        {calculated + "%"}
        <div className="text-gray-400 ml-2"> {props.t("is done")}!</div>
      </div>
    </div>
  )
}

export default CardGoalProgress
