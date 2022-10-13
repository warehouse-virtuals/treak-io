import SidebarTop from "./SidebarTop"
// import MiniCalender from "./MiniCalendar"
// import SidebarMonthlyReports from "./SidebarMonthlyReports"

const Sidebar = (props) => {
  return (
    <div className="w-full flex drop-shadow-xl h-full  box-border flex-col bg-white">
      <SidebarTop userData={props.userData} />
      {/* <MiniCalender /> */}
      {/* <SidebarMonthlyReports /> */}
    </div>
  )
}

export default Sidebar
