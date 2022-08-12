const Card = (props) => {
  return (
    <div
      onClick={props.onClick}
      className="flex flex-col p-4 items-center bg-blue-300 h-40 w-1/5 mr-10 text-[#0a1f33] text-xl rounded-3xl drop-shadow-[0_10px_10px_rgba(147,197,253,0.25)] "
    >
      <div className="h-2/4 w-full">{props.icon}</div>
      <div className="h-2/4 w-full text-white">{props.whatDisDo}</div>
    </div>
  )
}

export default Card
