import { useLocation, useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"

import "./TabMenu.css"

const TabMenu = ({ tabs }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const { t } = useTranslation("topbar")

  return (
    <div className='tabmenu-container'>
      <div className='tabmenu-pagename'>{t(location.pathname)}</div>
      {tabs ? (
        <div className='tabmenu-tabs'>
          {tabs.map((tab, i) => {
            return (
              <div
                key={i}
                onClick={() => navigate(tab.path)}
                className={`tabmenu-title ${
                  location.pathname === tab.path ? "focused-tab" : null
                }`}
              >
                {tab.title}
              </div>
            )
          })}
        </div>
      ) : null}
    </div>
  )
}

export default TabMenu
