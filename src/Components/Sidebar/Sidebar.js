import SidebarTop from "./SidebarTop"
import MiniCalender from "../MiniCalendar/MiniCalendar"
// import SidebarMonthlyReports from "./SidebarMonthlyReports"

import "./Sidebar.css"

const Sidebar = (props) => {
  return (
    <div className='sidebar-container'>
      <SidebarTop userData={props.userData} />
      <div className='sidebar-minicalendar-container'>
        <MiniCalender />
      </div>

      {/* <SidebarMonthlyReports /> */}
    </div>
  )
}

export default Sidebar
