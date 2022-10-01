import {
  FiUser,
  FiEdit,
  // FiFolder,
  // FiCalendar,
  // FiMessageSquare,
  FiTrash,
} from "react-icons/fi"

const PatientOverview = (props) => {
  return (
    <div className="w-full flex h-full box-border flex-col rounded-tl-3xl bg-[#fff] ">
      <div className="flex w-full items-center justify-center  ">
        <FiUser size={120} color="#1f2433" />
      </div>
      <div className="flex justify-center mt-10 font-medium text-2xl ">
        Deniz Yeşilırmak
      </div>
      <div className="flex justify-center font-medium text-m ">35495733492</div>
      <div className="flex justify-between pl-5 pr-5 mt-10 font-medium text-m  ">
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
      <div className="flex flex-col pl-5 pr-5  font-medium text-m ">
        {/* <div className="flex justify-around ">
          <div className="flex  bg-orange-400 rounded-3xl">
            <FiFolder size={34} color="white" />
          </div>
          <div className="flex  bg-blue-400 rounded-3xl">
            <FiCalendar size={34} color="white" />
          </div>
          <div className="flex  bg-red-300 rounded-3xl">
            <FiMessageSquare size={34} color="white" />
          </div>
        </div> */}
        <div className="flex mb-5 text-lg font-semibold ">Detaylar</div>
        <div className="flex justify-between w-full  ">
          <div className="flex w-1/2">Adres:</div>
          <div className="flex w-1/2 font-light">
            Sıcaksu Mah 411. Sokak 15/8 Muratpaşa/ANTALYA
          </div>
        </div>
        <div className="flex justify-between w-full ">
          <div>Telefon:</div>
          <div className="flex w-1/2 font-light">05356823732</div>
        </div>
        <div className="flex justify-between w-full">
          <div>Doğum Tarihi:</div>
          <div className="flex w-1/2 font-light">12 Aralık 2012</div>
        </div>
        <div className="flex justify-between w-full ">
          <div>Kaydedildiği Klinik</div>
          <div className="flex w-1/2 font-light">Muratpaşa</div>
        </div>
      </div>
      <div className="flex justify-around items-center ">
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
