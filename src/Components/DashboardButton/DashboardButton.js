import { FiPlus } from "react-icons/fi"

import "./DashboardButton.css"

const DashboardButton = ({ icon, backgroundColor, hoverColor }) => {
  return (
    <div
      className='dashboard-button-container'
      // style={{ background: backgroundColor }}
    >
      <div className='dashboard-button' style={{ color: backgroundColor }}>
        {icon}
      </div>

      <div className='dashboard-add'>
        <FiPlus size={20} style={{ color: backgroundColor }} />
      </div>
    </div>
  )
}

export default DashboardButton
