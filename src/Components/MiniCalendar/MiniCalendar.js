import { eachDayOfInterval, endOfMonth, endOfWeek, format, isThisMonth, isToday, parse, previousDay, startOfToday, startOfWeek } from 'date-fns'
import { tr } from 'date-fns/locale'
import React from 'react'

const MiniCalendar = () => {

  const today = startOfToday()
  console.log(today)
  const firstDayCurrentMonth = parse(format(startOfToday(), 'MMM-yyyy'), 'MMM-yyyy', new Date())
  console.log(firstDayCurrentMonth)

  const days = eachDayOfInterval({
    start: startOfWeek(previousDay(firstDayCurrentMonth, 1), { locale: tr }),
    end: endOfWeek(endOfMonth(firstDayCurrentMonth), { locale: tr })
  })

  console.log(days)

  return (
    <div className="flex rounded-lg flex-col justify-center items-center w-full mt-10 select-none bg-[#f9fafe] box-border p-3 ">
      <div className='w-full text-[26px] font-bold ml-10 mt-2'>
        {format(today, 'MMMM yyyy')}
      </div>
      <div className='grid w-full h-16  grid-cols-7 grid-rows-1 font-bold'>
        <div className='flex justify-center items-center text-center h-16'>
          Mon
        </div>
        <div className='flex justify-center items-center text-center h-16'>
          Tue
        </div>
        <div className='flex justify-center items-center text-center h-16'>
          Wed
        </div>
        <div className='flex justify-center items-center text-center h-16'>
          Thu
        </div>
        <div className='flex justify-center items-center text-center h-16'>
          Fri
        </div>
        <div className='flex justify-center items-center text-center h-16'>
          Sat
        </div>
        <div className='flex justify-center items-center text-center h-16'>
          Sun
        </div>
      </div>


      <div className='w-full h-[400px] grid grid-cols-7 grid-rows-6 row-auto '>
        {
          days.map((day, index) => {
            return (
              <time
                className={`m-2 rounded-md box-border flex justify-center items-center text-center ${isThisMonth(day) ? '' : 'text-gray-400'} ${isToday(day) ? 'bg-[#605bff] text-white' : ''}`}
                key={index}
              >
                {format(day, 'dd')}
              </time>
            )
          })
        }
      </div>
    </div>
  )
}

export default MiniCalendar
