import { useState } from "react"
import "./Chart.css"

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

const Chart = () => {
  //eslint-disable-next-line
  const [chartData, setChartData] = useState([
    {
      name: "Page A",
      uv: 100,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 1000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 900,
      pv: 4300,
      amt: 2100,
    },
  ])

  return (
    <div className='chartjs-container'>
      <ResponsiveContainer width='100%' height={300}>
        <AreaChart
          data={chartData}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid display='none' strokeDasharray='0 0 0 0' />
          <XAxis dataKey='name' stroke='var(--c-gray)' />
          <YAxis stroke='var(--c-gray)' />
          <Tooltip />
          <Area type='monotone' dataKey='uv' stroke='#8884d8' fill='#8884d8' />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart
