import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"

import "./Card.css"

const Card = ({
  icon,
  title,
  navigateTo,
  background,
  iconBackground,
  value,
  denominator,
  cancelled,
  percent,
  total,
}) => {
  const navigate = useNavigate()
  const { t } = useTranslation("dashboard")

  return (
    <div
      className='card-container'
      style={{ background: `var(${background})` }}
      onClick={() => navigate(navigateTo)}
    >
      <div className='card-header'>
        <div className='card-title'>{title}</div>
        <div
          className='card-icon'
          style={{ background: `var(${iconBackground})` }}
        >
          {icon}
        </div>
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
          style={total ? { color: "var(--c-gray)" } : null}
        >
          {cancelled && denominator ? `${cancelled} cancelled` : null}
          {total ? `${t("Total")} ${total}` : null}
        </div>
      </div>
      <div className='card-footer'> {percent + "%"} is done</div>
    </div>
  )
}

export default Card
