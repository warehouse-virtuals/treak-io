import { useEffect, useRef } from "react"

import { UserAuth } from "../../Context/UserContext"
import { FirebaseActions } from "../../Context/FirebaseContext"

import MessageBubble from "./MessageBubble"
import FooterActiveChat from "./FooterActiveChat"

import "./ActiveChat.css"

const ActiveChat = ({ activeChatMessages, activeChat }) => {
  const { userData } = UserAuth()
  const { getMoreMessages, isEndOfActiveChat } = FirebaseActions()
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
      {/* <div className='chat-active-message-container' onScroll={handleScroll}>
        {isEndOfActiveChat ? (
          <div className='chat-active-message-end'>End of chat</div>
        ) : null}
        {activeChatMessages
          ? activeChatMessages.map((message, i) => {
              return (
                <MessageBubble
                  key={i}
                  message={message}
                  userData={userData}
                  activeChatMessages={activeChatMessages}
                  ref={
                    activeChatMessages.length - 1 === i ? lastMessageRef : null
                  }
                />
              )
            })
          : null}
      </div>
      {activeChatMessages.length > 0 ? (
        <div className='chat-active-footer'>
          <FooterActiveChat activeChat={activeChat} />
        </div>
      ) : null} */}
    </div>
  )
}

export default ActiveChat
