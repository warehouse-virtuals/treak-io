const RegisterFormTab = ({ title, icon, onClick }) => {
  return (
    <div className='form-title' onClick={onClick}>
      {icon}
      {title}
    </div>
  )
}

export default RegisterFormTab
