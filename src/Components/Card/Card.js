const Card = (props) => {
  return (
    <div
      onClick={props.onClick}
      className="flex flex-col justify-center items-center bg-blue-300 h-40 w-1/5 mr-10 text-[#0a1f33] text-xl rounded-3xl"
    >
      <div>{props.icon}</div>
      <div>{props.whatDisDo}</div>
    </div>
  )
}

export default Card
