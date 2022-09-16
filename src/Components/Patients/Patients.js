import { useNavigate } from "react-router-dom"
import PatientsList from "./PatientsList"
import PatientOverview from "./PatientOverview"
import TopBar from "../TopBar/TopBar"
import { useTranslation } from "react-i18next"
import { FiPlus } from "react-icons/fi"

const Patients = () => {
  const navigate = useNavigate()
  const { t } = useTranslation("dashboard")

  const handleAddPatientButtonClick = async () => {
    try {
      navigate("/addPatient")
      console.log("Clicked Add Button")
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <div className="flex flex-col h-full w-full">
      <TopBar pholder={t("Search patients...")} />
      <div className="flex pl-10 w-full rounded-tl-3xl h-full bg-[#f9faff]  text-[#1f2433]">
        <div className="flex flex-col w-full h-full mr-5 ">
          <div className="flex items-center h-28 text-4xl mb-5 font-semibold drop-shadow-lg ">
            Patients
          </div>
          <div
            onClick={handleAddPatientButtonClick}
            className="flex items-center justify-center h-12 w-12 rounded-l-2xl rounded-tr-2xl bg-[#59e2f7] mb-5 hover:bg-[#48c3d6]  "
          >
            <FiPlus size={22} className=" text-white " />
          </div>
          <PatientsList />
        </div>
        <div className="flex flex-col  w-[600px] h-full  text-[#1f2433]">
          <PatientOverview />
        </div>
      </div>
    </div>
  )
}

export default Patients
