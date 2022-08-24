import React from "react"
import { useNavigate } from "react-router-dom"
import { UserAuth } from "../../Context/AuthContext"
// import Customer from "../Customer/Customer"
import Navbar from "../Navbar/Navbar"
import Card from "../Card/Card"
// import Agenda from "../Agenda/Agenda"
// import Statistics from "../Statistics/Statistics"
import Sidebar from "../Sidebar/Sidebar"
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
      <div className="w-3/4 h-full p-10 flex flex-col bg-[#F9FAFE]">
        <div className="w-4/4 mb-10 text-[#404b61] text-5xl font-bold ">
          Hi, Username
        </div>
        <div className="flex h-50 mb-5">
          <Card
            icon={CardIcons.FiCalendar}
            whatDisDo="Today's appointments"
            showAppointmentsPercentage={true}
            booked={12}
            punctuation="/"
            finished={4}
            open={4}
            cancelled={2}
          />
          <Card
            icon={CardIcons.FiFile}
            showAllAppointments={true}
            whatDisDo="All appointments"
            lastMonth={64}
            currentMonth={72}
          />
          <Card
            icon={CardIcons.FiShoppingBag}
            whatDisDo="Goal progress"
            showGoalPercentage={true}
            punctuation="/"
            goal={8}
            sold={3}
          />
          <Card
            icon={CardIcons.FiUserPlus}
            whatDisDo="New patients"
            showPatients={true}
            totalPatients={142}
            lastMonthPatients={10}
            newPatients={8}
          />
        </div>
        <div className="flex justify-center items-center h-full">
          {/* <Agenda whatDisDo="Little calendar + Upcoming appointments" /> */}

          {/* <Statistics whatDisDo="Statistics" /> */}
        </div>
      </div>
      <Sidebar whatDisDo="placeholder" />
    </div>
  )
}

export default Dashboard
