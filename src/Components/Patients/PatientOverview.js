import "./PatientOverview.css"
import { useNavigate } from "react-router-dom"

import { UserAuth } from "../../Context/UserContext"
import { FirebaseActions } from "../../Context/FirebaseContext"

import {
  FiEdit,
  // FiFolder,
  FiCalendar,
  // FiMessageSquare,
  FiX,
  FiTrash,
} from "react-icons/fi"

import { format } from "date-fns"
import { tr } from "date-fns/locale"
import { useEffect, useState } from "react"

const PatientOverview = ({ focusedPatientData, patientDeleted, close }) => {
  const { userData } = UserAuth()
  const { deletePatient } = FirebaseActions()

  const [person, setPerson] = useState({})
  const navigate = useNavigate()

  const handleDeleteOnClick = async (patientID) => {
    await deletePatient(userData.customerID, patientID)
    patientDeleted("confirm")
  }

  useEffect(() => {
    setPerson(focusedPatientData)
  }, [focusedPatientData])

  if (!person.name) {
    return null //Buraya bir filler component lazım
  } else {
    return (
      <div className='patient-overview-container'>
        <div className='patient-overview-close' onClick={close}>
          <FiX size={28} color='#252525' />
        </div>
        <div className='patient-overview-header'>
          <div className='patient-overview-patient-info'>
            <div className='patient-overview-ssn'>
              {person.SSN}
              <div className='patient-overview-dob'>
                {format(person.DOB.toMillis(), "PP", {
                  locale: tr,
                })}
              </div>
            </div>
            <div className='patient-overview-name'>
              {person.name}&nbsp;{person.surname}
              <div className='patient-overview-age-gender'>
                (30, {person.isMale ? "E" : "K"})
              </div>
            </div>
            <div className='patient-overview-additional'>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              ></div>{" "}
              <div>{person.phone}</div>
              <div className='patient-overview-address'>{person.address}</div>
            </div>
          </div>
        </div>
        {/* klinik ekle */}
        <div></div>
        {/* 
           
        </div>
        <div className='patient-overview-hearingaid-container'>
          <div className='patient-overview-titles'>Cihaz Bilgileri</div>
          <div className='patient-overview-hearingaids'>
            {person.hearingAids
              ? person.hearingAids.map((hearingAid, index) => {
                  if (hearingAid.isRightSide) {
                    return (
                      <div
                        key={index}
                        className='patient-overview-hearingaid-right'
                      >
                        <div className='patient-overview-hearingaid-right-title'>
                          Sağ
                        </div>
                        <div
                          id='right-brand-modal'
                          className='patient-overview-hearingaid-brand'
                        >
                          <div>
                            {hearingAid.aidBrand
                              ? hearingAid.aidBrand
                              : "Cihazsız"}
                          </div>
                          <div className='patient-overview-hearingaid-modal'>
                            <div>{hearingAid.aidModel}</div>
                          </div>
                        </div>
                        <div className='patient-overview-hearingaid-sn'>
                          {hearingAid.aidSN}
                        </div>
                      </div>
                    )
                  } else {
                    return (
                      <div
                        key={index}
                        className='patient-overview-hearingaid-left'
                      >
                        <div className='patient-overview-hearingaid-left-title'>
                          Sol
                        </div>
                        <div
                          id='left-brand-modal'
                          className='patient-overview-hearingaid-brand'
                        >
                          <div>
                            {hearingAid.aidBrand
                              ? hearingAid.aidBrand
                              : "Cihazsız"}
                          </div>
                          <div className='patient-overview-hearingaid-modal'>
                            <div>{hearingAid.aidModel}</div>
                          </div>
                          <div className='patient-overview-hearingaid-sn'>
                            {hearingAid.aidSN}
                          </div>
                        </div>
                      </div>
                    )
                  }
                })
              : null}
          </div>
        </div>
        <div className='patient-overview-footer'>
          <div className='patient-overview-edit-btn'>
            <FiEdit size={24} />
          </div>
          <div
            className='patient-overview-calendar-btn'
            onClick={() => navigate("/agenda", { state: { patient: person } })}
          >
            <FiCalendar size={24} />
          </div>
          <div className='patient-overview-trash-btn'>
            <FiTrash
              size={24}
              onClick={() => {
                handleDeleteOnClick(person.id).then(() => {})
              }}
            />
          </div>
        </div> */}
      </div>
    )
  }
}

export default PatientOverview
