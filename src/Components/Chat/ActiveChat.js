import { useEffect } from "react"

import { UserAuth } from "../../Context/FirebaseContext"

import "./ActiveChat.css"

const ActiveChat = ({ activeChatMessages, messages }) => {
  const { userData, getMoreMessages } = UserAuth()

  useEffect(() => {
    console.log(activeChatMessages)
  }, [activeChatMessages])

  const handleScroll = (event) => {
    const target = event.target
    if (target.scrollHeight - target.scrollTop === target.scrollHeight) {
      getMoreMessages()
    }
  }

  useEffect(() => {}, [messages])

  return (
    <div className='chat-active-wrapper' onScroll={handleScroll}>
      <div className='chat-active-message-container'>
        {activeChatMessages
          ? activeChatMessages
              .slice(0)
              .reverse()
              .map((message, i) => {
                return (
                  <div
                    key={i}
                    id={message.sender === userData.uid ? "me" : ""}
                    className='chat-active-message'
                  >
                    <div>{message.senderHandle}</div>
                    <div>{message.text}</div>
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
