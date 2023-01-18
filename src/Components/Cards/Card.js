import "./Card.css"

const Card = (props) => {
  return (
    <div className='card-container'>
      <div className='card-left'>
        <div className='card-title'>{props.title}</div>
        <div className='card-body'>{props.body}</div>
      </div>
      <div className='card-right'>
        <div className='card-icon'>{props.icon}</div>
        {/* <div className='card-details'>{props.details}</div> */}
      </div>
    </div>
  )
}

export default Card
