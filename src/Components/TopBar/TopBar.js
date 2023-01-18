import SearchField from "../SearchField/SearchField"
import DateAndTime from "./DateAndTime"
import { FiMenu } from "react-icons/fi"
import { useTranslation } from "react-i18next"
import { useLocation } from "react-router-dom"

import { UIToolsStatus } from "../../Context/UIToolsStatusContext"

import "./TopBar.css"

const TopBar = () => {
  const location = useLocation()
  const { t } = useTranslation("topbar")

  const { expandSearchBar, toggleCollapse } = UIToolsStatus()

  return (
    <div className='topbar-container'>
      <div className='topbar'>
        <div className='page-name'>
          <div
            className='hamburger-menu-button'
            onClick={() => toggleCollapse(false)}
          >
            {<FiMenu size={24} />}
          </div>
          {t(location.pathname)}
        </div>

        <div
          className={
            expandSearchBar === false
              ? "searchfield-component-expand"
              : "searchfield-component"
          }
        >
          <SearchField expandSearchBar={expandSearchBar} />
        </div>
        <div className='datentime-component'>
          <DateAndTime />
        </div>
      </div>
    </div>
  )
}
export default TopBar
