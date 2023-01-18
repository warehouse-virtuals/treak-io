import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"

import "./Chart.css"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "First dataset",
      data: [33, 53, 85, 41, 44, 65],
      pointBackgroundColor: "rgba(75,192,192)",
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)",

      tension: 0.2,
    },
    {
      label: "Second dataset",
      data: [33, 25, 35, 51, 54, 76],

      borderColor: "#742774",
      tension: 0.2,
    },
  ],
}

const Chart = () => {
  return (
    <div className='chartjs-container'>
      <Line tensi data={data} />
    </div>
  )
}

export default Chart
