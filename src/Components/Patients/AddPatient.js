import React, { useState, useRef } from "react"
import DatePicker from "react-date-picker"

import { collection, addDoc, updateDoc, doc } from "firebase/firestore"
import { UserAuth } from "../../Context/AuthContext"

import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"

import TextInput from "../../UITools/TextInput"
import Button from "../../UITools/Button"

const AddPatient = () => {
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
      navigate("/patients")
    })
    console.log("Document written with ID: ", newPatientRef.id)
  }

  const handleCancelButtonPress = async () => {
    try {
      navigate("/patients")
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <div className='flex w-full h-full items-center bg-[#f9faff] text-slate-700  flex-col '>
      <div className='flex mt-10  h-1/4 flex-col w-3/4'>
        <div className='items-center drop-shadow-md font-bold text-3xl'>
          {t("Personal Information")}
        </div>
        <div className='flex'>
          <TextInput
            inputRef={patientNameRef}
            type={"text"}
            label={t("Name")}
            addCSS='border-b-2 placeholder:italic '
          />
          <TextInput
            inputRef={patientSurnameRef}
            type={"text"}
            label={t("Surname")}
            addCSS=' border-b-2 placeholder:italic '
          />
          <TextInput
            inputRef={patientPhoneRef}
            type={"text"}
            label={t("Phone")}
            addCSS=' border-b-2 placeholder:italic '
          />{" "}
          <TextInput
            inputRef={patientEmailRef}
            type={"text"}
            label={t("Email")}
            addCSS=' border-b-2 placeholder:italic '
          />
          <TextInput
            inputRef={addressRef}
            type={"text"}
            label={t("Adress")}
            addCSS=' border-b-2 placeholder:italic '
          />
          <TextInput
            inputRef={socialSecurityNumberRef}
            type={"text"}
            label={t("ID Number")}
            addCSS='border-b-2 placeholder:italic '
          />
        </div>
        <div className='flex items-start justify-start '>
          <div className='flex'>
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
          <div className='flex h-full justify-center items-center pt-5 pl-5'>
            <input id='permit' type='checkbox' ref={legalPermitRef} />
            <label className=''>{t("Permission")}</label>
          </div>
        </div>
      </div>
      <div className='flex h-2/4  flex-col w-3/4'>
        <div className='items-center drop-shadow-md font-bold text-3xl'>
          {t("Device Information")}
        </div>
        <div className='flex justify-between ml-10'>
          <div className='mt-10'>
            <div className='flex font-semibold mb-2 text-[#eb5756] text-xl'>
              {t("Right")}
            </div>
            <TextInput
              inputRef={rightSerialNumberRef}
              type={"text"}
              label={t("Serial Number")}
              addCSS=' border-b-2 placeholder:italic '
            />
            <TextInput
              inputRef={rightAidBrandRef}
              type={"text"}
              label={t("Device Name")}
              addCSS='border-b-2 placeholder:italic '
            />
            <TextInput
              inputRef={rightAidModelRef}
              type={"text"}
              label={t("Device Name")}
              addCSS='border-b-2 placeholder:italic '
            />
            <div className='flex items-center'>
              <div className='flex flex-col'>
                {t("Warranty Start Date")}
                <DatePicker
                  onChange={onChangeRightWarrantyStart}
                  value={rightWarrantyStart}
                />
              </div>
              <label className='font-semibold mr-5'>
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
          <div className='mt-10'>
            <div className='flex font-semibold mb-2 text-[#5c8cd9] text-xl'>
              {t("Left")}
            </div>
            <TextInput
              inputRef={leftSerialNumberRef}
              type={"text"}
              label={t("Serial Number")}
              addCSS=' border-b-2 placeholder:italic '
            />
            <TextInput
              inputRef={leftAidBrandRef}
              type={"text"}
              label={t("Device Name")}
              addCSS=' border-b-2 placeholder:italic '
            />
            <TextInput
              inputRef={leftAidModelRef}
              type={"text"}
              label={t("Device Name")}
              addCSS=' border-b-2 placeholder:italic '
            />
            <div className='flex items-center'>
              <div className='flex flex-col'>
                {t("Warranty Start Date")}
                <DatePicker
                  onChange={onChangeLeftWarrantyStart}
                  value={leftWarrantyStart}
                />
              </div>
              <label className='font-semibold ' for='duration'>
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
      <div className='flex h-1/4 justify-evenly items-center w-full'>
        <div className='w-[120px]'>
          <Button
            label={t("Cancel")}
            onClick={handleCancelButtonPress}
            addCSS={
              "flex justify-center items-center bg-[#eb5656] hover:bg-[#eb5656]"
            }
          />
        </div>
        <div className='w-[120px]'>
          <Button
            label={t("Save")}
            onClick={handleAddPatientButtonPress}
            addCSS={
              "flex items-center justify-center bg-green-500 hover:bg-[#273169]"
            }
          />
        </div>
      </div>
    </div>
  )
}

export default AddPatient
