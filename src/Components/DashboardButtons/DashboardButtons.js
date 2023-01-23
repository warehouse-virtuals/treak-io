import { FiCalendar, FiTool, FiShoppingBag, FiUser } from "react-icons/fi"

import DashboardButton from "../DashboardButton/DashboardButton"

import "./DashboardButtons.css"

const DashboardButtons = () => {
  return (
    <div className='dashboard-buttons-container'>
      <DashboardButton
        icon={<FiUser size={18} />}
        iconColor='var(--c-green-500)'
        backgroundColor='var(--c-green-100)'
      />
      <DashboardButton
        icon={<FiCalendar size={18} />}
        iconColor='var(--c-violet-500)'
        backgroundColor='var(--c-violet-100)'
      />
      <DashboardButton
        icon={<FiTool size={18} />}
        iconColor='var(--c-blue-500)'
        backgroundColor='var(--c-blue-100)'
      />
      <DashboardButton
        icon={<FiShoppingBag size={18} />}
        iconColor='var(--c-orange-500)'
        backgroundColor='var(--c-orange-100)'
      />
    </div>
  )
}

export default DashboardButtons
