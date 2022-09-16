const HiMsg = (props) => {
  return (
    <div className="flex flex-col justify-center h-32  pl-14  drop-shadow-[0_10px_10px_rgba(147,197,253,0.25)] mb-8 text-black text-4xl rounded-3xl font-bold ">
      <div className="flex">
        {props.primary}, &nbsp;
        <div className="flex text-[#ff9d04]"> {props.user.displayName}</div>
      </div>
      <div className="flex text-base font-medium italic text-gray-500">
        {props.secondary}
      </div>
    </div>
  )
}

export default HiMsg
