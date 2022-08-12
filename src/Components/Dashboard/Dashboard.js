import React from "react"
import { useNavigate } from "react-router-dom"
import { UserAuth } from "../../Context/AuthContext"
// import Customer from "../Customer/Customer"
import Navbar from "../Navbar/Navbar"
import Card from "../Card/Card"
import Agenda from "../Agenda/Agenda"
import Statistics from "../Statistics/Statistics"
import AboutMe from "../AboutMe/AboutMe"
import CardIcons from "../Card/CardIcons"

const Dashboard = () => {
  const navigate = useNavigate()
  const { user, logout } = UserAuth()
  const handleNavbarLogoutButtonClick = async () => {
    try {
      await logout()
      navigate("/login")
      console.log("Logged out from: " + user.email)
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <div className="w-full h-full flex flex-row">
      <Navbar onLogout={handleNavbarLogoutButtonClick} />
      <div className="w-3/4 h-full p-10 flex flex-col bg-[#FAFAFA]">
        <div className="w-4/4 mb-10 text-[#0a1f33] text-5xl">Dashboard</div>
        <div className="flex h-50 mb-5">
          <Card
            onClick={() => navigate(CardIcons.FiPlusCircle.route)}
            icon={CardIcons.FiPlusCircle.icon}
            whatDisDo="Add Patient"
          />
        </div>
        <div className="flex justify-center items-center h-full">
          <Agenda whatDisDo="Little calendar + Upcoming appointments" />
          <Statistics whatDisDo="Statistics" />
        </div>
      </div>
      <AboutMe whatDisDo="placeholder" />
    </div>
  )
}

export default Dashboard
