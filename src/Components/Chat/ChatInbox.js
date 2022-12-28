import { FirebaseActions } from "../../Context/FirebaseContext"

import SearchContact from "./SearchContact"
import FoundContactList from "./FoundContactList"
import Channel from "./Channel"

import "./ChatInbox.css"

const ChatInbox = ({ chatChannels, messages, setActiveChat }) => {
  const { lastSender, chatResults } = FirebaseActions()

  return (
    <div className='chat-inbox-panel'>
      <div className='chat-search-contact-wrapper'>
        <SearchContact />
      </div>
      <div className='chat-channels-wrapper'>
        {chatResults.length > 0 ? (
          <FoundContactList chatResults={chatResults} />
        ) : null}
        {messages.length > 0 && chatResults.length <= 0
          ? chatChannels.map((channel) => {
              return (
                <Channel
                  key={channel}
                  id={channel}
                  setActiveChat={() => setActiveChat(channel)}
                  senderHandle={lastSender.senderHandle}
                  senderImage={lastSender.senderImageURL}
                  message={messages[0].text}
                  timestamp={messages[0].createdAt}
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
