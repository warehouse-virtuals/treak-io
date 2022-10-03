import SearchField from "../SearchField/SearchField"
import DateAndTime from "./DateAndTime"
import { useTranslation } from "react-i18next"
import { useLocation } from "react-router-dom"

const TopBar = (props) => {
  const location = useLocation()
  const { t } = useTranslation("topbar")
  return (
    <div className="flex justify-between text-[#20295a] italic  items-center w-full h-20 px-10 mt-5  ">
      <div className="flex justify-center drop-shadow-3xl items-center text-4xl font-semibold">
        {t(location.pathname)}
      </div>
      <div className="flex">
        <SearchField />
        <DateAndTime />
      </div>
    </div>
  )
}
export default TopBar
