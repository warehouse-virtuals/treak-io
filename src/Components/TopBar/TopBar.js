import SearchField from "../SearchField/SearchField"
import DateAndTime from "./DateAndTime"
import "./TopBar.css"
import { useTranslation } from "react-i18next"
import { useLocation } from "react-router-dom"

const TopBar = (props) => {
  const location = useLocation()
  const { t } = useTranslation("topbar")
  return (
    <div className='topbar-container'>
      <div className='topbar'>
        <div className='page-name'>{t(location.pathname)}</div>
        <div className='searchfield-component'>
          <SearchField />
        </div>
        <div className='datentime-component'>
          <DateAndTime />
        </div>
      </div>
    </div>
  )
}
export default TopBar
