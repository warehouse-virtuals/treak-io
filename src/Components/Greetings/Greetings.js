import "./Greetings.css"

const Greetings = (props) => {
  console.log(props.userData)
  return (
    <div className='greetings-container'>
      <div className='greetings-header'>
        {props.primary}&nbsp;
        <div className='greetings-body'>
          {props.userData.name}&nbsp;{props.userData.surname}
        </div>
      </div>
      <div className=''>{props.secondary}</div>
    </div>
  )
}

export default Greetings
