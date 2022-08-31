import { FiSettings, FiBell } from "react-icons/fi"
import fakePP from "../../Assets/profilePic/fakeDoc2.png"
const SidebarTop = () => {
  return (
    <div className="flex justify-center items-center h-[100px] w-full pr-4 pt-4">
      <div className="flex justify-left items-center space h-full w-1/4 ">
        <FiSettings className="ml-5" size={24} stroke="#404b61" />
        <FiBell className="ml-5" size={24} stroke="#404b61" />
      </div>

      <div className="flex flex-col justify-center items-end w-2/4 h-full mr-4">
        <h1 className="text-lg font-medium">Nazlı Aydın</h1>
        <h3 className="text-sm font-thin">İşitme Uzmanı</h3>
      </div>

      <div className="flex justify-center items-center h-full w-1/4">
        <img
          alt="pp"
          className="h-20 w-20 shadow-lg rounded-full bg-slate-500"
          src={fakePP}
        />
      </div>
    </div>
  )
}

export default SidebarTop
