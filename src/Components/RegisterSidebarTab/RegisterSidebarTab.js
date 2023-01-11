import { useTranslation } from "react-i18next"
import "./RegisterSidebarTab.css"

const RegisterSidebarTab = ({
  icon,
  desc,
  hideSidebar,
  activeTab,
  onClick,
}) => {
  const { t } = useTranslation("register")
  return (
    <div
      className={
        hideSidebar ? "register-sidebar-row-min" : "register-sidebar-row-max"
      }
      onClick={onClick}
      style={activeTab ? { color: "#0e0e0e" } : null}
    >
      {icon}
      {hideSidebar ? null : <div>{t(desc)}</div>}
    </div>
  )
}

export default RegisterSidebarTab
