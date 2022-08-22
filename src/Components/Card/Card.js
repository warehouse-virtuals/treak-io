const Card = (props) => {
  var classBase =
    "flex flex-col p-4 drop-shadow-lg items-center h-32 hover:pb-1 w-1/5 mr-10 transition-all cursor-pointer text-xl rounded-3xl drop-shadow-[0_10px_10px_rgba(147,197,253,0.25)] "

  switch (props.bg) {
    case "blue":
      classBase = classBase + " bg-[#fae6c2] text-[#D6872E]"
      break
    case "purple":
      classBase = classBase + " bg-[#e5d1ff] text-[#7831CB] "
      break
    default:
      break
  }

  return (
    <div onClick={props.onClick} className={classBase}>
      <div className="h-2/4 w-full ">{props.icon}</div>
      <div className="h-2/4 w-full">{props.whatDisDo}</div>
    </div>
  )
}

export default Card
