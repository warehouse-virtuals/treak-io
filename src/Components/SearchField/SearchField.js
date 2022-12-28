import { useRef, useState, useEffect } from "react"

import "./SearchField.css"

import {
  FiSearch,
  FiUsers,
  FiCalendar,
  FiEdit,
  FiMessageCircle,
} from "react-icons/fi"

import { useTranslation } from "react-i18next"

import { UserAuth } from "../../Context/FirebaseContext"

const SearchField = ({ selectedPatientName }) => {
  // eslint-disable-next-line
  const [searchSelectedPerson, setSearchSelectedPerson] = useState("")
  const [timer, setTimer] = useState(null)
  const [foundPatients, setFoundPatients] = useState([])

  const { userData, searchPatientsResult } = UserAuth()
  const searchTextRef = useRef("")
  const { t } = useTranslation("dashboard")

  const findPatients = async () => {
    const hasNumber = /\d/
    const numberCheck = hasNumber.test(searchTextRef.current.value)

    if (searchTextRef.current.value.length > 0) {
      const usersfound = await searchPatientsResult(
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

  const handleOnChangeSearchInput = () => {
    findPatients().then((data) => setFoundPatients(data))
  }

  const handleOnClickOutside = (event) => {
    if (
      "found-patient" !== event.target.className &&
      foundPatients.length > 0
    ) {
      setFoundPatients([])
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleOnClickOutside, true)
    return () => {
      document.removeEventListener("click", handleOnClickOutside, true)
    }
    // eslint-disable-next-line
  }, [foundPatients])

  const changeDelay = (change) => {
    if (timer) {
      clearTimeout(timer)
      setTimer(null)
    }
    setTimer(
      setTimeout(() => {
        console.log("bekledik 400ms")
        handleOnChangeSearchInput()
      }, 400)
    )
  }

  return (
    <div className='searchfield-container'>
      <div className='search-bar'>
        <input
          className='searchfield-input'
          ref={searchTextRef}
          onClick={() => (searchTextRef.current.value = "")}
          onChange={(e) => changeDelay(e.target.value)}
          placeholder={t("Search patients...")}
        />

        <div className='search-icon'>
          <FiSearch className='' size={22} />
        </div>
      </div>
      {foundPatients.length > 0 ? (
        <div className='found-patient-container'>
          {foundPatients.map((patient, i) => {
            return (
              <div className='found-patient' key={i}>
                <div
                  className='found-patient-name-container'
                  onClick={() => {
                    selectedPatientName(patient.name + " " + patient.surname)
                    searchTextRef.current.value =
                      patient.name + " " + patient.surname
                    setFoundPatients([])
                  }}
                >
                  <div className='make-appt-btn-container'>
                    <FiUsers className='make-appt-btn' size={16} />
                  </div>
                  <div className='found-patient-name'>
                    {patient.name + " " + patient.surname}
                  </div>
                </div>
                <div className='found-patient-btns-container'>
                  <div className='found-patient-make-appt-btn'>
                    <FiCalendar className='make-appt-btn' size={16} />
                  </div>
                  <div className='found-patient-msg-btn'>
                    <FiMessageCircle className='make-msg-btn' size={16} />
                  </div>
                  <div className='found-patient-edit-btn'>
                    <FiEdit className='make-edit-btn' size={16} />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      ) : null}
    </div>
  )
}
export default SearchField
