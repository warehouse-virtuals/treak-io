import { useEffect, useRef } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { UserAuth } from "../../Context/UserContext"
import { ThemeState } from "../../Context/ThemeContext"
import { UIToolsStatus } from "../../Context/UIToolsStatusContext"

import { FiLogOut } from "react-icons/fi"

import { useTranslation } from "react-i18next"

import treatLogo from "../../Assets/treat-logos/treat-new.svg"

import UserInfo from "./UserInfo"
import NavbarButtons from "./NavbarButtons"

import "./Navbar.css"

const Navbar = () => {
  const { isNavbarCollapsed, navbarButtonClick, toggleCollapse } =
    UIToolsStatus()
  const { setBackgroundDim } = ThemeState()

  const { user, logout } = UserAuth()
  const { t } = useTranslation("navbar")

  const navbarRef = useRef(null)
  const navigate = useNavigate()
  const location = useLocation()

  const handleNavbarLogoutButtonClick = async () => {
    try {
      await logout()
      navigate("/login")
    } catch (error) {
      console.log(error.message)
    }
  }

  const handleNavbarButtonClick = (path) => {
    navigate(path)
    navbarButtonClick()
  }

  useEffect(() => {
    // isNavbarCollapsed ? setBackgroundDim(false) : setBackgroundDim(true)
  }, [user, isNavbarCollapsed])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target) &&
        isNavbarCollapsed === false
      ) {
        toggleCollapse(true)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    } // eslint-disable-next-line
  }, [navbarRef, isNavbarCollapsed])

  if (user.auth) {
    return (
      <div
        className={`navbar-container ${
          !isNavbarCollapsed ? null : " closed-navbar"
        }`}
        ref={navbarRef}
      >
        <div>
          <div
            className='navbar-logo-container'
            onClick={() => handleNavbarButtonClick("/dashboard")}
          >
            <img className='navbar-logo' alt='logo' src={treatLogo} />
            <span className='navbar-logo-brand'>treat</span>
          </div>
          <div className='navbar-user-info-container'>
            <div className='navbar-user-info'>
              <UserInfo />
            </div>
          </div>
          <div className='navbar-buttons-container'>
            {NavbarButtons("20", "navbarbtn").map((button, index) => {
              return (
                <div
                  key={button.pathname}
                  className={
                    location.pathname === button.pathname
                      ? "navbar-buttons-focused"
                      : "navbar-buttons"
                  }
                  onClick={() => handleNavbarButtonClick(button.pathname)}
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
        </div>

        <div className='navbar-footer'>
          <div
            className='navbar-button-logout-container'
            onClick={handleNavbarLogoutButtonClick}
          >
            <div className='navbar-button-logout'>
              <FiLogOut className='navbar-logout-icon' />
            </div>
            <div className=''>{t("Logout")}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Navbar
