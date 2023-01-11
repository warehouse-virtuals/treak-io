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
        icon={<FiUser size={24} />}
        desc={"General Information"}
        hideSidebar={hideSidebar}
        activeTab={activeTab === "general" ? true : false}
        onClick={() => activeTabSetter("general")}
      />
      <RegisterSidebarTab
        icon={<FiBriefcase size={24} />}
        desc={"Business Information"}
        hideSidebar={hideSidebar}
        activeTab={activeTab === "business" ? true : false}
        onClick={() => activeTabSetter("business")}
      />
      <RegisterSidebarTab
        icon={<FiHome size={24} />}
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
