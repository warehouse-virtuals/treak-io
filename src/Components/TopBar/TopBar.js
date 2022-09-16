import SearchField from "../SearchField/SearchField"
import DateAndTime from "./DateAndTime"
import { FiBell } from "react-icons/fi"

const TopBar = (props) => {
  return (
    <div className="flex justify-between text-m items-center w-full h-24 bg-[#20295a]">
      <SearchField />
      <div className="flex justify-evenly w-1/4">
        <DateAndTime />
        <FiBell
          className="flex p-2 h-[40px] w-[40px] rounded-xl border border-slate-500 "
          color="white"
        />
      </div>
    </div>
  )
}
export default TopBar
