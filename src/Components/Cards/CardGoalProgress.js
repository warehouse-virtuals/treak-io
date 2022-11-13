import "./CardGoalProgress.css"

const CardGoalProgress = (props) => {
  let calculated = Math.round((props.sold * 100) / props.goal)
  return (
    <div className='card-goal-container'>
      <div className='card-goal-header'>
        <div className='card-goal-sold'>{props.sold}</div>
        <div className='card-goal-goal'>/{props.goal}</div>
      </div>
      <div className='card-goal-done'>
        {calculated + "%"}
        <div className='' style={{ "margin-left": "5px" }}>
          {props.t("is done")}!
        </div>
      </div>
    </div>
  )
}

export default CardGoalProgress
