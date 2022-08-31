import SidebarTop from "../SidebarTop/SidebarTop"
import SidebarMiniCalender from "../SidebarMiniCalendar/SidebarMiniCalendar"
// import SidebarMonthlyReports from "../SidebarMonthlyReports/SidebarMonthlyReports"

const Sidebar = (props) => {
  return (
    <div className="w-1/3 flex pl-6 flex-col bg-[#ffffff] justify-left items-center">
      <SidebarTop />
      bıdıbıdı
      <SidebarMiniCalender />
      {/* <SidebarMonthlyReports /> */}
    </div>
  )
}

export default Sidebar
