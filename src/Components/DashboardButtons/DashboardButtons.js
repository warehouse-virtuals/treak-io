import { FiCalendar, FiFile, FiShoppingBag, FiUser } from "react-icons/fi"

import DashboardButton from "../DashboardButton/DashboardButton"

import "./DashboardButtons.css"

const DashboardButtons = () => {
  return (
    <div className='dashboard-buttons-container'>
      <DashboardButton
        icon={<FiUser size={26} />}
        iconColor='var(--c-green-dark)'
        backgroundColor='var(--c-green-light)'
      />
      <DashboardButton
        icon={<FiCalendar size={26} />}
        backgroundColor='var(--c-purple-light)'
        iconColor='var(--c-purple-dark)'
      />
      <DashboardButton
        backgroundColor='var(--c-gold-light)'
        iconColor='var(--c-gold-dark)'
        icon={<FiFile size={26} />}
      />
      <DashboardButton
        icon={<FiShoppingBag size={26} />}
        backgroundColor='var(--c-orange-light)'
        iconColor='var(--c-orange-dark)'
      />
    </div>
  )
}

export default DashboardButtons
