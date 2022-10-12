import SearchField from "../SearchField/SearchField"
import DateAndTime from "./DateAndTime"
import { useTranslation } from "react-i18next"
import { useLocation } from "react-router-dom"

const TopBar = (props) => {
  const location = useLocation()
  const { t } = useTranslation("topbar")
  return (
    <div className="flex bg-[#20295a] justify-between  text-white  items-center w-full h-16  select-none">
      <div className="flex justify-center drop-shadow-3xl items-center text-4xl font-semibold">
        {t(location.pathname)}
      </div>
      <div className="">
        <SearchField />
      </div>
      <div className="w-[400px]">
        <DateAndTime />
      </div>
    </div>
  )
}
export default TopBar
