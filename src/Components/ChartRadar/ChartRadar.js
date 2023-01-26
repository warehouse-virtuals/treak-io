import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts"

import { FirebaseActions } from "../../Context/FirebaseContext"
import "./ChartRadar.css"

const ChartRadar = () => {
  const { radarChartData } = FirebaseActions()

  return (
    <div className='chartradar-container'>
      {/* <div className='chartradar-header'>Chart Title</div> */}
      <ResponsiveContainer width='100%' height='100%'>
        <RadarChart cx='50%' cy='50%' outerRadius='80%' data={radarChartData}>
          <PolarGrid />
          <PolarAngleAxis dataKey='subject' />
          <PolarRadiusAxis angle={30} domain={[0, 150]} />
          <Radar
            name='Mike'
            dataKey='A'
            stroke='var(--c-violet-400)'
            fill='var(--c-violet-200)'
            fillOpacity={0.6}
          />
          <Radar
            name='Lily'
            dataKey='B'
            stroke='var(--c-green-400)'
            fill='var(--c-green-200)'
            fillOpacity={0.6}
          />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ChartRadar
