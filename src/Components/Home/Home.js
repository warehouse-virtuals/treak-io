import React from "react"
import { useNavigate } from "react-router-dom"
import { UserAuth } from "../../Context/AuthContext"
import Customer from "../Customer/Customer"
import Navbar from "../Navbar/Navbar"

import { FiActivity, FiCalendar, FiGrid, FiUsers, FiMail } from "react-icons/fi"

const NavbarButtons = [
  {
    name: 'Dashboard',
    icon: <FiGrid color="#ffffff60" size={22} className="mb-1" />,
    route: '/dashboard',
    alt: 'Dashboard'
  },
  {
    name: 'Patients',
    icon: <FiUsers color="#ffffff60" size={22} className="mb-1" />,
    route: '/patients',
    alt: 'Patients'
  },
  {
    name: 'Calender',
    icon: <FiCalendar color="#ffffff60" size={22} className="mb-1" />,
    route: '/calender',
    alt: 'Calender'
  },
  {
    name: 'Messages',
    icon: <FiMail color="#ffffff60" size={22} className="mb-1" />,
    route: '/messages',
    alt: 'Messages'
  },
  {
    name: 'Analytics',
    icon: <FiActivity color="#ffffff60" size={22} className="mb-1" />,
    route: '/analytics',
    alt: 'Analytics'
  },
]

const Home = () => {
  const navigate = useNavigate()
  const { user, logout } = UserAuth()
  const handleNavbarLogoutButtonClick = async () => {
    try {
      await logout()
      navigate("/login")
      console.log("Logged out")
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <div className="w-full h-full flex flex-row">
      <Navbar
        buttons={NavbarButtons}
        onLogout={handleNavbarLogoutButtonClick}
      />
      <div>
        <h1>Home</h1>
        <div>User Email:{user && user.email}</div>
        <Customer />
      </div>
    </div>
  )
}

export default Home
