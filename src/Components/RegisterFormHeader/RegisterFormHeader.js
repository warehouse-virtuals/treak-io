import "./RegisterFormHeader.css"

const RegisterFormHeader = ({ title, desc }) => {
  return (
    <div className='register-form-header'>
      <div className='register-form-title'>{title}</div>
      <div className='register-form-desc'>{desc}</div>
    </div>
  )
}

export default RegisterFormHeader
