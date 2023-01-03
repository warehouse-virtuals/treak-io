import { useLocation, useNavigate } from "react-router-dom"
import { UserAuth } from "../../Context/UserContext"
import { FiLogOut, FiMenu } from "react-icons/fi"
import { useTranslation } from "react-i18next"

import treatLogo from "../../Assets/treat-logos/treat-tp.svg"

import UserInfo from "./UserInfo"
import NavbarButtons from "./NavbarButtons"

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
      <div
        className='navbar-logo-container'
        onClick={() => navigate("/dashboard")}
      >
        <img className='navbar-logo' alt='logo' src={treatLogo} />
        <span>treat</span>
        {/* <div className='navbar-hamburger-container'>
          <FiMenu />
        </div> */}
      </div>
      <div className='navbar-user-info-container'>
        <div className='navbar-user-info'>
          <UserInfo />
        </div>
      </div>
      <div className='navbar-buttons-container'>
        {NavbarButtons("18", "navbarbtn").map((button, index) => {
          return (
            <div
              key={button.pathname}
              className={
                location.pathname === button.pathname
                  ? "navbar-buttons-focused"
                  : "navbar-buttons"
              }
              onClick={() => navigate(button.pathname)}
            >
              <div
                className={
                  location.pathname === button.pathname
                    ? "navbar-button-icon-focused"
                    : "navbar-button-icon"
                }
              >
                {button.icon}
              </div>

              <div className='navbar-button-name'>{t(button.name)}</div>
            </div>
          )
        })}
      </div>
      <div className='navbar-footer'>
        <div
          className='navbar-button-logout-container'
          onClick={handleNavbarLogoutButtonClick}
        >
          <div className='navbar-button-logout'>
            <FiLogOut
              color='#0e0e0e'
              size='16'
              className='navbar-logout-icon'
            />
          </div>
          <div className=''>{t("Logout")}</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
