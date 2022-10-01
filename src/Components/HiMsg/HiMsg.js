const HiMsg = (props) => {
  return (
    <div className="flex flex-col justify-center h-32  px-10  drop-shadow-[0_10px_10px_rgba(147,197,253,0.25)] text-slate-500 text-4xl  font-medium ">
      <div className="flex">
        {props.primary}&nbsp;
        <div className="flex text-[#ff9d04] italic">
          {" "}
          {props.user.displayName}
        </div>
      </div>
      <div className="flex text-base font-medium italic text-slate-500">
        {props.secondary}
      </div>
    </div>
  )
}

export default HiMsg
