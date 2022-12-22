import SearchContact from "./SearchContact"

import Channel from "./Channel.js"

import "./ChatInbox.css"

const ChatInbox = ({ chatChannels, messages, setActiveChatID }) => {
  return (
    <div className='chat-inbox-panel'>
      <div className='chat-search-contact-wrapper'>
        <SearchContact />
      </div>
      <div className='chat-channels-wrapper'>
        {messages.length > 0
          ? chatChannels.map((channel) => {
              return (
                <Channel
                  id={channel}
                  setActiveChatID={() => setActiveChatID(channel)}
                  sender={messages[messages.length - 1].senderHandle}
                  message={messages[messages.length - 1].text}
                  isGroup={false}
                  hasSeen={true}
                />
              )
            })
          : null}
      </div>
    </div>
  )
}

export default ChatInbox
