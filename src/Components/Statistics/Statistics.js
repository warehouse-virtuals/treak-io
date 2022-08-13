import "react-circular-progressbar/dist/styles.css"
import StatisticsItems from "./StatisticsItems"

const Statistics = (props) => {
  const value = 15
  const maxValue = 24
  return (
    <div className="flex justify-center items-center  h-full w-3/6 text-[#0a1f33] text-5xl">
      <div className="flex flex-col w-full h-full">
        <div className="flex flex-col justify-center items-center w-full h-1/2 text-sm">
          <div className="flex h-1/3">
            <StatisticsItems value={value} maxValue={maxValue} />
          </div>
          Hedef Cihaz Sayısı = {maxValue} Satılan Cihaz Sayısı = {value}
        </div>
        <div className="flex flex-col justify-center items-center w-full h-1/2 text-sm">
          <div className="flex h-1/3">
            <StatisticsItems />
          </div>
          bla bla
        </div>
      </div>
      <div className="flex flex-col w-full h-full">
        <div className="flex flex-col justify-center items-center w-full h-1/2 text-sm">
          <div className="flex h-1/3">
            <StatisticsItems />
          </div>
          bla bla
        </div>
        <div className="flex flex-col justify-center items-center w-full h-1/2 text-sm">
          <div className="flex h-1/3">
            <StatisticsItems />
          </div>
          bla bla
        </div>
      </div>
    </div>
  )
}

export default Statistics
