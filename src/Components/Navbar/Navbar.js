import { useLocation, useNavigate } from "react-router-dom"
import { UserAuth } from "../../Context/AuthContext"
import { FiLogOut } from "react-icons/fi"
import { GiHealthNormal } from "react-icons/gi"
import { useTranslation } from "react-i18next"

import NavbarButtons from "./NavbarButtons"
// import whlogo from "../../Assets/logobw.svg"

import "./Navbar.css"

const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { logout } = UserAuth()
  const { t } = useTranslation("navbar")

  const handleNavbarLogoutButtonClick = async () => {
    try {
      await logout()
      navigate("/login")
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div className='navbar-container'>
      <div className='navbar-logo-container'>
        <GiHealthNormal size={40} color='#FFFFFF' />
      </div>
      {/* <img className="mt-10 w-1/2 " alt="logo" src={whlogo} /> */}
      <div className='navbar-buttons-container'>
        {NavbarButtons.map((button, index) => {
          return (
            <div
              key={button.pathname}
              className='navbar-buttons'
              onClick={() => navigate(button.pathname)}
            >
              <div
                className={
                  location.pathname === button.pathname
                    ? "navbar-button-icon"
                    : "navbar-button-icon-focused"
                }
              >
                {button.icon}
              </div>

              <div className=''>{t(button.name)}</div>
            </div>
          )
        })}
      </div>

      <div
        onClick={handleNavbarLogoutButtonClick}
        className='navbar-button-logout-container'
      >
        <div className='navbar-button-logout'>
          <FiLogOut color='#F9FAFE' size={40} className='navbar-logout-icon' />
          <div className=''>{t("Logout")}</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
