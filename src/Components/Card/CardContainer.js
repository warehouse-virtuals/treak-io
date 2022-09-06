import Card from "../Card/Card"
import CardIcons from "../Card/CardIcons"
import CardTodaysAppointments from "./CardTodaysAppointments"
import CardAllAppointments from "./CardAllAppointments"
import CardGoalProgress from "./CardGoalProgress"
import CardNewPatients from "./CardNewPatients"

const CardContainer = () => {
  return (
    <div className="flex flex-col">
      <div className="m-2 text-xl">Monthly Reports</div>
      <div className="flex select-none justify-between cursor-default h-50 w-full mb-8">
        <Card
          icon={CardIcons.FiCalendar}
          title="Today's Appointments"
          body={
            <CardTodaysAppointments
              finished={2}
              cancelled={2}
              booked={12}
              open={8}
            />
          }
        />
        <Card
          icon={CardIcons.FiFile}
          title="All appointments"
          body={
            <CardAllAppointments
              currentMonth={72}
              lastMonth={64}
              cancelled={2}
              booked={12}
              open={8}
            />
          }
        />
        <Card
          icon={CardIcons.FiShoppingBag}
          title="Goal progress"
          body={<CardGoalProgress goal={8} sold={3} />}
        />
        <Card
          icon={CardIcons.FiUserPlus}
          title="New patients"
          body={
            <CardNewPatients
              totalPatients={142}
              lastMonthPatients={10}
              newPatients={8}
            />
          }
        />
      </div>
    </div>
  )
}

export default CardContainer
