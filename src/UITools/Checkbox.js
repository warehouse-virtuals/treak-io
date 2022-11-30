import "./Checkbox.css"

function Checkbox(props) {
  return (
    <div class='checkbox-wrapper-1'>
      <input
        id='example-1'
        class='substituted'
        type='checkbox'
        aria-hidden='true'
      />
      <label for='example-1'>{props.label}</label>
    </div>
  )
}

export default Checkbox
