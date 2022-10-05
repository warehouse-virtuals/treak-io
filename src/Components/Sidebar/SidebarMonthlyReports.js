import SidebarCards from "./SidebarCards"

const SidebarMonthlyReports = (props) => {
  return (
    <div className="flex flex-col w-full h-1/4 bg-red-300 justify-left items-center">
      <div className="flex w-full mt-5  bg-red-500 font-semibold">
        Monthly Reports
      </div>
      <SidebarCards />
    </div>
  )
}

export default SidebarMonthlyReports
