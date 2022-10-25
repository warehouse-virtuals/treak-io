import { useLocation } from "react-router-dom"
import TopBar from "../TopBar/TopBar"

const Appointments = () => {
  const { state } = useLocation()
  const { patient } = state
  console.log(patient)

  return (
    <div className='flex flex-col h-full w-full'>
      <TopBar />
      <div className='w-full h-full flex rounded-tl-3xl  bg-[#f9faff] flex-row'></div>
    </div>
  )
}

export default Appointments
