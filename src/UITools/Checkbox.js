import "./Checkbox.css"

function Checkbox(props) {
  return (
    <div className='checkbox-wrapper-1'>
      <input
        id='example-1'
        className='substituted'
        type='checkbox'
        aria-hidden='true'
      />
      <label>{props.label}</label>
    </div>
  )
}

export default Checkbox
