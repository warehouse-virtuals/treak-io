import { useEffect, useState } from "react"

import { UserAuth } from "../../Context/FirebaseContext"

import "./Chat.css"

import TopBar from "../TopBar/TopBar"
import ChatInbox from "./ChatInbox"
import ActiveChat from "./ActiveChat"

const Chat = () => {
  const [activeChatID, setActiveChatID] = useState("")
  const [activeChatMessages, setActiveChatMessages] = useState([])

  const { chatChannels, messages } = UserAuth()

  useEffect(() => {
    messages.forEach((msg) => {
      if (msg.channelid === activeChatID) {
        setActiveChatMessages((oldState) => [...oldState, msg])
      }
    })
  }, [activeChatID, messages])

  return (
    <div className='chat-container'>
      <TopBar />
      <div className='chat-body'>
        <div className='chat-inbox-wrapper'>
          <ChatInbox
            chatChannels={chatChannels}
            messages={messages}
            setActiveChatID={(id) => setActiveChatID(id)}
          />
        </div>
        <div className='chat-active-wrapper'>
          <ActiveChat activeChatMessages={activeChatMessages} />
        </div>
      </div>
    </div>
  )
}

export default Chat
