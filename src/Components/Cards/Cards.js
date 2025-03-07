import { useState, useEffect } from "react"
import { FiCalendar, FiFile, FiShoppingBag, FiUserPlus } from "react-icons/fi"

import Card from "./Card"

import "./Cards.css"

const CardContainer = ({ t }) => {
  const [todaysAppointments, setTodaysAppointments] = useState({})
  const [allAppointments, setAllAppointments] = useState({})
  const [goal, setGoal] = useState({})
  const [patients, setPatients] = useState({})

  const calculateTodays = (finished, cancelled, booked) => {
    setTodaysAppointments({
      type: "todaysAppointments",
      value: finished + cancelled,
      cancelled: cancelled,
      denominator: booked,
      percent: Math.round(((finished + cancelled) * 100) / booked),
    })
  }

  const calculateAll = (currentMonth, lastMonth, cancelled) => {
    setAllAppointments({
      type: "allAppointments",
      value: currentMonth + cancelled,
      cancelled: cancelled,
      percent: Math.round((100 * (currentMonth - lastMonth)) / lastMonth),
    })
  }

  const calculateGoal = (sold, goal) => {
    setGoal({
      type: "goal",
      value: sold,
      denominator: goal,
      percent: Math.round((sold * 100) / goal),
    })
  }

  const calculateNew = (newPatients, lastMonthPatients, totalPatients) => {
    setPatients({
      type: "newPatient",
      value: newPatients,
      total: totalPatients,
      percent: Math.round((100 * newPatients) / lastMonthPatients),
    })
  }

  useEffect(() => {
    calculateTodays(3, 2, 10)
    calculateAll(20, 15, 2)
    calculateGoal(2, 10)
    calculateNew(3, 3, 500)
  }, [])

  return (
    <div className='cards-container'>
      <Card
        icon={<FiCalendar size={18} />}
        title={t("Today's Appointments")}
        navigateTo='/analytics/today'
        {...todaysAppointments}
      />
      <Card
        icon={<FiFile size={18} />}
        title={t("All Appointments")}
        navigateTo='/analytics/all'
        {...allAppointments}
      />

      <Card
        icon={<FiShoppingBag size={18} />}
        title={t("Goal progress")}
        navigateTo='/analytics/goal'
        {...goal}
      />
      <Card
        icon={<FiUserPlus size={18} />}
        title={t("New patients")}
        navigateTo='/analytics/month'
        {...patients}
      />
    </div>
  )
}

export default CardContainer
