import { FiCalendar, FiTool, FiShoppingBag, FiUser } from "react-icons/fi"

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
          backgroundColor='var(--c-orange-light)'
          iconColor='var(--c-orange-dark)'
          elapsedTime='30'
        />
        <RecentActivityItem
          icon={<FiCalendar size={18} />}
          title='Cihaz Deneyim'
          backgroundColor='var(--c-purple-light)'
          iconColor='var(--c-purple-dark)'
          elapsedTime='30'
        />
        <RecentActivityItem
          icon={<FiShoppingBag size={18} />}
          title='İşitme Testi'
          iconColor='var(--c-green-dark)'
          backgroundColor='var(--c-green-light)'
          elapsedTime='30'
        />
        <RecentActivityItem
          icon={<FiTool size={18} />}
          title='Teknik Servis Kaydı'
          backgroundColor='var(--c-gold-light)'
          iconColor='var(--c-gold-dark)'
          elapsedTime='30'
        />
      </div>
    </div>
  )
}

export default RecentActivity
