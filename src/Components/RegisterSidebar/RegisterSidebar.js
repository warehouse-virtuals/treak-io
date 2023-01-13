import { useState } from "react"

import { FiUser, FiBriefcase, FiHome } from "react-icons/fi"

import RegisterSidebarTab from "../RegisterSidebarTab/RegisterSidebarTab"
import RegisterSidebarFooter from "../RegisterSidebarFooter/RegisterSidebarFooter"

const RegisterSidebar = ({ activeTab, activeTabSetter }) => {
  const [hideSidebar, setHideSidebar] = useState(false)
  return (
    <div
      className={hideSidebar ? "register-sidebar-min" : "register-sidebar-max"}
    >
      <RegisterSidebarTab
        icon={<FiUser />}
        desc={"General Information"}
        hideSidebar={hideSidebar}
        activeTab={activeTab === "general" ? true : false}
        onClick={() => activeTabSetter("general")}
      />
      <RegisterSidebarTab
        icon={<FiBriefcase />}
        desc={"Business Information"}
        hideSidebar={hideSidebar}
        activeTab={activeTab === "business" ? true : false}
        onClick={() => activeTabSetter("business")}
      />
      <RegisterSidebarTab
        icon={<FiHome />}
        desc={"Clinic Information"}
        hideSidebar={hideSidebar}
        activeTab={activeTab === "clinic" ? true : false}
        onClick={() => activeTabSetter("clinic")}
      />

      <RegisterSidebarFooter
        hideSidebar={hideSidebar}
        hideSidebarSetter={(boolean) => setHideSidebar(boolean)}
      />
    </div>
  )
}

export default RegisterSidebar
