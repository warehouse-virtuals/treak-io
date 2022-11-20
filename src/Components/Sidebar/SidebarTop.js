import "./SidebarTop.css"

const SidebarTop = (props) => {
  return (
    <div className='sidebartop-container'>
      <div className='sidebar-userinfo'>
        <div>
          {props.userData.name}&nbsp;{props.userData.surname}
        </div>
        <div className='sidebar-jobtitle'>{props.userData.jobTitle}</div>
      </div>

      <div className='sidebar-pp-container'>
        <img alt='pp' className='sidebar-pp' src={props.userData.ppurl} />
      </div>
    </div>
  )
}

export default SidebarTop
