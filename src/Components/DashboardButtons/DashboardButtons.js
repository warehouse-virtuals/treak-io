import { FiCalendar, FiFile, FiShoppingBag, FiUser } from "react-icons/fi"

import DashboardButton from "../DashboardButton/DashboardButton"

import "./DashboardButtons.css"

const DashboardButtons = () => {
  return (
    <div className='dashboard-buttons-container'>
      <DashboardButton
        icon={<FiUser size={26} />}
        backgroundColor='var(--c-green)'
      />
      <DashboardButton
        backgroundColor='var(--c-purple)'
        icon={<FiCalendar size={26} />}
      />
      <DashboardButton
        backgroundColor='var(--c-orange)'
        icon={<FiFile size={26} />}
      />
      <DashboardButton
        backgroundColor='var(--c-gold)'
        icon={<FiShoppingBag size={26} />}
      />
    </div>
  )
}

export default DashboardButtons
