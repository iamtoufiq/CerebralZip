import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);



const LineChart: React.FC = () => {

  const data = {
    labels: ["23.05", "24.05", "25.05", "26.05", "27.05", "28.05", "29.05"],
    datasets: [
        {
            label: "Web sales",
            fill: false,
            lineTension: 0.3,
            backgroundColor: "#e1f7f9",
            borderColor: "#e1f7f9",
            borderWidth: 2, // Make the line thinner (default is usually 3)
            borderCapStyle: "round",
            borderJoinStyle: "round",
            pointBorderColor: "#e1f7f9",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 2,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#e1f7f9",
            pointHoverBorderColor: "#fff",
            pointHoverBorderWidth: 5,
            pointRadius: 0,
            pointHitRadius: 5,
            data: [0, 14, 21, 9, 35, 31, 36],
          }
,
      {
        label: "Offline selling",
        fill: false,
        lineTension: 0.3,
        backgroundColor: "#94bffb",
        borderColor: "#94bffb",
        borderCapStyle: "round",
        borderJoinStyle: "round",
        pointBorderColor: "#94bffb",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "#94bffb",
        pointHoverBorderColor: "#fff",
        pointHoverBorderWidth: 5,
        pointRadius: 0,
        pointHitRadius: 5,
        data: [5, 15, 10, 50 ,30, 80],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        min: 0,
        max: 80,
        ticks: {
          stepSize: 40,
          callback: (value: number) => {
            if (value === 0) return "0k";
            if (value === 40) return "4k";
            if (value === 80) return "8k";
            return "";
          },
        },
        grid: {
          drawTicks: false,
          display: false, // Hide horizontal grid lines
        },
        border: {
          display: false, // **This hides the Y-axis line**
        },
      },
      x: {
        ticks: {
          display: false, // Hide X-axis labels
        },
        grid: {
          display: false, // Hide vertical grid lines
        },
        border: {
          display: false, // **This hides the X-axis line**
        },
      },
    },
    plugins: {
      tooltip: {
        enabled: false,
      },
      legend: {
        display: true,
        position: "bottom",
        labels: {
          boxWidth: 12,
          padding: 10,
        },
      },
    },
    elements: {
      line: {
        backgroundColor: "transparent",
      },
    },
  };




  return (
    <div style={{ backgroundColor: "white", padding: "10px", height: "200px" }}>
    <Line options={options as never} data={data as never} />
    <div id="_bottom" className="flex justify-around items-center">
      <p className="text-[14.3px] leading-[17.31px] font-semibold text-[#838387]">1,304%</p>
      <p className="text-[14.3px] leading-[17.31px] font-semibold text-[#838387]">473%</p>
    </div>
  </div>
  );
};

export default LineChart;
