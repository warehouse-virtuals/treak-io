import "./Form.css"

const Form = ({ title, isActive }) => {
  return (
    <div className='form' style={isActive ? { height: "100%" } : null}>
      <div>{title}</div>
    </div>
  )
}

export default Form
