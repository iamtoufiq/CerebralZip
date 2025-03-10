import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

// Define props type
interface RadialBarChartProps {
  score: number;
}

const RadialBarChart: React.FC<RadialBarChartProps> = ({ score }) => {
  const data = {
    labels: ["Progress", "Remaining"],
    datasets: [
      {
        data: [score, 100 - Number(score)],
        backgroundColor: ["#0068f6", "#edeff1"],
        borderRadius: 12,
        borderWidth: 0,
        circumference: 180,
        rotation: 270,
        cutout: "90%",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div
      style={{ width: "250px", height: "125px", margin: "auto" }}
      className="pb-5"
    >
      <Doughnut data={data} options={options} />
      <div
        style={{
          position: "relative",
          top: "-36px",
          textAlign: "center",
          fontSize: "18px",
          fontWeight: "bold",
          color: "#333",
          lineHeight: "1.2",
        }}
      >
        <div className="text-[#43444B] text-[35.9px] leading-[43.45px] ">
          {score || 0}%
        </div>
        <div className="text-[#C0C1C5] leading-[14.89px] text-[12.3px] ">
          of 100 points
        </div>
      </div>
    </div>
  );
};

export default RadialBarChart;
