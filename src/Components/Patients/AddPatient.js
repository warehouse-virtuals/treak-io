import React, { useState, useRef } from "react"

import { FiPlus, FiXCircle } from "react-icons/fi"
import DatePicker from "react-date-picker"

import "./AddPatient.css"

import { collection, addDoc, updateDoc, doc } from "firebase/firestore"
import { UserAuth } from "../../Context/AuthContext"

import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"

import TextInput from "../../UITools/TextInput"

const AddPatient = (props) => {
  const [DOB, onChangeDOB] = useState(new Date())
  const patientNameRef = useRef()
  const patientSurnameRef = useRef("")
  const patientPhoneRef = useRef("")
  const patientEmailRef = useRef("")
  const addressRef = useRef("")
  const socialSecurityNumberRef = useRef("")
  const isMaleRef = useRef()
  const legalPermitRef = useRef(false)

  const rightAidBrandRef = useRef("")
  const rightAidModelRef = useRef("")
  const rightSerialNumberRef = useRef("")
  const [rightWarrantyStart, onChangeRightWarrantyStart] = useState(new Date())
  const rightWarrantyDurationRef = useRef("")

  const leftAidBrandRef = useRef("")
  const leftAidModelRef = useRef("")
  const leftSerialNumberRef = useRef("")
  const [leftWarrantyStart, onChangeLeftWarrantyStart] = useState(new Date())
  const leftWarrantyDurationRef = useRef()

  const navigate = useNavigate()

  const { t } = useTranslation("addPatient")

  const { userData, db } = UserAuth()
  console.log(userData)

  const handleAddPatientButtonPress = async () => {
    const userInformation = {
      DOB: DOB,
      SSN: socialSecurityNumberRef.current.value,
      address: addressRef.current.value,
      assignedClinic: await userData.clinicID,
      email: patientEmailRef.current.value,
      hearingAids: [
        {
          aidBrand: rightAidBrandRef.current.value,
          aidModel: rightAidModelRef.current.value,
          aidSN: rightSerialNumberRef.current.value,
          isRightSide: true,
          warrantStart: rightWarrantyStart,
          warrantyDuration: rightWarrantyDurationRef.current.value,
        },
        {
          aidBrand: leftAidBrandRef.current.value,
          aidModel: leftAidModelRef.current.value,
          aidSN: leftSerialNumberRef.current.value,
          isRightSide: false,
          warrantStart: leftWarrantyStart,
          warrantyDuration: leftWarrantyDurationRef.current.value,
        },
      ],
      id: null,
      isMale: isMaleRef.current.value === "Erkek" ? true : false,
      legalPermit: legalPermitRef.current.checked,
      name: patientNameRef.current.value,
      phone: patientPhoneRef.current.value,
      surname: patientSurnameRef.current.value,
    }

    const newPatientRef = await addDoc(
      collection(db, "customers/", userData.customerID, "/patients"),
      userInformation
    ).then(async (data) => {
      const patientRef = doc(
        db,
        "customers/",
        userData.customerID,
        "/patients",
        data.id
      )
      console.log(data.id)
      await updateDoc(patientRef, {
        id: data.id,
      })
      console.log(data)
      props.buttonClick()
    })
    console.log("Document written with ID: ", newPatientRef.id)
  }

  const handleCancelButtonPress = async () => {
    try {
      props.buttonClick()
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <div className='add-patient-container'>
      <div className='add-patient-body'>
        <div
          onClick={handleCancelButtonPress}
          className='add-patient-cancel-btn'
        >
          <FiXCircle size={26} stroke='#f1f3ff' className='' />
        </div>
        <div className='add-patient-personal-container'>
          <div className='add-patient-personal-container-title'>
            {t("Personal Information")}
          </div>
          <div className='add-patient-text-input-container'>
            <div className='add-patient-text-input-cols'>
              <TextInput
                inputRef={patientNameRef}
                type={"text"}
                label={t("Name")}
                containerCSS='add-patient-textinput-container'
                labelCSS='add-patient-textinput-label'
                inputCSS='add-patient-textinput-input'
              />
              <TextInput
                inputRef={patientSurnameRef}
                type={"text"}
                label={t("Surname")}
                containerCSS='add-patient-textinput-container'
                labelCSS='add-patient-textinput-label'
                inputCSS='add-patient-textinput-input'
              />
            </div>
            <div className='add-patient-text-input-cols'>
              <TextInput
                inputRef={patientPhoneRef}
                type={"text"}
                label={t("Phone")}
                containerCSS='add-patient-textinput-container'
                labelCSS='add-patient-textinput-label'
                inputCSS='add-patient-textinput-input'
              />
              <TextInput
                inputRef={patientEmailRef}
                type={"text"}
                label={t("Email")}
                containerCSS='add-patient-textinput-container'
                labelCSS='add-patient-textinput-label'
                inputCSS='add-patient-textinput-input'
              />
            </div>
            <div className='add-patient-text-input-cols'>
              <TextInput
                inputRef={socialSecurityNumberRef}
                type={"text"}
                label={t("ID Number")}
                containerCSS='add-patient-textinput-container'
                labelCSS='add-patient-textinput-label'
                inputCSS='add-patient-textinput-input'
              />
              <div className='add-patient-permit-container'>
                <input id='permit' type='checkbox' ref={legalPermitRef} />
                <label className=''>{t("Permission")}</label>
              </div>
            </div>
          </div>
          <TextInput
            inputRef={addressRef}
            type={"text"}
            label={t("Adress")}
            containerCSS='add-patient-textinput-container'
            labelCSS='add-patient-textinput-label'
            inputCSS='add-patient-textinput-input'
          />
          <div className='add-patient-personal-footer-container'>
            <div className='add-patient-dob'>
              <div className=''>{t("DOB")}</div>
              <DatePicker onChange={onChangeDOB} value={DOB} />
            </div>
            <div className='flex justify-center bg-red-300'>
              <select
                className='bg-[#f9faff]'
                name='gender'
                id='gender'
                ref={isMaleRef}
              >
                <option>Erkek</option>
                <option>Kadın</option>
              </select>
            </div>
          </div>
        </div>
        <div className='add-patient-devices-container'>
          <div className='add-patient-devices-container-title'>
            {t("Device Information")}
          </div>
          <div className='add-patient-devices'>
            <div className='add-patient-devices-right'>
              <div className='add-patient-devices-right-title'>
                {t("Right")}
              </div>
              <TextInput
                inputRef={rightSerialNumberRef}
                type={"text"}
                label={t("Serial Number")}
                containerCSS='add-patient-textinput-container'
                labelCSS='add-patient-textinput-label'
                inputCSS='add-patient-textinput-input'
              />
              <TextInput
                inputRef={rightAidBrandRef}
                type={"text"}
                label={t("Device Name")}
                containerCSS='add-patient-textinput-container'
                labelCSS='add-patient-textinput-label'
                inputCSS='add-patient-textinput-input'
              />
              <TextInput
                inputRef={rightAidModelRef}
                type={"text"}
                label={t("Device Name")}
                containerCSS='add-patient-textinput-container'
                labelCSS='add-patient-textinput-label'
                inputCSS='add-patient-textinput-input'
              />
              <div className='add-patient-warranty-container'>
                <div className='add-patient-warranty-start'>
                  <div>{t("Warranty Start Date")}</div>
                  <DatePicker
                    onChange={onChangeRightWarrantyStart}
                    value={rightWarrantyStart}
                  />
                </div>
                <div>
                  <label className='add-patient-warranty-duration'>
                    {t("Warranty Duration")}:
                  </label>
                  <select
                    className='bg-[#f9faff]'
                    name='duration'
                    id='duration'
                    ref={rightWarrantyDurationRef}
                  >
                    <option>3 {t("Month")} </option>
                    <option>6 {t("Month")}</option>
                    <option>1 {t("Years")}</option>
                    <option>2 {t("Years")}</option>
                  </select>
                </div>
              </div>
            </div>
            <div className='add-patient-devices-left'>
              <div className='add-patient-devices-left-title'>{t("Left")}</div>
              <TextInput
                inputRef={leftSerialNumberRef}
                type={"text"}
                label={t("Serial Number")}
                containerCSS='add-patient-textinput-container'
                labelCSS='add-patient-textinput-label'
                inputCSS='add-patient-textinput-input'
              />
              <TextInput
                inputRef={leftAidBrandRef}
                type={"text"}
                label={t("Device Name")}
                containerCSS='add-patient-textinput-container'
                labelCSS='add-patient-textinput-label'
                inputCSS='add-patient-textinput-input'
              />
              <TextInput
                inputRef={leftAidModelRef}
                type={"text"}
                label={t("Device Name")}
                containerCSS='add-patient-textinput-container'
                labelCSS='add-patient-textinput-label'
                inputCSS='add-patient-textinput-input'
              />
              <div className='add-patient-warranty-container'>
                <div className='add-patient-warranty-start'>
                  <div>{t("Warranty Start Date")}</div>
                  <DatePicker
                    onChange={onChangeLeftWarrantyStart}
                    value={leftWarrantyStart}
                  />
                </div>
                <div>
                  <label
                    className='add-patient-warranty-duration'
                    for='duration'
                  >
                    {t("Warranty Duration")}:
                  </label>
                  <select
                    className='bg-[#f9faff]'
                    name='duration'
                    id='duration'
                    ref={leftWarrantyDurationRef}
                  >
                    <option>3 {t("Month")} </option>
                    <option>6 {t("Month")}</option>
                    <option>1 {t("Years")}</option>
                    <option>2 {t("Years")}</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='add-patient-buttons-container'>
          <div
            onClick={handleAddPatientButtonPress}
            className='patients-add-patient-btn'
          >
            <FiPlus size={30} stroke='#a3edd9' className='' /> Kullanıcı Ekle
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddPatient
