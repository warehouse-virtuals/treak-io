import Card from "../Card/Card"
import CardIcons from "../Card/CardIcons"

const CardContainer = () => {
  return (
    <div className="flex flex-col">
      <div className="m-2 text-xl">Monthly Reports</div>
      <div className="flex select-none justify-between cursor-default h-50 w-full mb-8">
        <Card
          icon={CardIcons.FiCalendar}
          title="Today's appointments"
          showAppointmentsPercentage={true}
          booked={12}
          punctuation="/"
          finished={1}
          open={4}
          cancelled={2}
        />
        <Card
          icon={CardIcons.FiFile}
          title="All appointments"
          showAllAppointments={true}
          lastMonth={64}
          currentMonth={72}
        />
        <Card
          icon={CardIcons.FiShoppingBag}
          title="Goal progress"
          showGoalPercentage={true}
          punctuation="/"
          goal={8}
          sold={3}
        />
        <Card
          icon={CardIcons.FiUserPlus}
          title="New patients"
          showPatients={true}
          totalPatients={142}
          lastMonthPatients={10}
          newPatients={8}
        />
      </div>
    </div>
  )
}

export default CardContainer
