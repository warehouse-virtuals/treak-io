import "./FoundContactList.css"

const FoundContactList = ({ chatResults }) => {
  return (
    <div className='found-contact-container'>
      {chatResults.map((contact, i) => {
        return (
          <div className='found-contact' key={i}>
            <div className='found-contact-icon'>
              <img
                alt='pp'
                loading='lazy'
                className='found-contact-pp'
                src={contact.image}
              />
            </div>
            <div className='found-contact-sender'>{contact.handle}</div>
          </div>
        )
      })}
    </div>
  )
}

export default FoundContactList
