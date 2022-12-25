import { useEffect, useRef } from "react"

import { format } from "date-fns"
import { tr } from "date-fns/locale"

import { UserAuth } from "../../Context/FirebaseContext"

import FooterActiveChat from "./FooterActiveChat.js"

import "./ActiveChat.css"

const ActiveChat = ({ activeChatMessages }) => {
  const { userData, getMoreMessages, isEndOfActiveChat } = UserAuth()
  const lastMessageRef = useRef()

  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({
        behavior: "auto",
        inline: "start",
      })
    }
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
        {isEndOfActiveChat ? (
          <div className='chat-active-message-end'>End of chat</div>
        ) : null}
        {activeChatMessages
          ? activeChatMessages.map((message, i) => {
              return (
                <div
                  ref={
                    activeChatMessages.length - 1 === i ? lastMessageRef : null
                  }
                  key={i}
                  id={message.sender === userData.uid ? "me" : ""}
                  className='chat-active-message'
                >
                  <div className='chat-active-message-messages-sender'>
                    {message.senderHandle}
                  </div>
                  <div className='chat-active-message-messages'>
                    {message.text}
                  </div>
                  <div className='chat-active-message-messages-date'>
                    {format(message.createdAt, "dd MMM p", { locale: tr })}
                  </div>
                </div>
              )
            })
          : null}
      </div>
      {activeChatMessages.length > 0 ? (
        <div className='chat-active-footer'>
          <FooterActiveChat />
        </div>
      ) : null}
    </div>
  )
}

export default ActiveChat
