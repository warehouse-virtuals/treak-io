const UpcomingAppointments = (props) => {
  return (
    <div className="flex flex-col px-10 w-full ">
      <div className="font-medium text-xl">
        {props.t("Upcoming Appointments")}
      </div>
      {/* <div className="flex w-full h-full bg-[#ffffff] rounded-3xl drop-shadow-[0_10px_10px_rgba(147,197,253,0.25)]"> */}
      <div className="overflow-x-auto relative drop-shadow-[0_10px_10px_rgba(147,197,253,0.25)]">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700   dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                {props.t("Name")}
              </th>
              <th scope="col" className="py-3 px-6">
                {props.t("Date")}
              </th>
              <th scope="col" className="py-3 px-6">
                {props.t("Time")}
              </th>
              <th scope="col" className="py-3 px-6">
                {props.t("Status")}
              </th>
              <th scope="col" className="py-3 px-6">
                {props.t("Reason")}
              </th>
            </tr>
          </thead>
          <tbody className="text-base">
            <tr className="bg-white border-b  dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-slate-700 whitespace-nowrap dark:text-white"
              >
                Mıstık Fıstık
              </th>
              <td className="py-4 px-6">13 July 2022</td>
              <td className="py-4 px-6">12:00</td>
              <td className="py-4 px-6 text-green-600">Ongoing</td>
              <td className="py-4 px-6">Hearing Aid Experience</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-slate-700 whitespace-nowrap dark:text-white"
              >
                Işıl Mışıl
              </th>
              <td className="py-4 px-6">13 July 2022</td>
              <td className="py-4 px-6">14:00</td>
              <td className="py-4 px-6 text-blue-600">Waiting</td>
              <td className="py-4 px-6">Hearing Test</td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-slate-700 whitespace-nowrap dark:text-white"
              >
                Denis Penis
              </th>
              <td className="py-4 px-6">13 July 2022</td>
              <td className="py-4 px-6">16:00</td>
              <td className="py-4 px-6 text-red-600">Canceled</td>
              <td className="py-4 px-6">Control</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* </div> */}
    </div>
  )
}
export default UpcomingAppointments
