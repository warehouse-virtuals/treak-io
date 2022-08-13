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
        <div className="w-4/4 mb-10 text-[#404b61] text-5xl font-bold ">
          Hi, Username
        </div>
        <div className="flex h-50 mb-5">
          <Card
            bg="blue"
            onClick={() => navigate(CardIcons.FiPlusCircle.route)}
            icon={CardIcons.FiPlusCircle.icon}
            whatDisDo="Add Patient"
          />
          <Card
            bg="purple"
            onClick={() => navigate(CardIcons.FiPlusCircle2.route)}
            icon={CardIcons.FiPlusCircle2.icon}
            whatDisDo="Make Appointment"
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
