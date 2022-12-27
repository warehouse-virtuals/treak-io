import { useEffect, useState } from "react"

import { UserAuth } from "../../Context/FirebaseContext"

import "./Chat.css"

import TopBar from "../TopBar/TopBar"
import ChatInbox from "./ChatInbox"
import ActiveChat from "./ActiveChat"

const Chat = () => {
  const [activeChat, setActiveChat] = useState("")
  const [activeChatMessages, setActiveChatMessages] = useState([])

  const { chatChannels, messages } = UserAuth()

  useEffect(() => {
    if (activeChat.channelid) {
      setActiveChatMessages(
        messages
          .map((msg) => {
            if (msg.channelid === activeChat.channelid) {
              return msg
            } else {
              return null
            }
          })
          .reverse()
      )
    }
  }, [activeChat, messages])

  return (
    <div className='chat-container'>
      <TopBar />
      <div className='chat-body'>
        <div className='chat-inbox-wrapper'>
          <ChatInbox
            chatChannels={chatChannels}
            messages={messages}
            setActiveChat={(id) => setActiveChat(id)}
            activeChat={activeChat}
          />
        </div>
        <div className='chat-active-wrapper'>
          <ActiveChat
            activeChatMessages={activeChatMessages}
            activeChat={activeChat}
          />
        </div>
      </div>
    </div>
  )
}

export default Chat
