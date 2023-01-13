import "./Dropdown.css"
const Dropdown = () => {
  return (
    <div class='dropdown'>
      <input type='checkbox' id='dropdown' />
      <label class='dropdown__face' for='dropdown'>
        <div class='dropdown__text'>Dropdown</div>
        <div class='dropdown__arrow'></div>
      </label>
      <ul class='dropdown__items'>
        <li>Male</li>
        <li>Female</li>
      </ul>
    </div>
  )
}

export default Dropdown
