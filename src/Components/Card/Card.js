const Card = (props) => {
  var classBase =
    "flex flex-col p-4 items-center h-32 w-1/5 mr-10 text-[#c1d7ff] hover:text-white hover:stroke-white text-xl rounded-3xl drop-shadow-[0_10px_10px_rgba(147,197,253,0.25)] "

  switch (props.bg) {
    case "blue":
      classBase = classBase + " bg-gradient-to-r from-[#2E6BE6] to-[#3b92fc]"
      break
    case "purple":
      classBase = classBase + " bg-gradient-to-r from-[#c25ff8] to-[#d49fff]"
      break
    default:
      break
  }

  return (
    <div onClick={props.onClick} className={classBase}>
      <div className="h-2/4 w-full">{props.icon}</div>
      <div className="h-2/4 w-full">{props.whatDisDo}</div>
    </div>
  )
}

export default Card
