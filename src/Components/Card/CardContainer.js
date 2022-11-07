import Card from "../Card/Card"
import CardIcons from "../Card/CardIcons"
import CardTodaysAppointments from "./CardTodaysAppointments"
import CardAllAppointments from "./CardAllAppointments"
import CardGoalProgress from "./CardGoalProgress"
import CardNewPatients from "./CardNewPatients"

const CardContainer = (props) => {
  return (
    <div className='flex flex-col '>
      <div className='font-bold text-2xl mt-10 text-slate-700 pb-3'>
        {props.t("Monthly Reports")}
      </div>
      <div className='flex select-none justify-between cursor-default h-50 w-full'>
        <Card
          icon={CardIcons.FiCalendar}
          title={props.t("Today's Appointments")}
          body={
            <CardTodaysAppointments
              finished={2}
              cancelled={2}
              booked={12}
              open={8}
              t={props.t}
            />
          }
        />
        <Card
          icon={CardIcons.FiFile}
          title={props.t("All Appointments")}
          body={
            <CardAllAppointments
              currentMonth={72}
              lastMonth={64}
              cancelled={2}
              booked={12}
              open={8}
              t={props.t}
            />
          }
        />
        <Card
          icon={CardIcons.FiShoppingBag}
          title={props.t("Goal progress")}
          body={<CardGoalProgress goal={8} sold={3} t={props.t} />}
        />
        <Card
          icon={CardIcons.FiUserPlus}
          title={props.t("New patients")}
          body={
            <CardNewPatients
              totalPatients={142}
              lastMonthPatients={10}
              newPatients={8}
              t={props.t}
            />
          }
        />
      </div>
    </div>
  )
}

export default CardContainer
