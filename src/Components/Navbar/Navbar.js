import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { UserAuth } from "../../Context/UserContext"
import {
  FiLogOut,
  // FiMenu
} from "react-icons/fi"

import {
  TbLayoutSidebarLeftCollapse,
  TbLayoutSidebarRightCollapse,
} from "react-icons/tb"
import { useTranslation } from "react-i18next"

import treatLogo from "../../Assets/treat-logos/treat-tp.svg"

import UserInfo from "./UserInfo"
import NavbarButtons from "./NavbarButtons"

import "./Navbar.css"

const Navbar = () => {
  const [collapse, setCollapse] = useState(true)
  const navigate = useNavigate()
  const location = useLocation()
  const { user, logout } = UserAuth()
  const { t } = useTranslation("navbar")

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
    setCollapse(true)
  }

  useEffect(() => {}, [user])

  if (user.auth) {
    return (
      <div className='navbar-container'>
        {collapse ? null : (
          <div>
            <div
              className='navbar-logo-container'
              onClick={() => handleNavbarButtonClick("/dashboard")}
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
        )}
        <div className='navbar-footer'>
          {collapse ? null : (
            <div
              className='navbar-button-logout-container'
              onClick={handleNavbarLogoutButtonClick}
            >
              <div className='navbar-button-logout'>
                <FiLogOut color='#0e0e0e' className='navbar-logout-icon' />
              </div>
              <div className=''>{t("Logout")}</div>
            </div>
          )}
          <div
            className='navbar-button-collapse-container'
            onClick={() => setCollapse((collapse) => !collapse)}
          >
            <div className='navbar-button-collapse'>
              {collapse ? (
                <TbLayoutSidebarRightCollapse
                  color='#0e0e0e'
                  className='navbar-collapse-icon'
                />
              ) : (
                <TbLayoutSidebarLeftCollapse
                  color='#0e0e0e'
                  className='navbar-collapse-icon'
                />
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Navbar
