import SidebarTop from "../SidebarTop/SidebarTop"
import MiniCalender from "../MiniCalendar/MiniCalendar"
// import SidebarMonthlyReports from "../SidebarMonthlyReports/SidebarMonthlyReports"

const Sidebar = (props) => {
  return (
    <div className="w-full flex h-full pl-5 pr-5 box-border flex-col bg-white">
      <SidebarTop />
      <MiniCalender />
      {/* <SidebarMonthlyReports /> */}
    </div>
  )
}

export default Sidebar
