import {
  TbLayoutSidebarRightCollapse,
  TbLayoutSidebarLeftCollapse,
} from "react-icons/tb"

const RegisterSidebarFooter = ({ hideSidebar, hideSidebarSetter }) => {
  return (
    <div
      className='register-expand-button'
      onClick={() => hideSidebarSetter((hideSidebar) => !hideSidebar)}
    >
      {hideSidebar ? (
        <div
          className={
            hideSidebar
              ? "register-sidebar-row-min"
              : "register-sidebar-row-max"
          }
          style={{ color: "#0e0e0e" }}
        >
          <TbLayoutSidebarRightCollapse size={24} />
        </div>
      ) : (
        <div
          className={
            hideSidebar
              ? "register-sidebar-row-min"
              : "register-sidebar-row-max"
          }
          style={{ color: "#0e0e0e" }}
        >
          <TbLayoutSidebarLeftCollapse size={24} />
          {hideSidebar ? null : <div>Collapse Sidebar</div>}
        </div>
      )}
    </div>
  )
}

export default RegisterSidebarFooter
