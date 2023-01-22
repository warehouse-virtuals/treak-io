import { FiPlus } from "react-icons/fi"

import "./DashboardButton.css"

const DashboardButton = ({ icon, backgroundColor, iconColor }) => {
  return (
    <div
      className='dashboard-button-container'
      // style={{ background: backgroundColor }}
    >
      <div
        className='dashboard-button'
        style={{ background: backgroundColor, color: iconColor }}
      >
        {icon}
      </div>

      <div className='dashboard-add'>
        <FiPlus size={20} style={{ color: iconColor }} />
      </div>
    </div>
  )
}

export default DashboardButton
