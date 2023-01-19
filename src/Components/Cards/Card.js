import "./Card.css"

const Card = ({
  icon,
  title,
  background,
  iconBackground,
  value,
  denominator,
  cancelled,
  percent,
  total,
}) => {
  return (
    <div
      className='card-container'
      style={{ background: `var(${background})` }}
    >
      <div
        className='card-icon'
        style={{ background: `var(${iconBackground})` }}
      >
        {icon}
      </div>
      <div className='card-body'>
        <div className='card-body-left'>
          <div className='card-value'>{value}</div>
          {denominator ? (
            <div className='card-booked'>/{denominator}</div>
          ) : null}
        </div>
        <div
          className='card-body-right'
          style={total ? { color: "#0e0e0e" } : null}
        >
          {cancelled && denominator ? `${cancelled} cancelled` : null}
          {total ? total : null}
        </div>
      </div>
      <div className='card-title'>{title}</div>
      <div className='card-footer'> {percent + "%"} is done</div>
      {/* <div className='card-details'>{details}</div> */}
    </div>
  )
}

export default Card
