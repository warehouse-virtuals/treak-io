import SidebarTop from "./SidebarTop"
// import MiniCalender from "./MiniCalendar"
// import SidebarMonthlyReports from "./SidebarMonthlyReports"

const Sidebar = (props) => {
  return (
    <div className="w-1/4 flex h-full px-5 rounded-tl-3xl box-border flex-col bg-white">
      <SidebarTop userData={props.userData} />
      {/* <MiniCalender /> */}
      {/* <SidebarMonthlyReports /> */}
    </div>
  )
}

export default Sidebar
