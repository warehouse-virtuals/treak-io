import { useRef } from "react"
import { FiImage, FiFile, FiSend } from "react-icons/fi"

import { UserAuth } from "../../Context/FirebaseContext"

import { collection, addDoc, Timestamp } from "firebase/firestore"

import "./FooterActiveChat.css"

const FooterActiveChat = ({ activeChat }) => {
  const messageRef = useRef()

  const { userData, db } = UserAuth()

  const handleSendTextMessageButtonPress = async () => {
    if (messageRef.current.value.length > 0) {
      const newMessageInfo = {
        createdAt: Timestamp.now(),
        sender: userData.uid,
        senderHandle: userData.name + " " + userData.surname,
        text: messageRef.current.value,
        senderImage: userData.ppFromFirestore,
      }

      messageRef.current.value = ""

      const newMessageRef = await addDoc(
        collection(
          db,
          "customers/",
          userData.customerID,
          "/chat/",
          activeChat.channelid,
          "/messages"
        ),
        newMessageInfo
      )

      console.log("Document written with ID: ", newMessageRef.id)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSendTextMessageButtonPress()
    }
  }

  return (
    <div className='footer-active-container'>
      <div className='footer-active-button' id='footer-active-image'>
        <FiImage size={24} />
      </div>
      <div className='footer-active-button' id='footer-active-file'>
        <FiFile size={24} />
      </div>
      <div className='footer-active-input'>
        <input
          ref={messageRef}
          type={"text"}
          className='searchfield-input'
          placeholder='Aa'
          onKeyDown={handleKeyDown}
        />
      </div>
      <div
        className='footer-active-button'
        id='footer-active-send'
        onClick={handleSendTextMessageButtonPress}
      >
        <FiSend size={24} />
      </div>
    </div>
  )
}

export default FooterActiveChat
