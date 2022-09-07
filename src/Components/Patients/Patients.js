import SearchField from "../SearchField/SearchField"
import PatientsList from "./PatientsList"

const Patients = () => {
  return (
    <div className="flex flex-col pl-20 w-full h-full  text-[#1f2433] ">
      <div className="flex items-center h-28 text-4xl mb-10 font-semibold drop-shadow-lg ">
        Patients
      </div>
      <SearchField />
      <PatientsList />
    </div>
  )
}

export default Patients
