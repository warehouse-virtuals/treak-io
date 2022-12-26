import { format } from "date-fns"
import { tr } from "date-fns/locale"
import { forwardRef } from "react"

const MessageBubble = forwardRef(({ userData, message }, ref) => {
  return (
    <div
      ref={ref}
      id={message.sender === userData.uid ? "me" : ""}
      className='chat-active-message'
    >
      <div className='chat-active-message-messages-sender'>
        {message.senderHandle}
      </div>
      <div className='chat-active-message-messages'>{message.text}</div>
      <div className='chat-active-message-messages-date'>
        {format(message.createdAt, "dd MMM p", { locale: tr })}
      </div>
    </div>
  )
})

export default MessageBubble
