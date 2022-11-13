import "./Repair.css"
import { useTranslation } from "react-i18next"
import { FiPlus } from "react-icons/fi"
import { useNavigate } from "react-router-dom"
import TopBar from "../TopBar/TopBar"

const Repair = (props) => {
  const { t } = useTranslation("repair")
  const navigate = useNavigate()

  const handleAddPatientButtonClick = async () => {
    try {
      navigate("/repairForm")
      console.log("Clicked Add Button")
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <div className='repair-container '>
      <TopBar pholder={t("Search patients...")} />
      <div className='repair-body'>
        <div className='repair-header'>
          <div
            onClick={handleAddPatientButtonClick}
            className='repair-add-repairform-btn'
          >
            <FiPlus size={30} stroke='#a3edd9' className='' /> Form Oluştur
          </div>
        </div>
      </div>
    </div>
  )
}

export default Repair
