const Card = (props) => {
  return (
    <div className="flex flex-col p-5 items-center h-56 bg-[#ffffff] w-1/5 min-w-[180px] transition-all text-xl rounded-3xl  drop-shadow-[0_10px_10px_rgba(147,197,253,0.25)] ">
      <div className="flex h-1/4 w-full mb-3">{props.icon}</div>
      <div className="flex h-1/4 w-full text-sm font-bold">{props.title}</div>
      <div className="flex text-4xl w-full h-1/2 font-semibold">
        {props.body}
      </div>
    </div>
  )
}

export default Card
