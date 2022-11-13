import Card from "./Card"
import CardIcons from "./CardIcons"
import CardTodaysAppointments from "./CardTodaysAppointments"
import CardAllAppointments from "./CardAllAppointments"
import CardGoalProgress from "./CardGoalProgress"
import CardNewPatients from "./CardNewPatients"

import "./Cards.css"

const CardContainer = (props) => {
  return (
    <div className='cards-container'>
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
  )
}

export default CardContainer
