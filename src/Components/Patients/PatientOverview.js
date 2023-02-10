import { useEffect, useState } from "react"
import "./PatientOverview.css"
import { useNavigate } from "react-router-dom"

import { format } from "date-fns"

import { tr } from "date-fns/locale"

import { UserAuth } from "../../Context/UserContext"
import { FirebaseActions } from "../../Context/FirebaseContext"

import {
  FiEdit,
  FiUser,
  FiGift,
  FiPhone,
  // FiFolder,
  FiCalendar,
  // FiMessageSquare,
  FiX,
  FiTrash,
} from "react-icons/fi"

import TabMenu from "../TabMenu/TabMenu"

const PatientOverview = ({ focusedPatient, patientDeleted, close }) => {
  const [activeTab, setActiveTab] = useState("general")

  const { userData } = UserAuth()
  const { deletePatient } = FirebaseActions()

  const handleDeleteOnClick = async (patientID) => {
    await deletePatient(userData.customerID, patientID)
    patientDeleted("confirm")
  }

  if (!focusedPatient.id) {
    return <div className='patient-overview-container'></div>
  } else {
    return (
      <div className='patient-overview-container'>
        <div className='patient-overview-close' onClick={close}>
          <FiX size={24} />
        </div>
        <div className='patient-overview-body'>
          <div className='patient-overview-header'>
            <div className='patient-overview-patient-info'>
              <div className='patient-overview-patient-additionals'>
                <div className='patient-overview-patient-ssn'>
                  {focusedPatient.SSN}
                  <div className='patient-overview-patient-gender'>
                    {focusedPatient.isMale ? "E" : "K"}, 33
                  </div>{" "}
                </div>
                <div className='patient-overview-patient-name'>
                  {focusedPatient.name}&nbsp;{focusedPatient.surname}
                </div>
                <div className='patient-overview-patient-subinfo'>
                  {focusedPatient.address}
                </div>
                <div className='patient-overview-header-buttons'>
                  <div className='patient-overview-header-button'>
                    <FiPhone size={14} /> {focusedPatient.phone}
                  </div>
                  <div className='patient-overview-header-button'>
                    <FiGift size={14} />
                    {format(focusedPatient.DOB.toMillis(), "PP", {
                      locale: tr,
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='patient-overview-tabmenu-container'>
            <TabMenu
              tabs={[
                { title: "Genel Bilgiler", tabName: "general" },
                { title: "Tıbbi Kayıtlar", tabName: "medicalRecords" },
                { title: "Odyogramlar", tabName: "audiograms" },
              ]}
              tabSetter={(tab) => setActiveTab(tab)}
              activeTab={activeTab}
            />
          </div>
          <div className='patient-overview-content'>
            <div className='patient-overview-content-left'></div>
            <div className='patient-overview-content-right'></div>
          </div>
        </div>

        {/* 
           
        </div>
        <div className='patient-overview-hearingaid-container'>
          <div className='patient-overview-titles'>Cihaz Bilgileri</div>
          <div className='patient-overview-hearingaids'>
            {focusedPatient.hearingAids
              ? focusedPatient.hearingAids.map((hearingAid, index) => {
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
                        <patient-overview-hearingaid-left
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
            onClick={() => navigate("/agenda", { state: { patient: focusedPatient } })}
          >
            <FiCalendar size={24} />
          </div>
          <div className='patient-overview-trash-btn'>
            <FiTrash
              size={24}
              onClick={() => {
                handleDeleteOnClick(focusedPatient.id).then(() => {})
              }}
            />
          </div>
        </div> */}
      </div>
    )
  }
}

export default PatientOverview
