import {
  FiUser,
  FiEdit,
  FiFolder,
  FiCalendar,
  FiMessageSquare,
  FiTrash,
} from "react-icons/fi"

const PatientOverview = (props) => {
  return (
    <div className="w-full flex h-full box-border flex-col bg-white pt-5">
      <div className="flex w-full items-center justify-center  ">
        <FiUser size={120} color="#1f2433" />
      </div>
      <div className="flex justify-center mt-10 font-medium text-2xl ">
        Deniz Yeşilırmak
      </div>
      <div className="flex justify-center font-medium text-m ">35495733492</div>
      <div className="flex justify-between pl-5 pr-5 mt-10 font-medium text-m text-gray-900 ">
        <div className="flex w-1/2 flex-col ">
          <div className="text-[#eb5656] font-semibold">Sağ</div>
          <div className="font-normal">Oticon XCeed 2</div>
          <div className="font-normal ">21345342</div>
          <div className="font-normal "></div>
        </div>
        <div className="flex items-end w-1/2 flex-col ">
          <div className="text-[#5c8cd9] font-semibold">Sol</div>
          <div className="font-normal">Oticon XCeed 2</div>
          <div className="font-normal ">21345342</div>
          <div className="font-normal "></div>
        </div>
      </div>
      <div className="flex flex-col pl-5 pr-5  mt-10 font-medium text-m text-gray-900">
        <div className="flex justify-around p-3">
          <div className="flex p-3 bg-orange-400 rounded-3xl">
            <FiFolder size={34} color="white" />
          </div>
          <div className="flex p-3 bg-blue-400 rounded-3xl">
            <FiCalendar size={34} color="white" />
          </div>
          <div className="flex p-3 bg-red-300 rounded-3xl">
            <FiMessageSquare size={34} color="white" />
          </div>
        </div>
        <div className="flex mb-5 text-lg font-semibold mt-10">Detaylar</div>
        <div className="flex justify-between w-full mt-10 mb-5">
          <div className="flex w-1/2">Adres:</div>
          <div className="flex w-1/2 font-light">
            Sıcaksu Mah 411. Sokak 15/8 Muratpaşa/ANTALYA
          </div>
        </div>
        <div className="flex justify-between w-full mb-5">
          <div>Telefon:</div>
          <div className="flex w-1/2 font-light">05356823732</div>
        </div>
        <div className="flex justify-between w-full mb-5">
          <div>Doğum Tarihi:</div>
          <div className="flex w-1/2 font-light">12 Aralık 2012</div>
        </div>
        <div className="flex justify-between w-full mb-5">
          <div>Kaydedildiği Klinik</div>
          <div className="flex w-1/2 font-light">Muratpaşa</div>
        </div>
      </div>
      <div className="flex justify-around mt-28 items-center ">
        <div>
          <FiTrash size={24} color="red" />
        </div>
        <div>
          <FiEdit size={24} color="gray" />
        </div>
      </div>
    </div>
  )
}

export default PatientOverview
