import { FiImage, FiFile, FiSend } from "react-icons/fi"

import "./FooterActiveChat.css"

const FooterActiveChat = () => {
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
          className='searchfield-input'
          onClick
          onChange
          placeholder='Aa'
        />
      </div>
      <div className='footer-active-button' id='footer-active-send'>
        <FiSend size={24} />
      </div>
    </div>
  )
}

export default FooterActiveChat
