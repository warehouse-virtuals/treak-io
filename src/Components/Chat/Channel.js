import {
  FiUsers,
  FiMoreHorizontal,
  FiChevronsRight,
  FiChevronRight,
} from "react-icons/fi"

import { format } from "date-fns"
import { tr } from "date-fns/locale"

import "./Channel.css"

const Channel = ({
  senderHandle,
  message,
  hasSeen,
  isGroup,
  id,
  setActiveChat,
  senderImage,
  timestamp,
}) => {
  return (
    <div
      id={id}
      onClick={() => {
        setActiveChat()
      }}
      className='chat-channel-container'
    >
      <div className='chat-channel-icon'>
        {isGroup ? (
          <FiUsers size={24} />
        ) : (
          <img
            alt='pp'
            loading='lazy'
            className='chat-channel-pp'
            src={senderImage}
          />
        )}
      </div>
      <div className='chat-channel-body'>
        <div className='chat-channel-sender'>{senderHandle}</div>
        <div className='chat-channel-message'>{message}</div>
      </div>
      <div className='chat-channel-options-btn'>
        <FiMoreHorizontal size={16} />
      </div>
      <div className='chat-channel-seen'>
        <div className='chat-channel-date'>
          {format(timestamp, "p", { locale: tr })}
        </div>
        {hasSeen ? <FiChevronsRight size={16} /> : <FiChevronRight size={16} />}
      </div>
    </div>
  )
}

export default Channel
