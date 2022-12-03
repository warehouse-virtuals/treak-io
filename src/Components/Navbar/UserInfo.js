import { UserAuth } from "../../Context/AuthContext"

import "./UserInfo.css"

const UserInfo = () => {
  const { userData } = UserAuth()
  return (
    <div
      className='userinfo-container'
      style={{
        opacity: userData.ppurl ? 1 : 0,
      }}
    >
      <div className='userinfo-pp-container'>
        <img
          alt='pp'
          loading='lazy'
          className='userinfo-pp'
          src={userData.ppurl}
        />
      </div>
      <div className='userinfo-userinfo'>
        <div className='userinfo-username'>
          {userData.name}&nbsp;{userData.surname}
        </div>
        <div className='userinfo-jobtitle'>{userData.jobTitle}</div>
      </div>
    </div>
  )
}

export default UserInfo
