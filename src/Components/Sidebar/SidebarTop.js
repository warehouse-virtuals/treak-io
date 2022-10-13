const SidebarTop = (props) => {
  return (
    <div className="flex justify-center items-center h-[100px] w-full">
      <div className="flex justify-left items-center space h-10 select-none  w-1/4 "></div>

      <div className="flex flex-col justify-center items-end w-2/4 h-full mr-4">
        <h1 className="text-lg font-medium select-none">
          {props.userData.name}&nbsp;{props.userData.surname}
        </h1>
        <h3 className="text-sm font-thin">{props.userData.jobTitle}</h3>
      </div>

      <div className="flex justify-center items-center h-20 w-20 overflow-hidden">
        <img
          alt="pp"
          className="h-full w-full shadow-lg rounded-full object-cover bg-slate-500"
          src={props.userData.ppurl}
        />
      </div>
    </div>
  )
}

export default SidebarTop
