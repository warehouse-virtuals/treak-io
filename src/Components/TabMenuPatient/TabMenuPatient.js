import { useLocation, useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"

import "./TabMenuPatient.css"

const TabMenuPatient = ({ tabs, path }) => {
  const location = useLocation()
  const navigate = useNavigate()

  const { t } = useTranslation("topbar")

  return (
    <div className='tabmenu-patient-container'>
      {path ? <div className='tabmenu-patient-pagename'>{path}</div> : null}
      {tabs ? (
        <div className='tabmenu-patient-tabs'>
          {tabs.map((tab, i) => {
            return (
              <div
                key={i}
                onClick={() => (tab.path ? navigate(tab.path) : null)}
                className={`tabmenu-patient-title ${
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

export default TabMenuPatient
