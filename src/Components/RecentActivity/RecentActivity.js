import { FiCalendar, FiTool, FiShoppingBag, FiUser } from "react-icons/fi"
import DashboardButtons from "../DashboardButtons/DashboardButtons"

import RecentActivityItem from "../RecentActivityItem/RecentActivityItem"

import "./RecentActivity.css"

const RecentActivity = () => {
  return (
    <div className='recent-activity-container'>
      <div className='recent-activity-header'>
        <div className='recent-activity-title'>Recent Activity</div>
      </div>
      <div className='recent-activiy-items'>
        <RecentActivityItem
          icon={<FiShoppingBag size={18} />}
          title='Cihaz Satışı'
          iconColor='var(--c-orange-500)'
          backgroundColor='var(--c-orange-100)'
          elapsedTime='30'
        />
        <RecentActivityItem
          icon={<FiCalendar size={18} />}
          title='Cihaz Deneyim'
          iconColor='var(--c-violet-500)'
          backgroundColor='var(--c-violet-100)'
          elapsedTime='30'
        />
        <RecentActivityItem
          icon={<FiShoppingBag size={18} />}
          title='İşitme Testi'
          iconColor='var(--c-green-500)'
          backgroundColor='var(--c-green-100)'
          elapsedTime='30'
        />
        <RecentActivityItem
          icon={<FiTool size={18} />}
          title='Teknik Servis Kaydı'
          iconColor='var(--c-blue-500)'
          backgroundColor='var(--c-blue-100)'
          elapsedTime='30'
        />
      </div>
      <DashboardButtons />
    </div>
  )
}

export default RecentActivity
