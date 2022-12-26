import {
  FiUser,
  FiUsers,
  FiMoreHorizontal,
  FiChevronsRight,
} from "react-icons/fi"

import "./Channel.css"

const Channel = ({ sender, message, hasSeen, isGroup, id, setActiveChat }) => {
  return (
    <div
      id={id}
      onClick={() => {
        setActiveChat()
      }}
      className='chat-channel-container'
    >
      <div className='chat-channel-icon'>
        {isGroup ? <FiUser size={24} /> : <FiUsers size={24} />}
      </div>
      <div className='chat-channel-body'>
        <div className='chat-channel-sender'>{sender}</div>
        <div className='chat-channel-message'>{message}</div>
      </div>
      <div className='chat-channel-options-btn'>
        <FiMoreHorizontal size={16} />
      </div>
      <div className='chat-channel-seen'>
        {hasSeen ? (
          <FiChevronsRight size={16} />
        ) : (
          <FiChevronsRight color='#767e98' size={16} />
        )}
      </div>
    </div>
  )
}

export default Channel
