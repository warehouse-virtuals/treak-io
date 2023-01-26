import { useState } from "react"

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

import { FirebaseActions } from "../../Context/FirebaseContext"
import "./ChartLine.css"

const ChartLine = () => {
  const { lineChartData } = FirebaseActions()

  return (
    <div className='chartline-container'>
      <div className='chartline-header'>Chart Title</div>
      <ResponsiveContainer width='100%' maxHeight={300}>
        <AreaChart
          data={lineChartData}
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

export default ChartLine
