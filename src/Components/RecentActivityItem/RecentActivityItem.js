import "./RecentActivityItem.css"

const RecentActivityItem = ({
  icon,
  title,
  elapsedTime,
  backgroundColor,
  iconColor,
}) => {
  return (
    <div className='recent-activity-item-container'>
      <div
        className='recent-activity-item-icon-container'
        style={{ background: backgroundColor, color: iconColor }}
      >
        {icon}
      </div>
      <div className='recent-activity-item-title'>{title}</div>
      <div className='recent-activity-item-elapsed'>{elapsedTime}</div>
    </div>
  )
}

export default RecentActivityItem
