import { useEffect } from "react"

import { UserAuth } from "../../Context/FirebaseContext"

import "./ActiveChat.css"

const ActiveChat = ({ activeChatMessages }) => {
  const { userData } = UserAuth()
  useEffect(() => {
    console.log(userData)
    console.log(activeChatMessages)
  }, [activeChatMessages])

  return (
    <div className='chat-active-wrapper'>
      <div className='chat-active-message-container'>
        {activeChatMessages
          ? activeChatMessages
              .slice(0)
              .reverse()
              .map((message) => {
                return (
                  <div
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
