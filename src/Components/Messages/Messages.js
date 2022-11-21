import "./Messages.css"
import TopBar from "../TopBar/TopBar"
import ReactAudiogram from "react-audiogram/src/React-Audiogram/ReactAudiogram"

const Messages = () => {
  return (
    <div className='messages-container'>
      <TopBar />
      <div className='messages-body'>
        <ReactAudiogram />
      </div>
    </div>
  )
}

export default Messages
