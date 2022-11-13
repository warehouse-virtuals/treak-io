import "./Patients.css"

import PatientsList from "./PatientsList"
import TopBar from "../TopBar/TopBar"
import { useTranslation } from "react-i18next"

const Patients = () => {
  const { t } = useTranslation("dashboard")
  return (
    <div className='patients-cointainer'>
      <TopBar pholder={t("Search patients...")} />
      <div className='patients-body'>
        <div className='patients-patients-list-container'>
          <div className='a'>
            <div>Randevular</div>
            <div>Dökümanlar</div>
          </div>
          <PatientsList />
        </div>
      </div>
    </div>
  )
}

export default Patients
