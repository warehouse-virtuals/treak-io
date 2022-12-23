import { useEffect, useRef } from "react"

import { format } from "date-fns"
import { tr } from "date-fns/locale"

import { UserAuth } from "../../Context/FirebaseContext"

import "./ActiveChat.css"

const ActiveChat = ({ activeChatMessages, messages }) => {
  const { userData, getMoreMessages } = UserAuth()
  const lastMessageRef = useRef()

  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({
        behavior: "smooth",
        inline: "start",
      })
    }

    console.log(messages)
  }, [activeChatMessages])

  const handleScroll = (event) => {
    const target = event.target
    if (target.scrollHeight - target.scrollTop === target.scrollHeight) {
      getMoreMessages()
    }
  }

  return (
    <div className='chat-active-wrapper'>
      <div className='chat-active-message-container' onScroll={handleScroll}>
        {activeChatMessages
          ? activeChatMessages.map((message, i) => {
              console.log(message)
              return (
                <div
                  ref={
                    activeChatMessages.length - 1 === i ? lastMessageRef : null
                  }
                  key={i}
                  id={message.sender === userData.uid ? "me" : ""}
                  className='chat-active-message'
                >
                  <div className='chat-active-message-messages'>
                    <div className='chat-active-message-messages-sender'>
                      {message.senderHandle}
                    </div>
                    <div className='chat-active-message-messages-text'>
                      {message.text}
                    </div>
                    <div className='chat-active-message-messages-date'>
                      {format(message.createdAt, "dd MMM p", { locale: tr })}
                    </div>
                  </div>
                </div>
              )
            })
          : null}
      </div>
      <div className='chat-active-text-input'>sa</div>
    </div>
  )
}

export default ActiveChat
