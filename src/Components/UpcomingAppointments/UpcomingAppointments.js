const UpcomingAppointments = () => {
  return (
    <div className="flex flex-col w-full h-96">
      <div className="m-2 mb-4 text-xl">Upcoming Appointments</div>
      {/* <div className="flex w-full h-full bg-[#ffffff] rounded-3xl drop-shadow-[0_10px_10px_rgba(147,197,253,0.25)]"> */}
      <div class="overflow-x-auto relative drop-shadow-[0_10px_10px_rgba(147,197,253,0.25)]">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700   dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="py-3 px-6">
                Name
              </th>
              <th scope="col" class="py-3 px-6">
                Date
              </th>
              <th scope="col" class="py-3 px-6">
                Time
              </th>
              <th scope="col" class="py-3 px-6">
                Status
              </th>
              <th scope="col" class="py-3 px-6">
                Reason
              </th>
            </tr>
          </thead>
          <tbody className="text-base">
            <tr class="bg-white border-b  dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Mıstık Fıstık
              </th>
              <td class="py-4 px-6">13 July 2022</td>
              <td class="py-4 px-6">12:00</td>
              <td class="py-4 px-6 text-green-600">Ongoing</td>
              <td class="py-4 px-6">Hearing Aid Experience</td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Işıl Mışıl
              </th>
              <td class="py-4 px-6">13 July 2022</td>
              <td class="py-4 px-6">14:00</td>
              <td class="py-4 px-6 text-blue-600">Waiting</td>
              <td class="py-4 px-6">Hearing Test</td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Denis Penis
              </th>
              <td class="py-4 px-6">13 July 2022</td>
              <td class="py-4 px-6">16:00</td>
              <td class="py-4 px-6 text-red-600">Canceled</td>
              <td class="py-4 px-6">Control</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* </div> */}
    </div>
  )
}
export default UpcomingAppointments
