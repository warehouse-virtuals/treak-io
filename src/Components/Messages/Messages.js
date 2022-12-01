import "./Messages.css"
import TopBar from "../TopBar/TopBar"
import Splash from "../Splash/Splash"

const Messages = () => {
  return (
    <div className='messages-container'>
      <TopBar />
      <div className='messages-body'>
        <Splash />
      </div>
    </div>
  )
}

export default Messages
