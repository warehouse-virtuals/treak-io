import "./CardNewPatients.css"

const CardNewPatients = (props) => {
  let calculated = Math.round(
    (100 * props.newPatients) / props.lastMonthPatients
  )

  return (
    <div className='card-new-container'>
      <div className='card-new-header'>
        <div className='card-new-new'>{props.newPatients}</div>
        <div className='card-new-total'>{props.totalPatients} total</div>
      </div>
      <div className='card-new-compare'>
        {"+" + calculated + "%"}
        <div className='' style={{ "margin-left": "5px" }}>
          {props.t("vs last month")}
        </div>
      </div>
    </div>
  )
}

export default CardNewPatients
