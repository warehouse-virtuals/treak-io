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
      name: "Pzt",
      uv: 10,
      pv: 240,
      amt: 240,
    },
    {
      name: "Sal",
      uv: 300,
      pv: 139,
      amt: 221,
    },
    {
      name: "Çar",
      uv: 100,
      pv: 980,
      amt: 229,
    },
    {
      name: "Per",
      uv: 278,
      pv: 390,
      amt: 200,
    },
    {
      name: "Cum",
      uv: 189,
      pv: 480,
      amt: 218,
    },
    {
      name: "Cmt",
      uv: 239,
      pv: 380,
      amt: 250,
    },
  ])

  return (
    <div className='chartjs-container'>
      <div className='chart-header'>Chart Title</div>
      <ResponsiveContainer width='100%' maxHeight={300}>
        <AreaChart
          data={chartData}
          margin={{
            top: 5,
            left: 0,
            right: 25,
          }}
        >
          <CartesianGrid display='none' strokeDasharray='0 0 0 0' />
          <XAxis
            dataKey='name'
            stroke='var(--c-neutral-500)'
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke='var(--c-neutral-500)'
            tickLine={false}
            axisLine={false}
          />
          <Tooltip />
          <Area
            type='monotone'
            dataKey='uv'
            strokeWidth={2}
            stroke='var(--c-violet-400)'
            fill='none'
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart
