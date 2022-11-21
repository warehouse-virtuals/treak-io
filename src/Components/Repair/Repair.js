import { useState } from "react"

import { useTranslation } from "react-i18next"
import { FiPlus } from "react-icons/fi"

import TopBar from "../TopBar/TopBar"
import RepairForm from "./RepairForm"

import "./Repair.css"

const Repair = (props) => {
  const [repairForm, setRepairForm] = useState(false)
  const { t } = useTranslation("repair")

  const handleAddPatientButtonClick = async () => {
    try {
      setRepairForm(true)
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
      {repairForm ? (
        <div className='repairform-container'>
          <RepairForm
            buttonClick={() => {
              setRepairForm(false)
            }}
          />
        </div>
      ) : null}
    </div>
  )
}

export default Repair
