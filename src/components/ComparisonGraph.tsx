import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const CompareBarChart = () => {
  const lastYear = [5000, 10000, 20000, 32000, 12000, 13000];
  const thisYear = [6000, 2000, 40000, 21000, 9200, 8700];
  const maxYValue = Math.ceil(Math.max(...lastYear, ...thisYear) / 5000) * 5000; // Round to nearest step size

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Last Year",
        data: lastYear, // Sales data for last year
        backgroundColor: "#0068f7",
        borderRadius: 5,
        barThickness: 15,
      },
      {
        label: "This Year",
        data: thisYear,
        backgroundColor: "#b1efff",
        borderRadius: 5,
        barThickness: 15,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        stacked: false,
        categoryPercentage: 0.8,
        barPercentage: 0.4,
        grid: {
          drawOnChartArea: false,
          color: "transparent",
        },
        border: {
          display : false
        },
      },
      y: {
        min: 0,
        max: maxYValue, // Dynamically set max value
        ticks: {
          stepSize: 10000,
          callback: (value: number) => `${value / 1000}k`, // Format labels (e.g., 10k)
        },
        grid: {
          color: "#f3f5f7",
        },
        border: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: {
          boxWidth: 12,
          padding: 10,
        },
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },

    },
  };

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "700px",
        height: "250px",
        margin: "auto",
      }}
    >
     <Bar data={data} options={options as never} />
    </div>
  );
};

export default CompareBarChart;
