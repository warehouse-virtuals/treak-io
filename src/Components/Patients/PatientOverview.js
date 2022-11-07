import { useNavigate } from "react-router-dom"
import { UserAuth } from "../../Context/AuthContext"
import {
  FiUser,
  FiEdit,
  // FiFolder,
  FiCalendar,
  // FiMessageSquare,
  FiTrash,
} from "react-icons/fi"

const PatientOverview = (props) => {
  const { deletePatient, userData } = UserAuth()
  const navigate = useNavigate()

  const handleDeleteOnClick = async (patientID) => {
    await deletePatient(userData.customerID, patientID)
    props.patientDeleted("confirm")
  }

  let person = props.focusedPatientData
  let hearingAids = person.hearingAids

  if (!person.name) {
    return null
  } else {
    return (
      <div className='w-full flex h-full box-border flex-col rounded-3xl p-4 bg-[#fff] drop-shadow-xl '>
        <div className='flex w-full items-center drop-shadow-md mt-10 justify-center  '>
          <FiUser size={120} color='#c6c9d7' />
        </div>
        <div className='flex justify-center mt-10 font-medium text-2xl '>
          {person.name}&nbsp;{person.surname}
        </div>
        <div className='flex justify-center font-medium text-m '>
          {person.SSN}
        </div>
        <div className='flex justify-between pl-5 pr-5 mt-10 font-medium text-m  '>
          {hearingAids
            ? hearingAids.map((hearingAid, index) => {
                if (hearingAid.isRightSide) {
                  return (
                    <div key={index} className='flex w-1/2 flex-col '>
                      <div className='text-[#eb5656] font-semibold'>Sağ</div>
                      <div className='font-normal'>
                        {hearingAid.aidBrand}
                        {hearingAid.aidModel}
                      </div>
                      <div className='font-normal '>{hearingAid.aidSN}</div>
                    </div>
                  )
                } else {
                  return (
                    <div key={index} className='flex items-end w-1/2 flex-col '>
                      <div className='text-[#5c8cd9] font-semibold'>Sol</div>
                      <div className='font-normal'>
                        {hearingAid.aidBrand}
                        {hearingAid.aidModel}
                      </div>
                      <div className='font-normal '>{hearingAid.aidSN}</div>
                    </div>
                  )
                }
              })
            : null}
        </div>
        <div className='flex flex-col pl-5 pr-5  font-medium text-m '>
          <div className='flex mb-5 text-lg font-semibold '>Detaylar</div>
          <div className='flex justify-between w-full  '>
            <div className='flex w-1/2'>Adres:</div>
            <div className='flex w-1/2 font-light'>{person.address}</div>
          </div>
          <div className='flex justify-between w-full '>
            <div>Telefon:</div>
            <div className='flex w-1/2 font-light'>{person.phone}</div>
          </div>
          <div className='flex justify-between w-full'>
            <div>Doğum Tarihi:</div>
            <div className='flex w-1/2 font-light'>{person.DOB}</div>
          </div>
          <div className='flex justify-between w-full '>
            <div>Kaydedildiği Klinik</div>
            <div className='flex w-1/2 font-light'>Muratpaşa</div>
          </div>
        </div>
        <div className='flex mt-10 justify-around items-center '>
          <div>
            <FiTrash
              size={24}
              color='red'
              onClick={() => {
                handleDeleteOnClick(person.id).then(() => {})
              }}
            />
          </div>
          <div
            onClick={() =>
              navigate("/addAppointment", { state: { patient: person } })
            }
          >
            <FiCalendar size={24} color='blue' />
          </div>
          <div>
            <FiEdit size={24} color='gray' />
          </div>
        </div>
      </div>
    )
  }
}

export default PatientOverview
