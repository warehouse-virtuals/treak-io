import { format } from "date-fns"
import { tr } from "date-fns/locale"
import { forwardRef } from "react"

import "./MessageBubble.css"

const MessageBubble = forwardRef(({ userData, message }, ref) => {
  return (
    <div
      ref={ref}
      id={message.sender === userData.uid ? "me" : ""}
      className='messagebubble-container'
    >
      <div className='messagebubble-sender'>{message.senderHandle}</div>
      <div className='messagebubble-message'>
        <div className='messagebubble-text'>{message.text}</div>
        <div className='messagebubble-date'>
          {format(message.createdAt, "dd MMM p", { locale: tr })}
        </div>
      </div>
    </div>
  )
})

export default MessageBubble
