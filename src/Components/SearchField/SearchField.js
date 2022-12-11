import { useRef, useState } from "react"

import "./SearchField.css"

import { FiSearch, FiCalendar } from "react-icons/fi"

import { useTranslation } from "react-i18next"

import { UserAuth } from "../../Context/AuthContext"

const SearchField = ({ selectedPatientName }) => {
  // eslint-disable-next-line
  const [searchSelectedPerson, setSearchSelectedPerson] = useState("")
  const [foundPatients, setFoundPatients] = useState([])

  const { userData, searchResults } = UserAuth()
  const searchTextRef = useRef("")
  const { t } = useTranslation("dashboard")

  const findPatients = async () => {
    const hasNumber = /\d/
    const numberCheck = hasNumber.test(searchTextRef.current.value)

    if (searchTextRef.current.value.length > 0) {
      const usersfound = await searchResults(
        userData.customerID,
        userData.clinicID,
        searchTextRef.current.value,
        numberCheck
      )
      return usersfound
    } else {
      return []
    }
  }

  const handleOnChangeSearchInput = (dnz) => {
    console.log(dnz)
    findPatients().then((data) => setFoundPatients(data))
  }

  return (
    <div className='searchfield-container'>
      <div className={foundPatients.length > 0 ? "search-bar" : "search-bar"}>
        <input
          className='searchfield-input'
          ref={searchTextRef}
          onClick={() => (searchTextRef.current.value = "")}
          onChange={handleOnChangeSearchInput}
          placeholder={t("Search patients...")}
        />
        {}
        <div className='search-icon'>
          <FiSearch color='#000234' className='' size={22} />
        </div>
      </div>
      <div className='found-patient-container'>
        {foundPatients.map((patient, i) => {
          return (
            <div
              className='found-patient'
              onClick={() => {
                selectedPatientName(patient.name + " " + patient.surname)
                searchTextRef.current.value =
                  patient.name + " " + patient.surname
                setFoundPatients([])
              }}
              key={i}
            >
              {patient.name + " " + patient.surname}

              <div className='make-appt-btn-container'>
                <FiCalendar
                  color='0083b0'
                  className='make-appt-btn'
                  size={24}
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default SearchField
