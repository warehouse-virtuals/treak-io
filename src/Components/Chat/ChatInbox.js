import { useState, useEffect } from "react"

import SearchContact from "./SearchContact"

import Channel from "./Channel.js"

import "./ChatInbox.css"

const ChatInbox = () => {
  const [array, setArray] = useState([
    {
      isim: "Hıdır Bıdıroğlu",
      mesaj: "Görülmedi, grup değil, kısa",
      görüldü: false,
      grup: true,
    },
    {
      isim: "İstanbuldan Berk",
      mesaj: "Kar yağıyor burada",
      görüldü: true,
      grup: false,
    },
    {
      isim: "Hıdır Bıdıroğlu",
      mesaj: "E ne oldu gelsene",
      görüldü: false,
      grup: true,
    },
  ])

  useEffect(() => {}, [setArray])
  return (
    <div className='chat-inbox-panel'>
      <div className='chat-search-contact-wrapper'>
        <SearchContact />
      </div>
      <div className='chat-channels-wrapper'>
        {array.map((arr) => {
          console.log(arr)
          return (
            <Channel
              sender={arr.isim}
              message={arr.mesaj}
              isGroup={arr.grup}
              hasSeen={arr.görüldü}
            />
          )
        })}
      </div>
    </div>
  )
}

export default ChatInbox
