import dashboardSVG from "../../Assets/orangeDashboard.svg"
const HiMsg = (props) => {
  return (
    <div className="flex flex-col justify-center h-32  pl-14 bg-[#ffffff]  drop-shadow-[0_10px_10px_rgba(147,197,253,0.25)] mb-8 text-black text-4xl rounded-3xl font-bold ">
      <div className="flex">
        Hello,&nbsp;
        <div className="flex text-[#ff9d04]"> {props.user.displayName}</div>
      </div>
      <div className="flex text-lg text-gray-500">Have a nice day at work!</div>
    </div>
  )
}

export default HiMsg
