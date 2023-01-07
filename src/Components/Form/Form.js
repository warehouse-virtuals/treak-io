import "./Form.css"

const Form = ({ title, isActive, professionType, businessType }) => {
  if (professionType) {
    return (
      <div className={isActive ? "form-active" : "form"}>
        <div className='form-title'>{title}</div>
      </div>
    )
  } else if (businessType) {
    return (
      <div className={isActive ? "form-active" : "form"}>
        <div className='form-title'>{title}</div>
      </div>
    )
  } else {
    return (
      <div className={isActive ? "form-active" : "form"}>
        <div className='form-title'>{title}</div>
      </div>
    )
  }
}

export default Form
