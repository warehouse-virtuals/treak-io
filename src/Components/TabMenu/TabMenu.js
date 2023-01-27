import { useLocation, useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"
import "./TabMenu.css"

const TabMenu = ({ tabs, tabSetter, activeTab, path }) => {
  const location = useLocation()
  const { t } = useTranslation("topbar")

  return (
    <div className='tabmenu-container'>
      {path ? (
        <div className='tabmenu-pagename '>{t(location.pathname)}</div>
      ) : null}
      {tabs ? (
        <div className='tabmenu-tabs'>
          {tabs.map((tab, i) => {
            return (
              <div
                key={i}
                onClick={() => tabSetter(tab.tabName)}
                className={`tabmenu-title ${
                  tab.tabName === activeTab ? "focused-tab" : null
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
