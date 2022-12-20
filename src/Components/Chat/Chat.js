import "./Chat.css"

import TopBar from "../TopBar/TopBar"
import ChatInbox from "./ChatInbox"

const Chat = () => {
  return (
    <div className='chat-container'>
      <TopBar />
      <div className='chat-body'>
        <div className='chat-inbox-wrapper'>
          <ChatInbox />
        </div>
        <div className='chat-active-wrapper'>sa</div>
      </div>
    </div>
  )
}

export default Chat
